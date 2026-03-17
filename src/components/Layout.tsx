import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ExitIntentPopup from './ExitIntentPopup';
import { Phone } from 'lucide-react';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-black text-brand-white font-sans selection:bg-brand-red selection:text-white">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
      
      <ExitIntentPopup />

      {/* Floating Phone Button */}
      <a
        href="tel:847-650-6404"
        className="fixed bottom-6 right-6 z-50 bg-brand-red text-white p-4 rounded-full shadow-[0_0_20px_rgba(229,9,20,0.5)] hover:bg-brand-hover-red hover:scale-110 transition-all duration-300"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
