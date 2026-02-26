import React from 'react';
import { Link } from 'react-router-dom';

const OrderSuccess = () => {
  return (
    <div className="w-full bg-gray-50 min-h-[calc(100vh-104px)] flex flex-col items-center py-12 px-4 sm:px-8">
      <div className="bg-white rounded-lg shadow-sm w-full max-w-2xl px-6 py-12 md:p-16 border border-gray-100 flex flex-col items-center text-center">
        
        <div className="w-20 h-20 bg-[#108A44] rounded-full flex items-center justify-center mb-6">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <h2 className="text-[20px] font-bold text-gray-900 mb-2">Order Placed Successfully!</h2>
        
        <p className="text-[15px] font-medium text-gray-600 mb-8">
          Your delicious Chuks Kitchen meal is on its way!
        </p>

        <div className="w-full max-w-xs aspect-square bg-[#FAFAFA] rounded-xl flex items-center justify-center mb-8 relative">
           <div className="w-5 h-5 bg-[#Ddf2df] rounded-full absolute"></div>
        </div>

        <h3 className="text-[22px] font-bold text-gray-900 mb-6">
          Order #123RGR231567Y Confirmed
        </h3>

        <button className="w-full max-w-sm py-4 bg-brand-orange text-white text-[16px] font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-sm mb-4">
          Track Order
        </button>

        <button className="w-full max-w-sm py-4 bg-transparent text-[#B0B0B0] text-[16px] font-bold rounded-lg hover:bg-gray-50 transition-colors mb-6">
          Generate Receipt
        </button>

        <a href="#" className="text-[#2196F3] text-[15px] font-medium hover:underline">
          Need help with your order?
        </a>

      </div>
    </div>
  );
};

export default OrderSuccess;
