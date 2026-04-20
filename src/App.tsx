import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import AppSection from './components/AppSection';
import DisplayAppProduct from './components/DisplayAppProduct';
import NewsCarousel from './components/NewsCarousel';
import Vision from './components/Vision';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import AppModal from './components/AppModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const bottomLimit = document.documentElement.scrollHeight - 300; // Offset for footers
      if (scrollPosition > bottomLimit) {
        setShowStickyCTA(false);
      } else {
        setShowStickyCTA(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      <Navbar />
      
      <Hero onOpenModal={openModal} />
      
      <About />
      
      <Benefits />
      
      <AppSection onOpenModal={openModal} />
      
      <DisplayAppProduct onOpenModal={openModal} />
      
      <NewsCarousel />
      
      <Vision />
      
      <ContactForm />
      
      <Footer />
      
      <StickyCTA show={showStickyCTA} onOpenModal={openModal} />
      
      <AppModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
