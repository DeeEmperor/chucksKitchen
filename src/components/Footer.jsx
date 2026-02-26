import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-brand-brown text-white py-16 px-8 relative">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                
                <div className="col-span-1 md:col-span-1 space-y-6">
                    <h3 className="text-2xl font-script text-brand-orange">Chuks Kitchen</h3>
                    <p className="text-gray-300 leading-relaxed">
                        Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.
                    </p>
                    <p className="text-xs text-gray-500 mt-8">
                        © 2024 Lift Media. All rights reserved.
                    </p>
                </div>

                <div className="col-span-1">
                    <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
                    <ul className="space-y-4 text-gray-300 text-sm">
                        <li><a href="#" className="hover:text-brand-orange transition-colors">Home</a></li>
                        <li><a href="#" className="hover:text-brand-orange transition-colors">Explore</a></li>
                        <li><a href="#" className="hover:text-brand-orange transition-colors">My Order</a></li>
                        <li><a href="#" className="hover:text-brand-orange transition-colors">Account</a></li>
                        <li><a href="#" className="hover:text-brand-orange transition-colors">Contact</a></li>
                    </ul>
                </div>

                <div className="col-span-1">
                    <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
                    <ul className="space-y-4 text-gray-300 text-sm">
                        <li>+234 801 234 5678</li>
                        <li>hello@chukskitchen.com</li>
                        <li>123 Taste Blvd, Lagos, Nigeria</li>
                    </ul>
                </div>

                 <div className="col-span-1">
                     <div className="flex flex-col gap-4">
                        <a href="#" className="text-gray-300 hover:text-white flex items-center gap-2 text-sm"><FaFacebook /> Facebook</a>
                        <a href="#" className="text-gray-300 hover:text-white flex items-center gap-2 text-sm"><FaTwitter /> Twitter</a>
                        <a href="#" className="text-gray-300 hover:text-white flex items-center gap-2 text-sm"><FaLinkedin /> LinkedIn</a>
                        <a href="#" className="text-gray-300 hover:text-white flex items-center gap-2 text-sm"><FaInstagram /> Instagram</a>
                     </div>
                </div>
            </div>

             <button 
                onClick={scrollToTop}
                className="absolute bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all"
                aria-label="Scroll to top"
            >
                <FaArrowUp />
            </button>
        </footer>
    );
};

export default Footer;
