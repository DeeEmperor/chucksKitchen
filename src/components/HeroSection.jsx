import React from 'react';
import { FaUtensils, FaTruck, FaStore } from 'react-icons/fa';
import SplitLayout from '../components/SplitLayout';

const HeroSection = () => {
    const heroRightContent = (
        <>
            <div>
               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                   Your Authentic Taste of Nigeria
               </h2>
               <p className="text-gray-600 text-lg">
                   Experience homemade flavors delivered fresh to your desk or home. We bring the rich culinary heritage of Nigeria right to your doorstep.
               </p>
            </div>

            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center text-brand-orange text-xl">
                        <FaUtensils />
                    </div>
                    <span className="font-medium text-gray-800">Freshly Prepared</span>
                </div>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center text-brand-orange text-xl">
                        <FaStore />
                    </div>
                    <span className="font-medium text-gray-800">Support Local Business</span>
                </div>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center text-brand-orange text-xl">
                        <FaTruck />
                    </div>
                    <span className="font-medium text-gray-800">Fast & Reliable Delivery</span>
                </div>
            </div>

            <div className="flex flex-col gap-4 mt-4">
                <button className="w-full py-4 bg-brand-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors shadow-md">
                    Start Your Order
                </button>
                <button className="w-full py-4 border border-brand-blue text-brand-blue font-semibold rounded-lg hover:bg-blue-50 transition-colors bg-white">
                    Learn More About Us
                </button>
            </div>
            
             <div className="mt-8 pt-8 border-t border-gray-100 text-xs text-brand-blue flex gap-4 justify-center md:justify-start">
                <span>© 2024 Chuks Kitchen.</span>
                <a href="#" className="hover:underline">Privacy Policy</a>
                <a href="#" className="hover:underline">Terms of Service</a>
            </div>
        </>
    );

    return <SplitLayout rightContent={heroRightContent} />;
};

export default HeroSection;
