import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [saveCard, setSaveCard] = useState(false);

  return (
    <div className="w-full bg-gray-50 min-h-[calc(100vh-104px)] flex flex-col items-center py-12 px-4 sm:px-8">
      <div className="bg-white rounded-lg shadow-sm w-full max-w-2xl p-6 md:p-10 border border-gray-100">
        
        <h1 className="text-[28px] md:text-[32px] font-bold text-gray-900 mb-8 tracking-tight">
          Payment
        </h1>

        <div className="mb-6">
          <h3 className="text-[19px] font-bold text-gray-900 mb-4">Pay With:</h3>
          <div className="flex flex-row items-center justify-between border-b border-gray-200 pb-5">
            
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${paymentMethod === 'card' ? 'border-[#34a853]' : 'border-gray-300'}`}>
                {paymentMethod === 'card' && <div className="w-2.5 h-2.5 rounded-full bg-[#34a853]"></div>}
              </div>
              <span className={`text-[15px] font-bold ${paymentMethod === 'card' ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'}`}>
                Card
              </span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer group">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${paymentMethod === 'bank' ? 'border-[#34a853]' : 'border-gray-300'}`}>
                {paymentMethod === 'bank' && <div className="w-2.5 h-2.5 rounded-full bg-[#34a853]"></div>}
              </div>
              <span className={`text-[15px] font-bold ${paymentMethod === 'bank' ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'}`}>
                Bank
              </span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer group pr-4 md:pr-12">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${paymentMethod === 'transfer' ? 'border-[#34a853]' : 'border-gray-300'}`}>
                {paymentMethod === 'transfer' && <div className="w-2.5 h-2.5 rounded-full bg-[#34a853]"></div>}
              </div>
              <span className={`text-[15px] font-bold ${paymentMethod === 'transfer' ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'}`}>
                Transfer
              </span>
            </label>

          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-[15px] font-bold text-gray-900 mb-2">Card Number</h3>
          <input 
            type="text" 
            placeholder="1234 5678 9101 1121"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-900 placeholder-gray-400 text-[15px] outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-shadow"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-6 mb-4">
          <div className="flex-1">
            <h3 className="text-[15px] font-bold text-gray-900 mb-2">Expiration Date</h3>
            <input 
              type="text" 
              placeholder="MM/YY"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-900 placeholder-gray-400 text-[15px] outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-shadow"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-[15px] font-bold text-gray-900 mb-2">CVV</h3>
            <input 
              type="text" 
              placeholder="123"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-900 placeholder-gray-400 text-[15px] outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-shadow"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 mb-8">
          <div 
            className="w-5 h-5 border border-gray-300 rounded overflow-hidden flex items-center justify-center cursor-pointer flex-shrink-0"
            onClick={() => setSaveCard(!saveCard)}
          >
            {saveCard && <div className="w-full h-full bg-brand-orange"></div>}
          </div>
          <span className="text-[14px] text-[#A0A0A0] cursor-pointer" onClick={() => setSaveCard(!saveCard)}>
            Save card details
          </span>
        </div>

        <Link 
          to="/order-success"
          className="w-full py-3.5 bg-brand-orange text-white text-[16px] font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-sm mb-6 text-center block"
        >
          Pay ₦9,900
        </Link>

        <p className="text-[#B0B0B0] text-[13px] leading-relaxed">
          Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
        </p>

      </div>
    </div>
  );
};

export default Payment;
