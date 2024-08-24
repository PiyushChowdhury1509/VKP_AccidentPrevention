'use client'
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Verify({params}) {
  const router = useRouter();
  const token = params.token; // Extract token from query parameters
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("Token:", token);  // Log token for debugging

    if (token) {
      axios
        .get(`/api/verify?token=${token}`)
        .then((res) => {
          setMessage(res.data.message);
          toast.success(res.data.message);
        })
        .catch((err) => {
          setMessage(err.response?.data?.message || "Verification failed.");
          toast.error(err.response?.data?.message || "Verification failed.");
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setMessage("Invalid or missing token.");
      toast.error("Invalid or missing token.");
      setLoading(false);
    }
  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center">
      <div className="backdrop-blur-sm bg-white/40 p-8 rounded-lg shadow-lg max-w-4xl w-full flex flex-col justify-center items-center text-center text-gray-900">
        {loading ? (
          <p>Verifying...</p>
        ) : (
          <div>
            <h2 className="text-xl font-bold mb-4">{message}</h2>
            <p className="mb-4">You can now proceed to <a href="/volunteer/dashboard" className="text-blue-500 underline">login</a>.</p>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}
