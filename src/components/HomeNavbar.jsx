import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';

const HomeNavbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="flex items-center justify-between px-8 py-6 w-full max-w-7xl mx-auto relative relative z-50">
            <Link to="/home" className="text-5xl text-brand-orange font-script">
                Chuks Kitchen
            </Link>
            
            <div className="hidden md:flex items-center gap-12 font-medium text-gray-800 h-full">
                <Link 
                    to="/home" 
                    className={`h-full py-6 transition-colors ${isActive('/home') ? 'text-brand-orange border-b-2 border-brand-orange' : 'hover:text-brand-orange'}`}
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
                    className={`h-full py-6 transition-colors ${isActive('/my-orders') ? 'text-brand-orange border-b-2 border-brand-orange' : 'hover:text-brand-orange'}`}
                >
                    My Orders
                </Link>
                <Link 
                    to="/account" 
                    className={`h-full py-6 transition-colors ${isActive('/account') ? 'text-brand-orange border-b-2 border-brand-orange' : 'hover:text-brand-orange'}`}
                >
                    Account
                </Link>
            </div>

            <div className="hidden md:flex items-center">
                 <Link to="/signin" className="px-8 py-2 bg-brand-orange text-white rounded-md hover:bg-orange-600 transition-colors font-medium">
                    Login
                </Link>
            </div>
            
            <button 
                className="flex md:hidden items-center justify-center text-gray-800 hover:text-brand-orange transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <MdMenu size={28} />
            </button>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col md:hidden z-50 animate-in slide-in-from-top-2">
                    <Link 
                        to="/home" 
                        onClick={() => setIsMenuOpen(false)}
                        className={`px-8 py-4 border-b border-gray-50 transition-colors ${isActive('/home') ? 'text-brand-orange font-bold bg-orange-50/50' : 'text-gray-800 hover:bg-gray-50'}`}
                    >
                        Home
                    </Link>
                    <Link 
                        to="/explore" 
                        onClick={() => setIsMenuOpen(false)}
                        className={`px-8 py-4 border-b border-gray-50 transition-colors ${isActive('/explore') ? 'text-brand-orange font-bold bg-orange-50/50' : 'text-gray-800 hover:bg-gray-50'}`}
                    >
                        Explore
                    </Link>
                    <Link 
                        to="/my-orders" 
                        onClick={() => setIsMenuOpen(false)}
                        className={`px-8 py-4 border-b border-gray-50 transition-colors ${isActive('/my-orders') ? 'text-brand-orange font-bold bg-orange-50/50' : 'text-gray-800 hover:bg-gray-50'}`}
                    >
                        My Orders
                    </Link>
                    <Link 
                        to="/account" 
                        onClick={() => setIsMenuOpen(false)}
                        className={`px-8 py-4 border-b border-gray-50 transition-colors ${isActive('/account') ? 'text-brand-orange font-bold bg-orange-50/50' : 'text-gray-800 hover:bg-gray-50'}`}
                    >
                        Account
                    </Link>
                    <div className="px-8 py-6">
                        <Link 
                            to="/signin" 
                            onClick={() => setIsMenuOpen(false)}
                            className="block w-full text-center py-3 bg-brand-orange text-white rounded-md hover:bg-orange-600 transition-colors font-medium"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default HomeNavbar;
