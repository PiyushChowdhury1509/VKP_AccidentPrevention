// pages/signup/volunteer.js
"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function VolunteerSignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [useAutoLocation, setUseAutoLocation] = useState(false);
  const [role] = useState("volunteer");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !username || (!useAutoLocation && !location) || !termsAccepted) {
      toast.error("Please fill all fields and accept the terms and conditions.");
      return;
    }

    setLoading(true);
    toast.info("Signing up...");

    let resolvedLocation = location;

    if (useAutoLocation) {
      await new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          resolvedLocation = `Lat: ${latitude}, Long: ${longitude}`;
          resolve();
        });
      });
    }

    try {
      const res = await axios.post("/api/signup/volunteer", {
        email,
        password,
        username,
        location: resolvedLocation,
        role,
      });

      if (res.status === 201) {
        toast.success("Sign up successful! Please check your email to verify your account.");
      } else {
        toast.error(res.data.message || "Sign up failed. Please try again.");
      }
    } catch (err) {
      toast.error("Sign up failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('/volunteerSignupBg.jpg')` }}>
      <div className="backdrop-blur-sm bg-white/40 p-8 rounded-lg shadow-lg max-w-4xl w-full flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-10">
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-800 text-sm font-bold mb-2">Username</label>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded bg-white/80 text-gray-800"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded bg-white/80 text-gray-800"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded bg-white/80 text-gray-800"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 text-sm font-bold mb-2">Location</label>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={useAutoLocation}
                  onChange={() => setUseAutoLocation(!useAutoLocation)}
                  className="mr-2"
                />
                <span className="text-gray-800 text-sm">Use my current location</span>
              </div>
              {!useAutoLocation && (
                <input
                  type="text"
                  placeholder="Enter your location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded bg-white/80 text-gray-800"
                />
              )}
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                className="mr-2"
              />
              <label className="text-gray-800 text-sm">
                I have read and agree to the <a href="/terms-and-conditions" className="text-blue-500 underline">Terms and Conditions</a>.
              </label>
            </div>
            <button
              type="submit"
              className={`w-full py-2 px-4 rounded font-bold ${loading ? "bg-gray-400" : "bg-blue-600"} text-white`}
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center text-gray-900 backdrop-blur-sm bg-white/50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Volunteer</h2>
          <p className="mb-4">Join us and make a difference! As a volunteer, you'll be at the forefront of emergency response, helping to save lives and provide critical assistance when it's needed the most. Your quick actions and dedication are essential to our mission. Sign up today to be a hero in times of need!</p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
