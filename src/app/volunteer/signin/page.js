"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function VolunteerSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("volunteer"); 
  const [showRoleOptions, setShowRoleOptions] = useState(false);
  const router = useRouter();

  const handleToggle = () => {
    setShowRoleOptions(!showRoleOptions);
  };

  const handleRole = (rolename) => {
    setRole(rolename);
    setShowRoleOptions(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    toast.loading("Signing in...");

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
        role, 
      });

      if (result && !result.error) {
        toast.dismiss(); 
        const redirectUrl = role === "volunteer" ? "/volunteer/dashboard" : "/hospital/dashboard";
        router.push(redirectUrl);
        toast.success("Signed in successfully");
      } else {
        toast.dismiss();
        toast.error(result.error || "Sign-in failed");
      }
    } catch (err) {
      toast.dismiss();
      toast.error("Sign-in failed: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white/30 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">🔒 Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
      <ToastContainer />
    </div>
  );
}
