import React from 'react';
import HomeNavbar from '../components/HomeNavbar';
import HomeHero from '../components/HomeHero';
import PopularCategories from '../components/PopularCategories';
import ChefSpecials from '../components/ChefSpecials';
import NewMenuAdditions from '../components/NewMenuAdditions';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
            <header className="bg-white shadow-sm z-50">
                <HomeNavbar />
            </header>
            
            <main className="flex-grow flex flex-col">
                <HomeHero />
                
                {/* Spacing for the floating search bar to not overlap next section */}
                <div className="h-16 w-full"></div> 

                <PopularCategories />
                <div className="w-full h-px bg-gray-200 my-8 max-w-7xl mx-auto"></div> {/* Divider */}
                <ChefSpecials />
                <NewMenuAdditions />
            </main>

            <Footer />
        </div>
    );
};

export default Home;
