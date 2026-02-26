import React from 'react';
import newMenuAdditionsImage from '../assets/newmenuadditions.png';

const NewMenuAdditions = () => {
    return (
        <section className="relative w-full py-24 flex flex-col items-center justify-center text-center px-4 mt-8">
            <div 
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${newMenuAdditionsImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="relative z-10 max-w-4xl flex flex-col items-start text-left w-full px-4 md:px-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                    Introducing Our New Menu Additions!
                </h2>
                
                <p className="text-lg md:text-xl text-gray-200 mb-10 font-medium max-w-2xl">
                    Explore exciting new dishes, crafted with the freshest ingredients and authentic Nigerian flavors. Limited time offer!
                </p>

                <button className="px-8 py-4 bg-brand-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors shadow-lg text-lg">
                    Discover New Menu
                </button>
            </div>
        </section>
    );
};

export default NewMenuAdditions;
