import React from 'react';
import { FaSearch } from 'react-icons/fa';

const HomeHero = () => {
    return (
        <section className="relative w-full h-[600px] flex flex-col justify-center px-8 md:px-16 lg:px-24">
            {/* background image with overlay */}
            <div 
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('/src/assets/partyJollof.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* dark gradient overlay to ensure text readability */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* content layer */}
            <div className="relative z-10 max-w-3xl flex flex-col items-start text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    The Heart of Nigerian Home Cooking
                </h1>
                
                <p className="text-xl md:text-2xl text-white mb-8 font-medium drop-shadow-md">
                    Handcrafted with passion, delivered with care.
                </p>

                <button className="px-8 py-4 bg-brand-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors shadow-lg text-lg">
                    Discover what's new
                </button>
            </div>

            {/* floating search bar positioned perfectly at the bottom */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4 z-20">
                <div className="bg-white rounded-lg shadow-xl p-2 flex items-center">
                    <span className="text-gray-400 pl-4 pr-2 text-xl">
                        <FaSearch />
                    </span>
                    <input 
                        type="text" 
                        placeholder="What are you craving for today?" 
                        className="w-full py-4 px-2 text-lg focus:outline-none text-gray-700 placeholder-gray-400 bg-transparent"
                    />
                </div>
            </div>
        </section>
    );
};

export default HomeHero;
