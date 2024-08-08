import bcrypt from "bcryptjs";
import Volunteer from "@/models/volunteer";
import connectDB from "@/dbconfig/dbconfig";

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

  const user = new Volunteer({
    username,
    email,
    password: hashedPassword,
    location,
    role: "volunteer",
  });

  await user.save();

  return new Response(JSON.stringify({ message: "User created" }), {
    status: 201,
  });
}