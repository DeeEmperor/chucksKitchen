import React from 'react';
import heroImage from '../assets/onboardingImage.svg';

const SplitLayout = ({ rightContent, showOverlay = false, overlayText, overlaySubtext }) => {
    return (
        <section className="w-full max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row gap-12 items-stretch">
            {/* Left Column: Image Area */}
            <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-xl bg-gray-200 flex items-center justify-center relative">
                <img src={heroImage} alt="Family eating Nigerian food" className={`w-full h-full object-cover absolute inset-0 ${showOverlay ? 'mix-blend-overlay opacity-50' : ''}`} />
                
                {showOverlay && (
                    <>
                        {/* Orange Overlay */}
                        <div className="absolute inset-0 bg-[#FF7A18]/70 mix-blend-multiply"></div>
                        
                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center justify-center px-8 text-center text-white h-full w-full bg-black/10">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans tracking-wide">Chuks Kitchen</h1>
                            <p className="text-lg leading-relaxed max-w-md font-medium">
                                {overlaySubtext}
                            </p>
                        </div>
                    </>
                )}
            </div>

            {/* Right Column: Dynamic Content */}
            <div className="w-full md:w-1/2 flex flex-col gap-8">
                {rightContent}
            </div>
        </section>
    );
};

export default SplitLayout;
