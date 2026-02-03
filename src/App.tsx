import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Academy from './pages/Academy';
import CourseDetail from './pages/CourseDetail';
import Services from './pages/Services';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
      <div className="flex flex-col min-h-screen relative overflow-hidden">
        {/* Background Scanline Effect */}
        <div className="scanline" />
        
        {/* Background Gradients */}
        <div className="fixed inset-0 -z-10 bg-slate-950">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        <ScrollToTop />
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/academy/course/:slug" element={<CourseDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
  );
};

export default App;
