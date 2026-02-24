import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex flex-col md:flex-row items-center px-8 py-6 w-full max-w-7xl mx-auto gap-8 md:gap-12">
            {/* Spacer matching the Left Column of Hero */}
            <div className="hidden md:block w-full md:w-1/2"></div>
            
            {/* Right Column containing Logo & Sign In */}
            <div className="w-full md:w-1/2 flex items-center justify-between">
                <div className="text-5xl text-brand-orange font-script max-w-[70%]">
                    Chuks Kitchen
                </div>
                <Link to="/signin" className="px-6 py-2 border border-brand-blue text-brand-blue rounded-md hover:bg-brand-blue hover:text-white transition-colors duration-300 font-medium bg-transparent whitespace-nowrap">
                    Sign In
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
