import React from 'react';

const VolunteerDashboard = () => {
  const userInfo = {
    name: "volunteer",
    description: "volunteer is a dedicated first responder who has been helping people in emergencies for the past 10 years. He is known for his quick thinking and compassionate approach."
  };

  const accidentHistory = [
    { type: "Car Accident", location: "saket", date: "august 17, 2024", description: "Responded to a multi-vehicle collision, provided first aid and called emergency services." },
    { type: "Medical Emergency", location: "faridabad", date: "sept 15, 2024", description: "Assisted an elderly person who had fallen and was unresponsive, performed CPR until paramedics arrived." },
    { type: "Fire", location: "ballabhgarh", date: "december 8, 2024", description: "Helped evacuate a building during a fire, provided first aid to injured residents." },
    { type: "Natural Disaster", location: "bihar", date: "January 16, 2024", description: "Responded to a severe storm, helped clear debris and assisted with search and rescue efforts." }
  ];

  const liveNotifications = [
    { type: "Car Accident", location: "nepal", time: "5 mins ago" },
    { type: "Medical Emergency", location: "moscow", time: "15 mins ago" },
    { type: "Fire", location: "lords", time: "30 mins ago" },
    { type: "Natural Disaster", location: "haryana", time: "45 mins ago" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h1 className="text-4xl font-bold">{userInfo.name}</h1>
        <p className="mt-4 text-lg text-gray-600">{userInfo.description}</p>
      </div>
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Accident Response History</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {accidentHistory.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-2 text-sm font-bold text-gray-700">{item.type}</div>
              <div className="text-xl font-bold">{item.location}</div>
              <div className="text-gray-600">{item.date}</div>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-6">Live Accident Notifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {liveNotifications.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-2 text-sm font-bold text-gray-700">{item.type}</div>
              <div className="text-xl font-bold">{item.location}</div>
              <div className="text-gray-600">{item.time}</div>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Respond</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VolunteerDashboard;
