"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function HospitalSignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [emergencyContactNumber, setEmergencyContactNumber] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleAutoDetectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude.toString());
          setLongitude(position.coords.longitude.toString());
        },
        (error) => {
          toast.error("Error detecting location.");
        }
      );
    } else {
      toast.error("Geolocation is not supported by this browser.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (
      !name ||
      !email ||
      !password ||
      !street ||
      !city ||
      !postalCode ||
      !country ||
      !contactNumber ||
      !emergencyContactNumber ||
      !latitude ||
      !longitude
    ) {
      toast.error("Please fill all fields.");
      return;
    }

    const address = {
      street,
      city,
      postalCode,
      country,
    };

    const geoLocation = {
      type: "Point",
      coordinates: [parseFloat(longitude), parseFloat(latitude)],
    };

    toast.info("Signing up...");

    try {
      const res = await axios.post("/api/signup/hospital", {
        name,
        email,
        password,
        role: "hospital",
        address,
        contactNumber,
        emergencyContactNumber,
        geoLocation,
      });

      if (res.status === 201) {
        const result = await signIn("credentials", {
          redirect: false,
          email,
          password,
          role: "hospital",
        });

        if (result.error) {
          setError(result.error);
          toast.error("Sign up failed.");
        } else {
          router.push("/hospital/dashboard");
          toast.success("Sign up successful!");
        }
      }
    } catch (err) {
      setError(err.message || "Something went wrong");
      toast.error("Sign up failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('/hospitalSignupBg.jpg')` }}>
      <div className="backdrop-blur-sm bg-white/60 p-8 rounded-lg shadow-lg max-w-3xl w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Hospital Sign Up</h2>
        {error && (
          <div className="mb-4 text-red-500">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-bold mb-2">Hospital Name</label>
            <input
              type="text"
              placeholder="Hospital Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-30 h-10  p-3 border border-gray-300 rounded bg-white text-gray-800"
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
              className="w-30 p-3 border border-gray-300 rounded bg-white text-gray-800"
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
              className="w-full p-3 border border-gray-300 rounded bg-white text-gray-800"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-800 text-sm font-bold mb-2">Street</label>
              <input
                type="text"
                placeholder="Street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded bg-white text-gray-800"
                required
              />
            </div>

            <div>
              <label className="block text-gray-800 text-sm font-bold mb-2">City</label>
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded bg-white text-gray-800"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-800 text-sm font-bold mb-2">Latitude</label>
              <input
                type="text"
                placeholder="Latitude"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded bg-white text-gray-800"
                required
              />
            </div>

            <div>
              <label className="block text-gray-800 text-sm font-bold mb-2">Longitude</label>
              <input
                type="text"
                placeholder="Longitude"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded bg-white text-gray-800"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-bold mb-2">Postal Code</label>
            <input
              type="text"
              placeholder="Postal Code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded bg-white text-gray-800"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-bold mb-2">Country</label>
            <input
              type="text"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded bg-white text-gray-800"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-bold mb-2">Contact Number</label>
            <input
              type="text"
              placeholder="Contact Number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded bg-white text-gray-800"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-bold mb-2">Emergency Contact Number</label>
            <input
              type="text"
              placeholder="Emergency Contact Number"
              value={emergencyContactNumber}
              onChange={(e) => setEmergencyContactNumber(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded bg-white text-gray-800"
              required
            />
          </div>

          <button
            type="button"
            className="mb-4 w-full bg-gray-500 text-white py-2 px-4 rounded font-bold"
            onClick={handleAutoDetectLocation}
          >
            Auto-Detect Location
          </button>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded font-bold"
          >
            Sign Up
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
