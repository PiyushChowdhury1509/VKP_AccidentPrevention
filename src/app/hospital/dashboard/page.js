"use client"
import React, { useState } from 'react';

const AccidentDashboard = () => {
  const [accidents, setAccidents] = useState([
    { id: 1, type: 'Car Accident', location: 'saket', severity: 'Severe', responseTime: '9 min 12 sec', status: 'Unseen' },
    { id: 2, type: 'Pedestrian Accident', location: 'Paket', severity: 'Minor', responseTime: '5 min 45 sec', status: 'Unseen' },
    { id: 3, type: 'Motorcycle Accident', location: 'Raket', severity: 'Severe', responseTime: '11 min 23 sec', status: 'Unseen' },
  ]);

  const updateStatus = (id, status) => {
    setAccidents(accidents.map(accident => accident.id === id ? { ...accident, status } : accident));
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Accident Detection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-2">10</h2>
          <p className="text-gray-600">Total Accidents</p>
          <p className="text-green-500">+10.2% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-2">7 min 23 sec</h2>
          <p className="text-gray-600">Average Response Time</p>
          <p className="text-red-500">-2.5% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-2">4</h2>
          <p className="text-gray-600">Severe Injuries</p>
          <p className="text-green-500">+5.1% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-2">2%</h2>
          <p className="text-gray-600">Safety Compliance</p>
          <p className="text-green-500">+3.2% from last month</p>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
          <h2 className="text-xl font-bold mb-4">Recent Accident Reports</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">Incident</th>
                <th className="py-2">Location</th>
                <th className="py-2">Severity</th>
                <th className="py-2">Response Time</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {accidents.map(accident => (
                <tr key={accident.id}>
                  <td className="border px-4 py-2">{accident.type}</td>
                  <td className="border px-4 py-2">{accident.location}</td>
                  <td className="border px-4 py-2">{accident.severity}</td>
                  <td className="border px-4 py-2">{accident.responseTime}</td>
                  <td className="border px-4 py-2">
                    <div className="flex space-x-2">
                      <button onClick={() => updateStatus(accident.id, 'Seen')} className="bg-yellow-500 text-white px-3 py-1 rounded">Seen</button>
                      <button onClick={() => updateStatus(accident.id, 'Taking Action')} className="bg-green-500 text-white px-3 py-1 rounded">Taking Action</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Trending Accident Types</h2>
          <div className="h-48">
            {/* Placeholder for a bar chart */}
            <div className="flex justify-between items-end h-full">
              <div className="bg-blue-500 w-1/6 h-1/2"></div>
              <div className="bg-blue-500 w-1/6 h-3/4"></div>
              <div className="bg-blue-500 w-1/6 h-1/3"></div>
              <div className="bg-blue-500 w-1/6 h-2/3"></div>
              <div className="bg-blue-500 w-1/6 h-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccidentDashboard;
