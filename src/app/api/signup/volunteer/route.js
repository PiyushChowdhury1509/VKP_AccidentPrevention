import bcrypt from "bcryptjs";
import crypto from "crypto";
import Volunteer from "@/models/volunteer";
import connectDB from "@/dbconfig/dbconfig";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail"; // import your sendVerificationEmail helper

export async function POST(req) {
  const { email, password, username, location } = await req.json();

  await connectDB();

  const existingUser = await Volunteer.findOne({ email });
  if (existingUser) {
    return new Response(JSON.stringify({ message: "User already exists" }), {
      status: 422,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  const verifyToken = crypto.randomBytes(32).toString('hex');

  const user = new Volunteer({
    username,
    email,
    password: hashedPassword,
    location,
    verifyToken,
  });

  await user.save();

  // Send verification email
  const verificationLink = `${process.env.NEXT_PUBLIC_BASE_URL}/volunteer/verify/${verifyToken}`;
  const emailResponse = await sendVerificationEmail(email, username, verificationLink);

  if (!emailResponse.success) {
    return new Response(JSON.stringify({ message: "Failed to send verification email" }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify({ message: "User created, verification email sent" }), {
    status: 201,
  });
}
