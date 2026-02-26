import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DeliveryDetails = () => {
  const [deliveryTime, setDeliveryTime] = useState('ASAP(30-25)');
  const [instructions, setInstructions] = useState('');
  const [contactAddress, setContactAddress] = useState('+234 801 234 5678');

  return (
    <div className="w-full bg-gray-50 min-h-[calc(100vh-104px)] flex flex-col items-center py-12 px-4 sm:px-8">
      <div className="bg-white rounded-lg shadow-sm w-full max-w-2xl p-6 md:p-10 border border-gray-100">
        
        <h1 className="text-[28px] md:text-[32px] font-bold text-gray-900 mb-8 tracking-tight">
          Delivery Details
        </h1>

        <div className="w-full border border-gray-300 rounded-lg p-5 flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
          <div className="flex flex-col">
            <span className="text-gray-900 text-sm font-medium"><span className="font-bold">Home:</span> 123 Main Street, Victoria Island, Lagos</span>
            <span className="text-gray-900 text-sm mt-1">Apt 4B, Opposite Mega Plaza</span>
          </div>
          <button className="text-brand-blue font-semibold text-sm hover:text-blue-700 transition-colors whitespace-nowrap text-left sm:text-right mt-1 sm:mt-0">
            Change Address
          </button>
        </div>

        <div className="mb-6">
          <h3 className="text-[19px] font-bold text-gray-900 mb-3">Delivery Time</h3>
          <input 
            type="text" 
            value={deliveryTime}
            onChange={(e) => setDeliveryTime(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-900 text-[15px] outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-shadow"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-[19px] font-bold text-gray-900 mb-3">Delivery Instructions (Optional)</h3>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="E.g leave at the front of the door, knock twice...................."
            className="w-full border border-gray-300 rounded-md p-4 text-[15px] text-gray-900 placeholder-gray-600 outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange min-h-[100px] resize-y"
          ></textarea>
        </div>

        <div className="mb-4">
          <h3 className="text-[19px] font-bold text-gray-900 mb-3">Contact Address</h3>
          <input 
            type="text" 
            value={contactAddress}
            onChange={(e) => setContactAddress(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-900 text-[15px] outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-shadow"
          />
        </div>

        <Link 
          to="/payment"
          className="w-full py-4 bg-brand-orange text-white text-lg font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-sm text-center block mt-8 cursor-pointer"
        >
          Proceed to Payment
        </Link>

      </div>
    </div>
  );
};

export default DeliveryDetails;
