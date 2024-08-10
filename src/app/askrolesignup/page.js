'use client'

import { useRouter } from 'next/navigation';
import { IconHeartHandshake, IconBuildingHospital } from '@tabler/icons-react';

export default function SignUpChoice() {
  const router = useRouter();

  const handleVolunteerSignup = () => {
    router.push('/volunteer/signup');
  };

  const handleHospitalSignup = () => {
    router.push('/hospital/signup');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex space-x-8">
        <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
          <div className="text-green-500 mb-4">
            <IconHeartHandshake size={48} />
          </div>
          <h3 className="text-2xl font-bold mb-2">Volunteer</h3>
          <p className="text-gray-600 text-center mb-6">
            Sign up to help those in need by becoming a volunteer.
          </p>
          <button
            onClick={handleVolunteerSignup}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
          >
            Sign Up as Volunteer
          </button>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
          <div className="text-green-500 mb-4">
            <IconBuildingHospital size={48} />
          </div>
          <h3 className="text-2xl font-bold mb-2">Hospital</h3>
          <p className="text-gray-600 text-center mb-6">
            Register your hospital to receive and assist with emergency cases.
          </p>
          <button
            onClick={handleHospitalSignup}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
          >
            Sign Up as Hospital
          </button>
        </div>
      </div>
    </div>
  );
}
