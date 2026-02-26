import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import SplitLayout from '../components/SplitLayout';

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/home');
    };

    const loginForm = (
        <div className="w-full flex flex-col items-center">
            <div className="flex flex-col items-center mb-10 w-full">
                <div className="text-5xl text-brand-orange font-script mb-2">
                    Chuks Kitchen
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                    Login your Account
                </h2>
            </div>

            <div className="w-full flex flex-col gap-6 max-w-md">
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-700">Email or phone number</label>
                    <div className="relative flex items-center">
                        <span className="absolute left-4 text-gray-500">
                            <FaEnvelope />
                        </span>
                        <input 
                            type="text" 
                            placeholder="name@gmail.com" 
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
                    <div className="flex justify-end mt-1">
                        <a href="#" className="text-sm text-blue-500 hover:text-blue-600 font-medium whitespace-nowrap">Forgot Password?</a>
                    </div>
                </div>

                <button 
                    onClick={handleContinue}
                    className="w-full py-3.5 bg-brand-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors shadow-sm mt-2"
                >
                    Continue
                </button>

                <div className="relative flex items-center justify-center py-2">
                    <div className="w-full border-t border-gray-300"></div>
                    <span className="absolute bg-[#F8F9FA] px-4 text-sm text-gray-500 font-medium">Or continue with</span>
                </div>

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

                <div className="text-center mt-2">
                    <span className="text-sm text-gray-600">Don't have an account? </span>
                    <Link to="/signup" className="text-sm text-blue-500 hover:text-blue-600 font-medium">Create an account</Link>
                </div>
            </div>
        </div>
    );

    return (
        <SplitLayout 
            showOverlay={true}
            overlaySubtext="Your journey to delicious, authentic Nigerian meals starts here. Sign up or log in to order your favorites today!"
            rightContent={loginForm}
        />
    );
};

export default SignIn;
