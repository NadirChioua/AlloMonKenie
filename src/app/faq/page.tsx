"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Phone, MessageCircle, Shield, Heart, Clock } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../lib/translations";

export default function FaqPage() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const { language } = useLanguage();
  const t = translations[language].faq_page;
  const isRTL = language === 'ar';

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 max-w-3xl">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{t.title}</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* Reassurance Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
            <div className="w-12 h-12 bg-blue-50 text-medical-blue rounded-full flex items-center justify-center mx-auto mb-3">
              <Shield size={24} />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">{t.cards.secure.title}</h3>
            <p className="text-sm text-slate-500">{t.cards.secure.desc}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Heart size={24} />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">{t.cards.human.title}</h3>
            <p className="text-sm text-slate-500">{t.cards.human.desc}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
            <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock size={24} />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">{t.cards.pace.title}</h3>
            <p className="text-sm text-slate-500">{t.cards.pace.desc}</p>
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {t.categories.map((category, catIdx) => (
            <div key={catIdx} className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="bg-blue-50/50 p-6 border-b border-blue-100">
                <h2 className="text-xl font-bold text-medical-blue flex items-center gap-2">
                  {category.title}
                </h2>
              </div>
              
              <div className="divide-y divide-slate-100">
                {category.items.map((item, itemIdx) => {
                  const itemId = `${catIdx}-${itemIdx}`;
                  const isOpen = openSection === itemId;

                  return (
                    <div key={itemIdx} className="group">
                      <button
                        onClick={() => toggleSection(itemId)}
                        className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors focus:outline-none focus:bg-slate-50"
                        aria-expanded={isOpen}
                      >
                        <span className={`font-semibold text-lg ${isOpen ? 'text-medical-blue' : 'text-slate-800'}`}>
                          {item.q}
                        </span>
                        <div className={`flex-shrink-0 ${isRTL ? 'mr-4' : 'ml-4'} p-1 rounded-full ${isOpen ? 'bg-medical-blue text-white' : 'bg-slate-100 text-slate-400'}`}>
                          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </div>
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-6 pt-2">
                          <p className="text-slate-600 leading-relaxed text-lg">
                            {item.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Category CTA */}
              <div className="bg-slate-50 p-6 flex flex-col sm:flex-row gap-4 justify-center items-center border-t border-slate-100">
                <p className="text-slate-500 font-medium text-sm hidden sm:block">{t.cta.text}</p>
                <a 
                  href="https://wa.me/212770782742" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-whatsapp-green font-bold hover:underline"
                >
                  <MessageCircle size={18} />
                  {t.cta.whatsapp}
                </a>
                <span className="text-slate-300 hidden sm:block">|</span>
                <a 
                  href="tel:+212770782742" 
                  className="flex items-center gap-2 text-medical-blue font-bold hover:underline"
                >
                  <Phone size={18} />
                  {t.cta.call}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Final Reassurance */}
        <div className="mt-16 text-center bg-medical-blue rounded-3xl p-8 md:p-12 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.cta.title_final}</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            {t.cta.desc_final}
          </p>
          <a 
            href="tel:+212770782742" 
            className="inline-flex items-center gap-3 bg-white text-medical-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            <Phone size={24} />
            {t.cta.btn_final}
          </a>
        </div>

      </div>
    </div>
  );
}
