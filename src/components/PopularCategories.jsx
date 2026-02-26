import React from 'react';
import jollofDelightsImage from '../assets/jollofDelights.png';
import swallowAndSoupImage from '../assets/swallowandsoup.png';
import grillsAndBbqImage from '../assets/grillsandbbq.png';
import sweetAndTreatImage from '../assets/sweetandtreat.png';

const categories = [
    { id: 1, name: 'Jollof Delights', image: jollofDelightsImage },
    { id: 2, name: 'Swallow & Soups', image: swallowAndSoupImage },
    { id: 3, name: 'Grills & BBQ', image: grillsAndBbqImage },
    { id: 4, name: 'Sweet Treats', image: sweetAndTreatImage },
    { id: 5, name: 'Jollof Delights', image: jollofDelightsImage }, // Repeating based on design
    { id: 6, name: 'Jollof Delights', image: jollofDelightsImage }, // Repeating based on design
];

const PopularCategories = () => {
    return (
        <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Popular Categories
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {categories.map((category) => (
                    <div 
                        key={category.id} 
                        className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100 flex flex-col items-center"
                    >
                        <div className="w-full h-56 overflow-hidden">
                            <img 
                                src={category.image} 
                                alt={category.name} 
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <div className="w-full py-6 text-center">
                            <h3 className="text-xl font-bold text-gray-800">
                                {category.name}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PopularCategories;
