import bcrypt from "bcryptjs";
import Hospital from "@/models/hospital";
import connectDB from "@/dbconfig/dbconfig";

export async function POST(req) {
  try {
    const { email, password, name, address, contactNumber, emergencyContactNumber, geoLocation } = await req.json();

    if (!email || !password || !name || !address || !contactNumber || !geoLocation) {
      return new Response(JSON.stringify({ message: "All fields are required" }), {
        status: 400,
      });
    }

    await connectDB();

    const existingHospital = await Hospital.findOne({ email });
    if (existingHospital) {
      return new Response(JSON.stringify({ message: "Hospital already exists" }), {
        status: 422,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const hospital = new Hospital({
      name,
      email,
      password: hashedPassword,
      address,
      contactNumber,
      emergencyContactNumber,
      geoLocation,
    });

    await hospital.save();

    return new Response(JSON.stringify({ message: "Hospital created" }), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error creating hospital", error: error.message }), {
      status: 500,
    });
  }
}
