import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
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
          <Route path="/" element={<Navigate to="/signin" replace />} />
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
    <Router basename="/chucksKitchen/">
      <AppLayout />
    </Router>
  );
}



export default App;
