"use client";

import { Phone, MapPin, Clock, MessageCircle, Info } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../lib/translations";

export default function ContactPage() {
  const { language } = useLanguage();
  const t = translations[language].contact_page;
  const isRTL = language === 'ar';

  return (
    <div className="bg-slate-50 min-h-screen py-12" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-medical-blue p-8 text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h1>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg leading-relaxed">
              {t.desc}
            </p>
          </div>

          <div className="p-8 md:p-12">
            {/* Contact Info Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12 border-b border-slate-100 pb-12">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-blue-50 text-medical-blue rounded-full flex items-center justify-center mx-auto mb-2">
                  <Phone size={24} />
                </div>
                <h3 className="font-bold text-slate-900">{t.phone}</h3>
                <div className="text-slate-600 text-sm space-y-1">
                  <p><a href="tel:+212770782742" className="hover:text-medical-blue">+212 770782742</a></p>
                  <p><a href="tel:+212674240965" className="hover:text-medical-blue">+212 674240965</a></p>
                </div>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <MapPin size={24} />
                </div>
                <h3 className="font-bold text-slate-900">{t.zone}</h3>
                <p className="text-slate-600 text-sm">{t.zone_desc}</p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Clock size={24} />
                </div>
                <h3 className="font-bold text-slate-900">{t.hours}</h3>
                <p className="text-slate-600 text-sm whitespace-pre-line">{t.hours_desc}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Form Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-800">{t.form_title}</h2>
                <form action="mailto:contact@allomonkine.ma" method="post" encType="text/plain" className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">{t.labels.name}</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder={t.labels.name_ph}
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-medical-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">{t.labels.email}</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder={t.labels.email_ph}
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-medical-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">{t.labels.message}</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      placeholder={t.labels.message_ph}
                      rows={5} 
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-medical-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-medical-blue text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 active:scale-[0.98] transform"
                  >
                    {t.labels.submit}
                  </button>
                </form>
                <p className="text-center text-slate-400 text-xs flex items-center justify-center gap-1">
                  <Info size={12} /> {t.labels.note}
                </p>
              </div>

              {/* Quick Actions / WhatsApp */}
              <div className="space-y-6 flex flex-col justify-center">
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                  <h3 className="font-bold text-slate-800 mb-2">{t.quick_response}</h3>
                  <p className="text-slate-600 text-sm mb-6">
                    {t.quick_desc}
                  </p>
                  
                  <div className="space-y-4">
                    <a 
                      href="https://wa.me/212770782742" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 w-full bg-whatsapp-green text-white font-bold py-4 rounded-xl hover:bg-green-600 transition-colors shadow-lg shadow-green-100"
                    >
                      <MessageCircle size={20} />
                      WhatsApp (+212 770782742)
                    </a>
                    
                    <a 
                      href="https://wa.me/212674240965" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 w-full bg-white text-whatsapp-green border-2 border-whatsapp-green font-bold py-4 rounded-xl hover:bg-green-50 transition-colors"
                    >
                      <MessageCircle size={20} />
                      WhatsApp (+212 674240965)
                    </a>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                   <p className="text-sm text-slate-500 italic">
                     {t.material_note}
                   </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
