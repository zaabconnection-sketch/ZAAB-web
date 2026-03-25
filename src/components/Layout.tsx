import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-black/5">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold tracking-tighter text-black font-headline">
          <img src="/icon.jpeg" alt="ZAAB Icon" className="w-8 h-8 rounded-lg" referrerPolicy="no-referrer" />
          ZAAB
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className={cn(
              "text-sm font-headline tracking-tight transition-colors",
              isHome ? "text-black font-semibold border-b-2 border-primary pb-1" : "text-black/60 hover:text-black"
            )}
          >
            Features
          </Link>
          <a href="#how-it-works" className="text-black/60 hover:text-black transition-colors font-headline text-sm tracking-tight">
            How it Works
          </a>
          <a href="#security" className="text-black/60 hover:text-black transition-colors font-headline text-sm tracking-tight">
            Security
          </a>
          <Link 
            to="/privacy" 
            className={cn(
              "text-sm font-headline tracking-tight transition-colors",
              location.pathname === '/privacy' ? "text-black font-semibold border-b-2 border-primary pb-1" : "text-black/60 hover:text-black"
            )}
          >
            Privacy
          </Link>
        </div>
        <button className="bg-primary text-black font-bold px-6 py-2 rounded-lg hover:brightness-95 transition-all text-sm">
          Download APK
        </button>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="w-full py-12 border-t border-black/5 bg-white">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-xl font-bold text-black font-headline">
            <img src="/icon.jpeg" alt="ZAAB Icon" className="w-6 h-6 rounded-md" referrerPolicy="no-referrer" />
            ZAAB
          </div>
          <p className="text-black/40 text-sm max-w-xs">
            © 2024 ZAAB Digital Identity. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a 
            href="https://wa.me/qr/7HWQ2A6YVY5OL1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-black/60 hover:text-black transition-colors text-sm"
          >
            WhatsApp Support
          </a>
          <a 
            href="https://www.facebook.com/share/p/1GsdrnaN4P/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-black/60 hover:text-black transition-colors text-sm"
          >
            Facebook Page
          </a>
          <Link to="/privacy" className="text-black/60 hover:text-black transition-colors text-sm">Privacy Policy</Link>
          <Link to="/terms" className="text-black/60 hover:text-black transition-colors text-sm">Terms of Service</Link>
        </div>
        <div className="text-black/30 text-[10px] uppercase tracking-widest text-right md:w-64 font-bold">
          ZAAB IS AN AUTOMATION TOOL. WE ARE NOT A FINANCIAL INSTITUTION.
        </div>
      </div>
    </footer>
  );
}
