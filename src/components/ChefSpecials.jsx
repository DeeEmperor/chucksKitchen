import React from 'react';
import { Link } from 'react-router-dom';
import spicyTilapiaPepperSoupImage from '../assets/spicytilapiapeppersoup.png';
import jollofRiceAndFriedChickenImage from '../assets/jollofriceandfiredchicken.png';
import egusiAndPoundedYamImage from '../assets/egusiandpoundedyam.png';

const specials = [
    { 
        id: 1, 
        name: 'Spicy Tilapia Pepper Soup', 
        description: 'Authentic pepper soup, cooked slowly to perfection with high-quality tilapia.',
        price: 'N3,500',
        image: spicyTilapiaPepperSoupImage 
    },
    { 
        id: 2, 
        name: 'Jollof Rice & Fried Chicken', 
        description: 'Our signature rich and deeply seasoned Jollof rice, served with tender chicken.',
        price: 'N3,500',
        image: jollofRiceAndFriedChickenImage 
    },
    { 
        id: 3, 
        name: 'Egusi Soup & Pounded Yam', 
        description: 'Rich and savory Egusi soup with assorted meats, served with perfectly pounded yam.',
        price: 'N4,500',
        image: egusiAndPoundedYamImage 
    },
    { 
        id: 4, 
        name: 'Spicy Tilapia Pepper Soup', 
        description: 'Authentic pepper soup, cooked slowly to perfection with high-quality tilapia.',
        price: 'N3,500',
        image: spicyTilapiaPepperSoupImage 
    },
    { 
        id: 5, 
        name: 'Jollof Rice & Fried Chicken', 
        description: 'Our signature rich and deeply seasoned Jollof rice, served with tender chicken.',
        price: 'N3,500',
        image: jollofRiceAndFriedChickenImage 
    },
    { 
        id: 6, 
        name: 'Egusi Soup & Pounded Yam', 
        description: 'Rich and savory Egusi soup with assorted meats, served with perfectly pounded yam.',
        price: 'N4,500',
        image: egusiAndPoundedYamImage 
    },
];

const ChefSpecials = () => {
    return (
        <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto w-full bg-gray-50">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Chef's Specials
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {specials.map((item) => (
                    <Link 
                        to={`/food/${item.id}`}
                        key={item.id} 
                        className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100 flex flex-col cursor-pointer"
                    >
                        <div className="w-full h-56 overflow-hidden">
                            <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-brand-orange transition-colors">
                                {item.name}
                            </h3>
                            <p className="text-gray-600 text-sm mb-6 flex-grow">
                                {item.description}
                            </p>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-brand-orange font-bold text-lg">
                                    {item.price}
                                </span>
                                <button 
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="px-6 py-2 bg-brand-orange text-white text-sm font-semibold rounded-md hover:bg-orange-600 transition-colors shadow-sm"
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default ChefSpecials;
