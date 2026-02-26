import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineClose, MdOutlineLocalFireDepartment, MdOutlineEnergySavingsLeaf, MdOutlineInfo } from 'react-icons/md';

// We will use the jollof rice and fried chicken image from assets
import jollofAndFriedChicken from '../assets/jollofriceandfiredchicken.png';

const FoodDetails = () => {
  const navigate = useNavigate();
  
  // State for form selections
  const [selectedProtein, setSelectedProtein] = useState('fried_chicken');
  const [selectedSides, setSelectedSides] = useState({
    plantain: false,
    coleslaw: false,
    pepper: false,
  });
  const [specialInstructions, setSpecialInstructions] = useState('');

  const toggleSide = (sideId) => {
    setSelectedSides(prev => ({
      ...prev,
      [sideId]: !prev[sideId]
    }));
  };

  return (
    <div className="flex flex-col md:flex-row w-full bg-gray-50 font-sans" style={{ minHeight: 'calc(100vh - 104px)' }}>
      {/* 104px is roughly the height of the HomeNavbar (py-6 means 24px top/bottom + content) */}
      
      {/* Left Column: Image Area */}
      <div className="w-full md:w-[45%] lg:w-[40%] h-[400px] md:h-auto relative bg-gray-200 flex-shrink-0">
        <img 
          src={jollofAndFriedChicken} 
          alt="Jollof Rice with Fried Chicken" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Column: Content and Scrolling Form */}
      <div className="w-full md:w-[55%] lg:w-[60%] flex flex-col items-center bg-gray-50 py-8 px-4 sm:px-8 lg:px-12 h-full overflow-y-auto">
        
        {/* Main Content Container (mimicking a modal on a soft background) */}
        <div className="bg-white rounded-2xl w-full max-w-2xl shadow-sm border border-gray-100 p-6 sm:p-10 relative">
          
          {/* Close Button */}
          <button 
            onClick={() => navigate(-1)}
            className="absolute top-6 right-6 w-8 h-8 bg-black hover:bg-gray-800 text-white rounded-md flex items-center justify-center transition-colors shadow-sm"
            aria-label="Close details"
          >
            <MdOutlineClose size={20} />
          </button>

          {/* Header Info */}
          <div className="mb-8 pr-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Jollof Rice with Fried Chicken
            </h1>
            <p className="text-2xl font-bold text-brand-orange mb-4">
              ₦2,800
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our signature Jollof rice, cooked to perfection with aromatic spices, served with juicy, golden-fried chicken. A classic Nigerian comfort food, rich in flavor and satisfying. Perfect for a quick lunch or a hearty dinner.
            </p>

            {/* Tags area */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 font-medium">
              <div className="flex items-center gap-2">
                <MdOutlineLocalFireDepartment className="text-brand-orange text-lg" />
                <span>Mildly spicy</span>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineEnergySavingsLeaf className="text-brand-orange text-lg" />
                <span>Vegetarian option available</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer hover:text-brand-orange transition-colors">
                <MdOutlineInfo className="text-brand-orange text-lg" />
                <span className="text-brand-blue underline decoration-brand-blue/30 hover:decoration-brand-blue">View Allergies</span>
              </div>
            </div>
          </div>

          <hr className="border-gray-100 my-8" />

          {/* Section: Proteins */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Choose Your Protein</h3>
            <div className="flex flex-col gap-3">
              
              {/* Radio 1 */}
              <label className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-colors ${selectedProtein === 'fried_chicken' ? 'border-brand-orange bg-orange-50/30' : 'border-gray-200 hover:border-orange-200'}`}>
                <div className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedProtein === 'fried_chicken' ? 'border-brand-orange' : 'border-gray-300'}`}>
                    {selectedProtein === 'fried_chicken' && <div className="w-3 h-3 rounded-full bg-brand-orange"></div>}
                  </div>
                  <input 
                    type="radio" 
                    name="protein" 
                    value="fried_chicken" 
                    checked={selectedProtein === 'fried_chicken'}
                    onChange={(e) => setSelectedProtein(e.target.value)}
                    className="hidden"
                  />
                  <span className="font-medium text-gray-800">Fried Chicken</span>
                </div>
                <span className="text-gray-600 font-medium">(Default)</span>
              </label>

              {/* Radio 2 */}
              <label className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-colors ${selectedProtein === 'grilled_fish' ? 'border-brand-orange bg-orange-50/30' : 'border-gray-200 hover:border-orange-200'}`}>
                <div className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedProtein === 'grilled_fish' ? 'border-brand-orange' : 'border-gray-300'}`}>
                    {selectedProtein === 'grilled_fish' && <div className="w-3 h-3 rounded-full bg-brand-orange"></div>}
                  </div>
                  <input 
                    type="radio" 
                    name="protein" 
                    value="grilled_fish" 
                    checked={selectedProtein === 'grilled_fish'}
                    onChange={(e) => setSelectedProtein(e.target.value)}
                    className="hidden"
                  />
                  <span className="font-medium text-gray-800">Grilled Fish</span>
                </div>
                <span className="text-gray-800 font-medium">+₦500</span>
              </label>

              {/* Radio 3 */}
              <label className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-colors ${selectedProtein === 'beef' ? 'border-brand-orange bg-orange-50/30' : 'border-gray-200 hover:border-orange-200'}`}>
                <div className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedProtein === 'beef' ? 'border-brand-orange' : 'border-gray-300'}`}>
                    {selectedProtein === 'beef' && <div className="w-3 h-3 rounded-full bg-brand-orange"></div>}
                  </div>
                  <input 
                    type="radio" 
                    name="protein" 
                    value="beef" 
                    checked={selectedProtein === 'beef'}
                    onChange={(e) => setSelectedProtein(e.target.value)}
                    className="hidden"
                  />
                  <span className="font-medium text-gray-800">Beef</span>
                </div>
                <span className="text-gray-800 font-medium">+₦700</span>
              </label>

            </div>
          </div>

          <hr className="border-gray-100 my-8" />

          {/* Section: Extra Sides */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Extra Sides (Optional)</h3>
            <div className="flex flex-col gap-3">
              
              {/* Checkbox 1 */}
              <label className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-colors ${selectedSides.plantain ? 'border-brand-orange bg-orange-50/30' : 'border-gray-200 hover:border-orange-200'}`}>
                <div className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center ${selectedSides.plantain ? 'border-brand-orange bg-brand-orange' : 'border-gray-300'}`}>
                    {selectedSides.plantain && (
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 9.1L0 5.1L1.4 3.7L4 6.3L10.6 0.1L12 1.5L4 9.1Z" fill="white"/>
                      </svg>
                    )}
                  </div>
                  <input 
                    type="checkbox" 
                    checked={selectedSides.plantain}
                    onChange={() => toggleSide('plantain')}
                    className="hidden"
                  />
                  <span className="font-medium text-gray-800">Fried Plantain</span>
                </div>
                <span className="text-gray-800 font-medium">+₦700</span>
              </label>

              {/* Checkbox 2 */}
              <label className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-colors ${selectedSides.coleslaw ? 'border-brand-orange bg-orange-50/30' : 'border-gray-200 hover:border-orange-200'}`}>
                <div className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center ${selectedSides.coleslaw ? 'border-brand-orange bg-brand-orange' : 'border-gray-300'}`}>
                    {selectedSides.coleslaw && (
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 9.1L0 5.1L1.4 3.7L4 6.3L10.6 0.1L12 1.5L4 9.1Z" fill="white"/>
                      </svg>
                    )}
                  </div>
                  <input 
                    type="checkbox" 
                    checked={selectedSides.coleslaw}
                    onChange={() => toggleSide('coleslaw')}
                    className="hidden"
                  />
                  <span className="font-medium text-gray-800">Coleslaw</span>
                </div>
                <span className="text-gray-800 font-medium">+₦500</span>
              </label>

              {/* Checkbox 3 */}
              <label className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-colors ${selectedSides.pepper ? 'border-brand-orange bg-orange-50/30' : 'border-gray-200 hover:border-orange-200'}`}>
                <div className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center ${selectedSides.pepper ? 'border-brand-orange bg-brand-orange' : 'border-gray-300'}`}>
                    {selectedSides.pepper && (
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 9.1L0 5.1L1.4 3.7L4 6.3L10.6 0.1L12 1.5L4 9.1Z" fill="white"/>
                      </svg>
                    )}
                  </div>
                  <input 
                    type="checkbox" 
                    checked={selectedSides.pepper}
                    onChange={() => toggleSide('pepper')}
                    className="hidden"
                  />
                  <span className="font-medium text-gray-800">Extra Pepper Sauce</span>
                </div>
                <span className="text-gray-800 font-medium">+₦300</span>
              </label>

            </div>
          </div>

          <hr className="border-gray-100 my-8" />

          {/* Section: Special Instructions */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Special Instructions</h3>
            <textarea 
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              placeholder="E.g no onion, food is too spicy, food is too hot hhhhhhhhhhh food is tasty"
              className="w-full min-h-[120px] p-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-brand-orange resize-y text-gray-800 placeholder-gray-400"
            />
          </div>

          {/* We do not add the bottom floating buttons as they don't appear in the current screenshot. 
              The layout just ends at the Special Instructions box. */}
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
