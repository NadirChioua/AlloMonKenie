"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../lib/translations";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;
  const isRTL = language === 'ar';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
          <div className="relative h-12 w-12">
            <Image 
              src="/logo.png" 
              alt="Logo Allo mon kiné" 
              fill 
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-medical-blue tracking-tight leading-none">Allo mon kiné</span>
            <span className="text-xs font-semibold text-soft-green uppercase tracking-wider">{t.city}</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600 items-center">
          <Link href="/" className="hover:text-medical-blue transition-colors">{t.home}</Link>
          <Link href="/#services" className="hover:text-medical-blue transition-colors">{t.services}</Link>
          <Link href="/#patients" className="hover:text-medical-blue transition-colors">{t.patients}</Link>
          <Link href="/faq" className="hover:text-medical-blue transition-colors">{t.faq}</Link>
          <Link href="/contact" className="hover:text-medical-blue transition-colors">{t.contact}</Link>
          
          {/* Language Switcher - Enhanced Visibility */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-medical-blue hover:text-white transition-all duration-300 border border-slate-200 shadow-sm group"
            aria-label="Switch Language"
          >
            <Globe size={18} className="text-medical-blue group-hover:text-white transition-colors" />
            <span className="font-bold text-sm">
              {language === 'fr' ? 'العربية' : 'Français'}
            </span>
          </button>
        </nav>

        {/* Desktop Phone Button */}
        <a href="tel:+212770782742" className="hidden md:flex bg-medical-blue text-white px-5 py-2.5 rounded-full font-bold hover:bg-opacity-90 transition-opacity shadow-md">
          {t.call_btn}
        </a>

        {/* Mobile Menu Button & Lang Switcher */}
        <div className="flex items-center gap-3 md:hidden">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-sm font-bold text-medical-blue"
          >
            {language === 'fr' ? 'العربية' : 'Français'}
          </button>

          <button 
            className="text-slate-600 hover:text-medical-blue focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b shadow-lg z-50 animate-in slide-in-from-top-5 fade-in duration-200">
          <div className="flex flex-col p-4 space-y-4">
            <Link href="/" onClick={closeMenu} className="text-lg font-medium text-slate-700 hover:text-medical-blue py-2 border-b border-slate-50">
              {t.home}
            </Link>
            <Link href="/#services" onClick={closeMenu} className="text-lg font-medium text-slate-700 hover:text-medical-blue py-2 border-b border-slate-50">
              {t.services}
            </Link>
            <Link href="/#patients" onClick={closeMenu} className="text-lg font-medium text-slate-700 hover:text-medical-blue py-2 border-b border-slate-50">
              {t.patients}
            </Link>
            <Link href="/faq" onClick={closeMenu} className="text-lg font-medium text-slate-700 hover:text-medical-blue py-2 border-b border-slate-50">
              {t.faq}
            </Link>
            <Link href="/contact" onClick={closeMenu} className="text-lg font-medium text-slate-700 hover:text-medical-blue py-2 border-b border-slate-50">
              {t.contact}
            </Link>
            
            <a href="tel:+212770782742" className="flex items-center justify-center gap-2 bg-medical-blue text-white px-5 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-opacity shadow-sm mt-2">
              <Phone size={20} />
              {t.call_btn}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
