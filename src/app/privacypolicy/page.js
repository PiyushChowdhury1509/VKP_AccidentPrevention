import React from 'react';

const PrivacyPolicy = () => {
    
    return (
        <div className="bg-white text-gray-800">
            {/* Navbar */}
            <nav className="bg-white shadow-md">
                <div className="container mx-auto flex justify-between items-center p-6">
                    <a href="#" className="text-red-500 font-bold text-xl">TapShield</a>
                    <div className="space-x-6">
                        <a className="active" href="#"><i className="fa fa-fw fa-home"></i> Home</a>
                        <a href="blogs.html" className="text-white hover:text-black">
                            <i className="fa fa-rss" aria-hidden="true"></i> Blogs
                        </a>
                        <a href="about_us_vkp.html"><i className="fa fa-fw fa-envelope"></i> About Us</a>
                        <a href="#"><i className="fa fa-fw fa-user"></i> Login</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative bg-cover bg-center h-screen" >
                <div className="absolute inset-0 bg-black  flex flex-col justify-center items-center text-center">
                    <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-tight mb-4" style={{ fontFamily: 'Georgia, Heuristica, serif' }}>
                        Privacy Policy
                    </h1>
                    <h2 className="text-white text-2xl md:text-3xl font-medium mb-6" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                        Your Privacy Matters
                    </h2>
                    <button  className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition duration-300">
                        Learn More
                    </button>
                </div>
            </div>
            
            {/* Content Section */}
            <div className="bg-policy py-12" style={{ backgroundColor: '#f7f7f7' }}>
                <div className="container mx-auto px-4">
                    <div className="bg-black p-8 shadow-lg rounded-lg">
                        <h2 className="text-2xl text-white font-bold mb-4">Introduction</h2>
                        <p className="text-white leading-relaxed mb-6">
                            Welcome to TapShield's privacy policy. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully.
                        </p>

                        <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We may collect information about you in a variety of ways. The information we may collect on the website includes:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6">
                            <li>Personal Data</li>
                            <li>Derivative Data</li>
                            <li>Financial Data</li>
                            <li>Mobile Device Data</li>
                        </ul>

                        <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We may use the information we collect from you in the following ways:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6">
                            <li>To personalize your experience on our site</li>
                            <li>To improve our website</li>
                            <li>To process your transactions</li>
                            <li>To send periodic emails regarding your order or other products and services</li>
                        </ul>

                        <h2 className="text-2xl font-bold mb-4">Disclosure of Your Information</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6">
                            <li>By Law or to Protect Rights</li>
                            <li>Third-Party Service Providers</li>
                            <li>Marketing Communications</li>
                        </ul>

                        <h2 className="text-2xl font-bold mb-4">Security of Your Information</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
                        </p>

                        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                        <p className="text-gray-700 leading-relaxed">
                            If you have questions or comments about this Privacy Policy, please contact us at:
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            <strong>Email:</strong> vindevelop90@gmail.com<br />
                            <strong>Phone:</strong> +1 234 567 8901
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="bg-gray-900 text-white py-8">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 TapShield All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default PrivacyPolicy;
