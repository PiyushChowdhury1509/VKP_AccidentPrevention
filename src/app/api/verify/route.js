import connectDB from "@/dbconfig/dbconfig";
import Volunteer from "@/models/volunteer"; // or wherever your user model is defined

export async function GET(req) {
  const url = new URL(req.url);
  console.log(url)
  const token = url.searchParams.get("token");
  console.log(token)

  if (!token) {
    return new Response(JSON.stringify({ message: "Token is required" }), {
      status: 400,
    });
  }

  await connectDB();

  try {
    // Verify the token (implement this according to your logic)
    const user = await Volunteer.findOne({ verifyToken: token });

    if (!user) {
      return new Response(JSON.stringify({ message: "Invalid token" }), {
        status: 400,
      });
    }

    // Mark the user as verified or complete other necessary actions
    user.verified = true;
    await user.save();

    return new Response(JSON.stringify({ message: "Verification successful" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error during verification:", error);
    return new Response(JSON.stringify({ message: "Verification failed" }), {
      status: 500,
    });
  }
}
