"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Check } from "lucide-react";

export default function LanguageSelectorModal() {
  const [isVisible, setIsVisible] = useState(false);
  const { setLanguage } = useLanguage();

  useEffect(() => {
    // Check if the user has already selected a language
    const hasSelectedLanguage = localStorage.getItem("language_selected");
    if (!hasSelectedLanguage) {
      // Small delay for smooth entrance
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSelect = (lang: 'fr' | 'ar') => {
    setLanguage(lang);
    localStorage.setItem("language_selected", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden scale-100 animate-in zoom-in-95 duration-300">
        <div className="bg-medical-blue p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Bienvenue / مرحبًا</h2>
          <p className="text-blue-100">Veuillez choisir votre langue<br />يرجى اختيار لغتك</p>
        </div>
        
        <div className="p-8 grid gap-4">
          <button
            onClick={() => handleSelect('fr')}
            className="group flex items-center justify-between p-4 rounded-2xl border-2 border-slate-100 hover:border-medical-blue hover:bg-blue-50 transition-all duration-200"
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl">🇫🇷</span>
              <div className="text-left">
                <div className="font-bold text-slate-900 text-lg">Français</div>
                <div className="text-slate-500 text-sm">Continuer en français</div>
              </div>
            </div>
            <div className="w-6 h-6 rounded-full border-2 border-slate-300 group-hover:border-medical-blue group-hover:bg-medical-blue flex items-center justify-center transition-colors">
              <Check size={14} className="text-white opacity-0 group-hover:opacity-100" />
            </div>
          </button>

          <button
            onClick={() => handleSelect('ar')}
            className="group flex items-center justify-between p-4 rounded-2xl border-2 border-slate-100 hover:border-medical-blue hover:bg-blue-50 transition-all duration-200"
            dir="rtl"
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl">🇲🇦</span>
              <div className="text-right">
                <div className="font-bold text-slate-900 text-lg">العربية</div>
                <div className="text-slate-500 text-sm">متابعة باللغة العربية</div>
              </div>
            </div>
            <div className="w-6 h-6 rounded-full border-2 border-slate-300 group-hover:border-medical-blue group-hover:bg-medical-blue flex items-center justify-center transition-colors">
              <Check size={14} className="text-white opacity-0 group-hover:opacity-100" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
