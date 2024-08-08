"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function VolunteerSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("volunteer");
  const [showRoleOptions, setShowRoleOptions] = useState(false);
  const router = useRouter();

  const handleToggle = async () => {
    setShowRoleOptions(!showRoleOptions);
  };

  const handleRole = async (rolename) => {
    setRole(rolename);
    setShowRoleOptions(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result && !result.error) {
        console.log("login successful");
        router.push("/volunteer/dashboard");
      } else {
        console.error(result.error);
      }
    } catch (err) {
      console.error("Sign-in failed:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">🔒 Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-bold hover:bg-blue-700 transition duration-300"
          >
            Sign In
          </button>
          <div className="relative mt-4">
            <button
              type="button"
              className="w-full bg-gray-800 text-white py-3 px-4 rounded-lg font-bold flex justify-between items-center"
              onClick={handleToggle}
            >
              {role} <span className={`transform ${showRoleOptions ? "rotate-180" : ""} transition-transform duration-300`}>&#9660;</span>
            </button>
            {showRoleOptions && (
              <ul className="absolute w-full bg-white shadow-lg rounded-lg mt-2">
                <li
                  className="p-3 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleRole("volunteer")}
                >
                  Volunteer
                </li>
                <li
                  className="p-3 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleRole("hospital")}
                >
                  Hospital
                </li>
              </ul>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
