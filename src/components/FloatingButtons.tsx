"use client";

import { Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../lib/translations";

export default function FloatingButtons() {
  const { language } = useLanguage();
  const t = translations[language].cta_section; // reusing some translations or I can add specific ones if needed. 
  // Actually, I should use specific texts for these buttons to match "Contact WhatsApp" and "Appel urgent"
  
  // Hardcoding specific translations for FAB to ensure perfect match with previous version but translated
  const fabT = {
    fr: { whatsapp: "Contact WhatsApp", call: "Appel urgent" },
    ar: { whatsapp: "واتساب", call: "اتصال عاجل" }
  };
  
  const text = fabT[language];

  return (
    <div className={`fixed bottom-6 ${language === 'ar' ? 'left-4 items-start' : 'right-4 items-end'} flex flex-col gap-3 z-50`}>
       {/* WhatsApp Button - Green */}
       <a 
         href="https://wa.me/212770782742" 
         target="_blank"
         rel="noopener noreferrer"
         className="flex items-center gap-3 bg-whatsapp-green text-white px-5 py-3 rounded-full shadow-xl hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-green-300 group"
         aria-label={text.whatsapp}
       >
         <MessageCircle size={24} className="fill-current" />
         <span className="font-bold text-base">{text.whatsapp}</span>
       </a>
       
       {/* Emergency/Phone Button - Red */}
       <a 
         href="tel:+212770782742" 
         className="flex items-center gap-3 bg-emergency-red text-white px-5 py-3 rounded-full shadow-xl hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-red-300 group animate-pulse hover:animate-none"
         aria-label={text.call}
       >
         <Phone size={24} className="fill-current" />
         <span className="font-bold text-base">{text.call}</span>
       </a>
    </div>
  );
}
