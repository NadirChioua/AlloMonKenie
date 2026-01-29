"use client";

import Image from "next/image";
import { Phone, MessageCircle, Instagram, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../lib/translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;
  const isRTL = language === 'ar';

  return (
    <footer className="bg-slate-50 border-t py-12 mt-auto" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
             <div className="relative h-10 w-10">
               <Image 
                 src="/logo.png" 
                 alt="Logo Allo mon kiné" 
                 fill 
                 className="object-contain"
               />
             </div>
            <span className="text-lg font-bold text-medical-blue">Allo mon kiné</span>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mb-4">
            {t.desc}
          </p>
          <div className="flex items-center gap-2 text-medical-blue font-medium text-sm">
            <MapPin size={16} />
            <span>{t.intervention}</span>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-slate-800 mb-4">{t.services_title}</h3>
          <ul className="space-y-2 text-sm text-slate-500">
            {t.services_list.map((service, idx) => (
              <li key={idx}>{service}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-slate-800 mb-4">{t.contact_title}</h3>
          <ul className="space-y-3 text-sm text-slate-500">
            <li className="flex items-center gap-2 text-ltr">
              <Phone size={16} /> <span dir="ltr">07 70 78 27 42</span>
            </li>
            <li className="flex items-center gap-2 text-ltr">
              <Phone size={16} /> <span dir="ltr">06 74 24 09 65</span>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle size={16} /> {t.whatsapp_available}
            </li>
            <li className="flex items-center gap-2 pt-2">
              <a 
                href="https://www.instagram.com/allomonkine?igsh=NWw3MTB6NGQ3eXdu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-medical-blue hover:text-blue-700 transition-colors font-medium"
              >
                <Instagram size={18} /> 
                {t.instagram}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 text-center text-slate-400 text-sm pt-8 border-t border-slate-200">
        <p>{t.copyright}</p>
      </div>
    </footer>
  );
}
