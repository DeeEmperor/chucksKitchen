import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineClose, MdAdd } from 'react-icons/md';
import { FiPlus, FiMinus } from 'react-icons/fi';

import jollofAndFriedChicken from '../assets/jollofriceandfiredchicken.png';
// Using this image for mock variety based on screenshot
import pepperSnailImage from '../assets/pepperedsnail.png'; 

const initialCartItems = [
  {
    id: 1,
    name: "Jollof Rice & Fried Chicken",
    description: "With plantain, extra pepper sauce",
    price: 3200,
    quantity: 1,
    image: jollofAndFriedChicken
  },
  {
    id: 2,
    name: "Jollof Rice & Fried Chicken",
    description: "With plantain, extra pepper sauce",
    price: 3200,
    quantity: 1,
    image: pepperSnailImage // Mocking different images for variety even though titles match in screenshot
  },
  {
    id: 3,
    name: "Jollof Rice & Fried Chicken",
    description: "With plantain, extra pepper sauce",
    price: 3200,
    quantity: 1,
    image: pepperSnailImage // Mocking different images
  },
  {
    id: 4,
    name: "Jollof Rice & Fried Chicken",
    description: "With plantain, extra pepper sauce",
    price: 3200,
    quantity: 1,
    image: jollofAndFriedChicken
  }
];

const MyOrders = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id, delta) => {
    setCartItems(prevItems => 
      prevItems.map(item => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <div className="w-full bg-gray-50 min-h-[calc(100vh-104px)] flex flex-col items-center py-12 px-4 sm:px-8">
      {/* Main White Container */}
      <div className="bg-white rounded-lg shadow-sm w-full max-w-5xl p-6 sm:p-10 border border-gray-100">
        
        <h1 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">
          Your Cart
        </h1>

        {/* Cart Items List */}
        <div className="flex flex-col gap-4 mb-8">
          {cartItems.length === 0 ? (
            <div className="py-12 text-center text-gray-500 text-lg border rounded-lg border-gray-200">
              Your cart is empty.
            </div>
          ) : (
            cartItems.map((item) => (
              <div 
                key={item.id} 
                className="flex flex-col sm:flex-row items-start sm:items-center p-4 border border-gray-200 rounded-lg bg-white relative gap-6"
              >
                {/* Item Image */}
                <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden border border-gray-100">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Item Details (Title & Subtitle) */}
                <div className="flex-grow flex flex-col justify-center max-w-sm">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-base sm:text-lg">
                    {item.description}
                  </p>
                </div>

                {/* Right Side Group (Controls + Price + Remove) */}
                <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-6 sm:gap-12 ml-auto mt-4 sm:mt-0">
                  
                  {/* Quantity Controls */}
                  <div className="flex items-center gap-4">
                     <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 flex items-center justify-center transition-colors"
                        aria-label="Increase quantity"
                     >
                        <FiPlus size={16} />
                     </button>
                     
                     <span className="text-2xl sm:text-3xl font-bold text-gray-900 w-6 text-center">
                        {item.quantity}
                     </span>
                     
                     <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Decrease quantity"
                        disabled={item.quantity <= 1}
                     >
                        <FiMinus size={16} />
                     </button>
                  </div>

                  {/* Price */}
                  <div className="w-24 text-right">
                     <span className="text-2xl sm:text-3xl font-bold text-brand-orange tracking-tight">
                        ₦{(item.price * item.quantity).toLocaleString()}
                     </span>
                  </div>

                  {/* Remove Button */}
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="w-8 h-8 rounded-md bg-brand-orange hover:bg-orange-600 text-white flex flex-shrink-0 items-center justify-center transition-colors shadow-sm ml-2"
                    aria-label="Remove item"
                  >
                    <MdOutlineClose size={18} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Add More Items Action */}
        <div className="flex justify-start">
          <Link 
            to="/explore" 
            className="flex items-center gap-2 text-brand-blue font-medium hover:text-blue-700 transition-colors group"
          >
            <MdAdd size={20} className="group-hover:scale-110 transition-transform" />
            Add more items from Chuks Kitchen
          </Link>
        </div>

      </div>
    </div>
  );
};

export default MyOrders;
