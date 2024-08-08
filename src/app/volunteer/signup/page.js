"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function VolunteerSignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [useAutoLocation, setUseAutoLocation] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (useAutoLocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const autoLocation = `Lat: ${latitude}, Long: ${longitude}`;

        try {
          const res = await axios.post("/api/signup", {
            email,
            password,
            username,
            location: autoLocation,
          });

          if (res.status === 201) {
            const result = await signIn("credentials", {
              redirect: false,
              email,
              password,
            });

            if (!result.error) {
              router.push("/volunteer/dashboard");
            }
          }
        } catch (err) {
          console.error(err);
        }
      });
    } else {
      try {
        const res = await axios.post("/api/signup", {
          email,
          password,
          username,
          location,
        });

        if (res.status === 200) {
          const result = await signIn("credentials", {
            redirect: false,
            email,
            password,
          });

          if (!result.error) {
            router.push("/volunteer/dashboard");
          }
        }
      } catch (err) {
        console.error(err);
      }
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Location</label>
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={useAutoLocation}
                onChange={() => setUseAutoLocation(!useAutoLocation)}
                className="mr-2"
              />
              <span className="text-gray-700 text-sm">Use my current location</span>
            </div>
            {!useAutoLocation && (
              <input
                type="text"
                placeholder="Enter your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            )}
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded font-bold">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
