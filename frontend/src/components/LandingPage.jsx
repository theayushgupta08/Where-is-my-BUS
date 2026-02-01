import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { styles } from '../styles';
import { coverbus, coverdriver, coverroute, coverstops, logo } from '../assets';

const LandingPage = () => {
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    const handleGetStarted = () => {
        if (isAuthenticated) {
            navigate('/dashboard');
        } else {
            navigate('/login');
        }
    };

    const features = [
        {
            id: 'bus',
            title: 'Bus Management',
            description: 'Efficiently manage your bus fleet with real-time tracking and comprehensive bus information.',
            image: coverbus,
            icon: '🚌'
        },
        {
            id: 'driver',
            title: 'Driver Management',
            description: 'Keep track of all drivers, their schedules, and assignments with ease.',
            image: coverdriver,
            icon: '👨‍✈️'
        },
        {
            id: 'route',
            title: 'Route Management',
            description: 'Plan and manage bus routes efficiently with detailed route information.',
            image: coverroute,
            icon: '🗺️'
        },
        {
            id: 'stops',
            title: 'Stop Management',
            description: 'Manage bus stops and their locations for better route planning.',
            image: coverstops,
            icon: '📍'
        }
    ];

    return (
        <div className="relative w-full overflow-hidden">
            {/* Hero Section */}
            <section className="relative w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#050816] via-[#1a1a2e] to-[#16213e] pt-20">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                    <div className="absolute top-40 right-10 w-72 h-72 bg-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                    {/* Logo */}
                    <div className="mb-8 flex items-center gap-3">
                        <img src={logo} alt="logo" className="w-16 h-16 rounded-full" />
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                            Where is my <span className="text-orange-500">BUS?</span>
                        </h1>
                    </div>

                    {/* Main Headline */}
                    <h2 className={`${styles.heroHeadText} text-white mb-6`}>
                        Track Your Bus in
                        <br className="sm:block hidden" />
                        <span className="text-orange-500"> Real-Time</span>
                    </h2>

                    {/* Subheadline */}
                    <p className={`${styles.heroSubText} text-gray-300 max-w-3xl mb-8`}>
                        A comprehensive bus management system that helps you manage buses, drivers, routes, and stops
                        all in one place. Never miss your bus again!
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <button
                            onClick={handleGetStarted}
                            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
                        >
                            {isAuthenticated ? 'Go to Dashboard' : 'Get Started'}
                        </button>
                        <Link
                            to="/about-us"
                            className="px-8 py-4 bg-transparent border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 text-lg"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-orange-500 rounded-full mt-2"></div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="relative w-full py-20 bg-gradient-to-b from-[#16213e] to-[#0f172a]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className={`${styles.sectionHeadText} text-white mb-4`}>
                            Powerful Features
                        </h2>
                        <p className={`${styles.sectionSubText} text-gray-400`}>
                            Everything you need to manage your bus system
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={feature.id}
                                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 hover:border-orange-500/50"
                                style={{
                                    animationDelay: `${index * 100}ms`
                                }}
                            >
                                {/* Feature Image */}
                                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute top-4 right-4 text-4xl">{feature.icon}</div>
                                </div>

                                {/* Feature Content */}
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative w-full py-20 bg-gradient-to-r from-orange-600 to-orange-500">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                        Join us today and experience the future of bus management. Track your buses, manage routes,
                        and keep everything organized in one place.
                    </p>
                    <button
                        onClick={handleGetStarted}
                        className="px-10 py-5 bg-white text-orange-600 font-bold rounded-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 text-lg"
                    >
                        {isAuthenticated ? 'Go to Dashboard' : 'Start Now - It\'s Free'}
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative w-full py-8 bg-[#0f172a] border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center gap-2 mb-4 md:mb-0">
                            <img src={logo} alt="logo" className="w-8 h-8 rounded-full" />
                            <p className="text-gray-400">Where is my BUS? © 2024</p>
                        </div>
                        <div className="flex gap-6">
                            <Link
                                to="/controls"
                                className="text-gray-400 hover:text-orange-500 transition-colors"
                            >
                                Controls
                            </Link>
                            <Link
                                to="/help"
                                className="text-gray-400 hover:text-orange-500 transition-colors"
                            >
                                Help
                            </Link>
                            <Link
                                to="/about-us"
                                className="text-gray-400 hover:text-orange-500 transition-colors"
                            >
                                About Us
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
