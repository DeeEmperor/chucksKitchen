import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Hero Background Image from the provided assets
import heroImage from '../assets/jollofDelights.png';

// Menu Assets Imports
import jollofAndFriedChicken from '../assets/jollofriceandfiredchicken.png';
import ebaAndEgusi from '../assets/ebaandegusisoup.png';
import poundedYamAndEdikaikong from '../assets/poundedyamandedikaikong.png';
import pepperedSnail from '../assets/pepperedsnail.png';
import grilledTilapia from '../assets/grilledtilapisfish.png';
import jollofAndSmokedFish from '../assets/jollofriceandsmokedfish.png';
import partyJollof from '../assets/partyJollof.png';
import amalaWithGbegiriAndEwedu from '../assets/amalawithgbegiriandewedu.png';
import fufuAndOkra from '../assets/fufuandokrasoup.png';

const menuData = [
  {
    category: "Popular",
    items: [
      { id: 1, name: "Jollof Rice & Fried Chicken", description: "Our signature Jollof rice, served with crispy fried chicken and plantain.", price: "₦3,500", image: jollofAndFriedChicken },
      { id: 2, name: "Eba & Egusi Soup (Goat Meat)", description: "Hearty Egusi soup with tender goat meat, served with soft Eba.", price: "₦3,500", image: ebaAndEgusi },
      { id: 3, name: "Pounded Yam & Edikaikong", description: "Traditional pounded yam with rich, leafy Edikaikong soup.", price: "₦3,800", image: poundedYamAndEdikaikong },
      { id: 4, name: "Peppered Snail", description: "Spicy and savory peppered snail, perfect as a starter.", price: "₦2,500", image: pepperedSnail },
      { id: 5, name: "Grilled Tilapia Fish", description: "Whole grilled tilapia seasoned with our special spices.", price: "₦4,500", image: grilledTilapia },
      { id: 6, name: "Jollof Rice & Fried Chicken", description: "Our signature Jollof rice, served with crispy fried chicken and plantain.", price: "₦3,500", image: jollofAndFriedChicken }
    ]
  },
  {
    category: "Jollof Rice & Entrees",
    items: [
      { id: 7, name: "Jollof Rice & Smoked Fish", description: "Flavorful jollof rice served with perfectly smoked fish.", price: "₦3,800", image: jollofAndSmokedFish },
      { id: 8, name: "Party Jollof Rice (Veg)", description: "Vegetarian party jollof, full of rich flavors.", price: "₦2,800", image: partyJollof },
      { id: 9, name: "Party Jollof Rice (Veg)", description: "Vegetarian party jollof, full of rich flavors.", price: "₦3,500", image: partyJollof }
    ]
  },
  {
    category: "Swallow & Soups",
    items: [
       { id: 10, name: "Amala with Gbegiri & Ewedu", description: "Classic Amala served with Gbegiri (beans) and Ewedu (jute leaf) soup.", price: "₦3,300", image: amalaWithGbegiriAndEwedu },
       { id: 11, name: "Fufu & Okra Soup (Fish)", description: "Light Fufu served with fresh okra soup and tilapia fish.", price: "₦3,300", image: fufuAndOkra },
       { id: 12, name: "Fufu & Okra Soup (Fish)", description: "Light Fufu served with fresh okra soup and tilapia fish.", price: "₦3,500", image: fufuAndOkra }
    ]
  },
  {
    category: "Grills & sides",
    items: [] // Empty for now, will handle rendering gracefully
  },
  {
    category: "Beverages",
    items: []
  },
  {
    category: "Desserts",
    items: []
  }
];

const Explore = () => {
  const [activeCategory, setActiveCategory] = useState("Popular");

  // Filter sections to render depending on active category or scrolling
  // For the screenshot's design, it seems all categories might be visible
  // and clicking sidebar scrolls to them, but we'll render all of them
  // and allow active state highlight first.

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50 pb-20">
      
      {/* Hero Banner Area */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        {/* Background Image */}
         <img 
            src={heroImage} 
            alt="Delicious Nigerian Spread" 
            className="w-full h-full object-cover" 
         />
         {/* Dark Gradient Overlay for text readability */}
         <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10"></div>
         
         {/* Title area */}
         <div className="absolute bottom-10 left-8 md:left-16 text-white max-w-2xl px-4 md:px-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Chuks Kitchen</h1>
            <p className="text-lg md:text-xl font-medium">Chuks Kitchen Nigerian Home Cooking 4.8 (1.2k)</p>
         </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto px-4 md:px-8 mt-12 gap-8">
        
        {/* Left Sidebar */}
        <div className="w-full md:w-1/4 flex-shrink-0">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden sticky top-24 pb-4">
            <h3 className="text-xl font-bold text-gray-900 px-6 pt-6 pb-4">Menu Categories</h3>
            <div className="flex flex-col">
              {menuData.map((section) => (
                <button
                  key={section.category}
                  onClick={() => setActiveCategory(section.category)}
                  className={`w-full text-left px-6 py-4 font-medium transition-colors ${
                    activeCategory === section.category
                      ? 'bg-orange-100 text-gray-900 border-l-4 border-brand-orange'
                      : 'text-gray-600 hover:bg-gray-50 border-l-4 border-transparent'
                  }`}
                >
                  {section.category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content - Food Grids */}
        <div className="w-full md:w-3/4 flex flex-col gap-12">
          {menuData.filter(section => section.items.length > 0).map((section) => (
            <div key={section.category} id={section.category.replace(/\s+/g, '-').toLowerCase()}>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">{section.category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {section.items.map((item, idx) => (
                  <Link 
                    to={`/food/${item.id}`}
                    key={`${item.id}-${idx}`} 
                    className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full cursor-pointer group"
                  >
                    
                    {/* Image Box */}
                    <div className="w-full h-48 sm:h-56 relative overflow-hidden bg-gray-100">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Content Box */}
                    <div className="p-4 flex flex-col flex-grow">
                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-orange transition-colors">{item.name}</h4>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {item.description}
                      </p>
                      
                      {/* Price and Add Button at the bottom */}
                      <div className="flex items-center justify-between mt-auto pt-2">
                        <span className="text-brand-orange font-bold text-lg">{item.price}</span>
                        <button 
                          onClick={(e) => {
                            e.preventDefault(); // Prevents navigation when clicking just the add button
                          }}
                          className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center hover:bg-orange-600 transition-colors shadow-sm"
                        >
                           <span className="text-xl font-medium mt-[-2px]">+</span>
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
