import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* Navbar */}
            <nav className="bg-white shadow-md">
                <div className="container mx-auto flex justify-between items-center p-6">
                    <a href="#" className="text-red-500 font-bold text-xl">TapShield</a>
                    <div className="space-x-6">
                        <div className="navbar">
                            <a className="active" href="#"><i className="fa fa-fw fa-home"></i> Home</a>
                            <a href="blogs.html" className="text-gray-700 hover:text-black">
                                <i className="fa fa-rss" aria-hidden="true"></i> Blogs
                            </a>
                            <a href="#"><i className="fa fa-fw fa-envelope"></i> Contact</a>
                            <a href="#"><i className="fa fa-fw fa-user"></i> Login</a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url('car_image_mota.jpg')` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
                    <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-4">Revolutionizing the way of saving lives</h1>
                    <p className="text-white text-2xl md:text-3xl mb-6">Anyone can report an accident anonymously!</p>
                    <button className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition duration-300">Learn More</button>
                </div>
            </div>

            {/* Story Section */}
            <div className="container mx-auto py-16 text-center">
                <h3 className="text-gray-700 text-2xl mb-4">Our Story</h3>
                <h2 className="text-black text-4xl font-bold mb-8">Building the Accident Reporting Website</h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                    We're dedicated to creating a platform that makes reporting accidents easier and more effective, helping to save lives and ensure timely assistance. Our mission is to empower people with the ability to report incidents swiftly and anonymously.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
