import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import './App.css';

function AppLayout() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/signin' || location.pathname === '/signup';
  const isHomePage = location.pathname === '/home';

  return (
    <div className="min-h-screen flex flex-col bg-white w-full">
      {(!isAuthPage && !isHomePage) && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
      {(!isAuthPage && !isHomePage) && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}



export default App;
