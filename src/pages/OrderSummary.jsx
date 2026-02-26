import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OrderSummary = () => {
  const [deliveryMethod, setDeliveryMethod] = useState('delivery'); // 'delivery' or 'pickup'
  const [promoCode, setPromoCode] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');

  const subtotal = 9200;
  const deliveryFee = 500;
  const serviceFee = 200;
  const tax = 0;
  
  // conditionally calculate total based on delivery method
  const total = deliveryMethod === 'delivery' 
    ? subtotal + deliveryFee + serviceFee + tax
    : subtotal + serviceFee + tax;

  return (
    <div className="w-full bg-gray-50 min-h-[calc(100vh-104px)] flex flex-col items-center py-12 px-4 sm:px-8">
      
      {/* Main Container */}
      <div className="bg-white rounded-lg shadow-sm w-full max-w-2xl p-6 md:p-10 border border-gray-100">
        
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-6 tracking-tight">
          Order Summary
        </h1>

        {/* Promo Code Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Add a Promo Code</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="text" 
              placeholder="Enter Code here" 
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="flex-grow border border-gray-300 rounded-md px-4 py-3 text-gray-700 outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-shadow"
            />
           
            <button className="px-10 py-3 bg-brand-orange text-white font-semibold rounded-md hover:bg-orange-600 transition-colors shadow-sm whitespace-nowrap">
              Login
            </button>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="flex flex-col mb-6">
          <div className="flex justify-between items-center text-sm mb-3">
             <span className="text-gray-500 font-medium">Subtotal</span>
             <span className="text-gray-900 font-bold">₦{subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center text-sm mb-3">
             <span className="text-gray-500 font-medium">Delivery Fee</span>
             <span className="text-gray-900 font-bold">₦{deliveryFee.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center text-sm mb-3">
             <span className="text-gray-500 font-medium">Service Fee</span>
             <span className="text-gray-900 font-bold">₦{serviceFee.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center text-sm mb-6">
             <span className="text-gray-500 font-medium">Tax</span>
             <span className="text-gray-900 font-bold">₦{tax}</span>
          </div>
          
          {/* Divider line inside breakdown */}
          <div className="w-full h-px bg-gray-200 mb-6"></div>

          {/* Total */}
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-bold text-gray-900">Total</span>
            <span className="text-2xl font-bold text-gray-900">₦{total.toLocaleString()}</span>
          </div>

          {/* Delivery / Pickup Toggle */}
          <div className="flex rounded-md overflow-hidden mb-8 h-12 shadow-sm border border-gray-200">
            <button
              onClick={() => setDeliveryMethod('delivery')}
              className={`flex-1 text-sm font-semibold transition-colors ${
                deliveryMethod === 'delivery' 
                  ? 'bg-brand-orange text-white' 
                  : 'bg-[#B0B0B0] text-white hover:bg-gray-400'
              }`}
            >
              Delivery
            </button>
            <button
              onClick={() => setDeliveryMethod('pickup')}
              className={`flex-1 text-sm font-semibold transition-colors ${
                deliveryMethod === 'pickup' 
                  ? 'bg-[#B0B0B0] text-white hover:bg-brand-orange' 
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              Pick up
            </button>
          </div>
        </div>

        {/* Special Instructions */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Special Instructions for Restaurant</h3>
          <textarea
            value={specialInstructions}
            onChange={(e) => setSpecialInstructions(e.target.value)}
            placeholder="E.g no onion, food is too spicy, food is too hot hhhhhhhhhhh food is tasty"
            className="w-full border border-gray-300 rounded-md p-4 text-sm font-medium text-gray-900 placeholder-gray-500 outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange min-h-[120px] resize-y"
          ></textarea>
        </div>

        {/* Checkout CTA */}
        <Link 
          to="/delivery-details"
          className="w-full py-4 bg-brand-orange text-white text-lg font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-sm text-center block"
        >
          Proceed to Checkout
        </Link>

      </div>

    </div>
  );
};

export default OrderSummary;
