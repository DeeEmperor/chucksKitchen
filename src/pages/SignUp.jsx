import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaApple, FaPhone } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import SplitLayout from '../components/SplitLayout';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/home');
    };

    const signupForm = (
        <div className="w-full flex flex-col items-center">
            {/* Logo & Title */}
            <div className="flex flex-col items-center mb-10 w-full">
                <div className="text-5xl text-brand-orange font-script mb-2">
                    Chuks Kitchen
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                    Create your account
                </h2>
            </div>

            {/* Form Fields */}
            <div className="w-full flex flex-col gap-6 max-w-md">
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                    <div className="relative flex items-center">
                        <span className="absolute left-4 text-gray-500">
                            <FaEnvelope />
                        </span>
                        <input 
                            type="email" 
                            placeholder="name@gmail.com" 
                            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-700">Phone Number</label>
                    <div className="relative flex items-center">
                        <span className="absolute left-4 text-gray-500">
                            <FaPhone />
                        </span>
                        <input 
                            type="tel" 
                            placeholder="+234 800 000 0000" 
                            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-700">Password</label>
                    <div className="relative flex items-center">
                        <span className="absolute left-4 text-gray-500">
                            <FaLock />
                        </span>
                        <input 
                            type={showPassword ? "text" : "password"} 
                            placeholder="******" 
                            className="w-full pl-12 pr-12 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
                        />
                        <button 
                            type="button"
                            className="absolute right-4 text-gray-500 hover:text-gray-700"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </button>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-700">Confirm Password</label>
                    <div className="relative flex items-center">
                        <span className="absolute left-4 text-gray-500">
                            <FaLock />
                        </span>
                        <input 
                            type={showConfirmPassword ? "text" : "password"} 
                            placeholder="******" 
                            className="w-full pl-12 pr-12 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
                        />
                        <button 
                            type="button"
                            className="absolute right-4 text-gray-500 hover:text-gray-700"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                        </button>
                    </div>
                </div>

                {/* Terms and Conditions Checkbox */}
                <div className="flex items-center gap-2 mt-1">
                    <input 
                        type="checkbox" 
                        id="terms" 
                        className="w-4 h-4 text-brand-orange border-gray-300 rounded focus:ring-brand-orange cursor-pointer"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                        I agree to <Link to="#" className="text-blue-500 hover:text-blue-600 font-medium whitespace-nowrap">terms & conditions</Link> and <Link to="#" className="text-blue-500 hover:text-blue-600 font-medium whitespace-nowrap">privacy policy</Link>
                    </label>
                </div>

                {/* Continue Button */}
                <button 
                    onClick={handleContinue}
                    className="w-full py-3.5 bg-brand-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors shadow-sm mt-2"
                >
                    Continue
                </button>

                {/* Divider */}
                <div className="relative flex items-center justify-center py-2">
                    <div className="w-full border-t border-gray-300"></div>
                    <span className="absolute bg-[#F8F9FA] px-4 text-sm text-gray-500 font-medium">Or continue with</span>
                </div>

                {/* Social Buttons */}
                <div className="flex flex-col gap-4">
                    <button className="w-full flex items-center justify-center gap-3 py-3.5 border border-gray-300 bg-white rounded-lg hover:bg-gray-50 transition-colors text-gray-700 font-medium shadow-sm">
                        <span className="text-xl"><FcGoogle /></span>
                        Continue with Google
                    </button>
                    <button className="w-full flex items-center justify-center gap-3 py-3.5 border border-gray-300 bg-white rounded-lg hover:bg-gray-50 transition-colors text-gray-700 font-medium shadow-sm">
                        <span className="text-xl text-black"><FaApple /></span>
                        Continue with Apple
                    </button>
                </div>

                {/* Sign In Link */}
                <div className="text-center mt-2">
                    <span className="text-sm text-gray-600">Already have an account? </span>
                    <Link to="/signin" className="text-sm text-blue-500 hover:text-blue-600 font-medium">Sign in</Link>
                </div>
            </div>
        </div>
    );

    return (
        <SplitLayout 
            showOverlay={true}
            overlaySubtext="Your journey to delicious, authentic Nigerian meals starts here. Sign up or log in to order your favorites today!"
            rightContent={signupForm}
        />
    );
};

export default SignUp;
