import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const HomeNavbar = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="flex items-center justify-between px-8 py-6 w-full max-w-7xl mx-auto">
            {/* Logo */}
            <Link to="/home" className="text-5xl text-brand-orange font-script">
                Chuks Kitchen
            </Link>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-12 font-medium text-gray-800 h-full">
                <Link 
                    to="/home" 
                    className={`h-full py-6 transition-colors ${isActive('/home') ? 'text-brand-orange' : 'hover:text-brand-orange'}`}
                >
                    Home
                </Link>
                <Link 
                    to="/explore" 
                    className={`h-full py-6 transition-colors ${isActive('/explore') ? 'text-brand-orange border-b-2 border-brand-orange' : 'hover:text-brand-orange'}`}
                >
                    Explore
                </Link>
                <Link 
                    to="/my-orders" 
                    className={`h-full py-6 transition-colors ${isActive('/my-orders') ? 'text-brand-orange' : 'hover:text-brand-orange'}`}
                >
                    My Orders
                </Link>
                <Link 
                    to="/account" 
                    className={`h-full py-6 transition-colors ${isActive('/account') ? 'text-brand-orange' : 'hover:text-brand-orange'}`}
                >
                    Account
                </Link>
            </div>

            {/* Login Button Area */}
            <div className="flex items-center">
                 <Link to="/signin" className="px-8 py-2 bg-brand-orange text-white rounded-md hover:bg-orange-600 transition-colors font-medium">
                    Login
                </Link>
            </div>
        </nav>
    );
};

export default HomeNavbar;
