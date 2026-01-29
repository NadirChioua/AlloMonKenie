"use client";

import { CheckCircle, Clock, Heart, Home as HomeIcon, Shield, UserCheck, Phone, MessageCircle, Calendar, Stethoscope, Smile } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../lib/translations";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];
  const isRTL = language === 'ar';

  const trustIcons = [HomeIcon, Clock, UserCheck, Heart];

  return (
    <div className="flex flex-col gap-16 pb-16" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-12 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 z-10">
            <div className="inline-flex items-center gap-2 bg-white text-medical-blue px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm border border-blue-100">
              <Shield size={16} /> {t.hero.badge}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              {t.hero.title_1} <br />
              <span className="text-medical-blue">{t.hero.title_2}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed">
              {t.hero.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="tel:+212770782742" className="inline-flex items-center justify-center gap-2 bg-medical-blue text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1">
                <Phone size={20} /> {t.hero.cta_primary}
              </a>
              <a href="#services" className="inline-flex items-center justify-center gap-2 bg-white text-medical-blue border-2 border-medical-blue px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition-all">
                {t.hero.cta_secondary}
              </a>
            </div>
          </div>
          
          {/* Visual Hero Image */}
          <div className="flex-1 relative w-full aspect-[4/3] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
             <Image 
               src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2000&auto=format&fit=crop"
               alt="Kinésithérapeute aidant une personne âgée à marcher à domicile"
               fill
               className="object-cover"
               priority
             />
             
             {/* Floating Badge */}
             <div className={`absolute bottom-8 ${isRTL ? 'right-8' : 'left-8'} bg-white/95 backdrop-blur px-6 py-4 rounded-2xl shadow-lg border border-blue-50 max-w-[200px]`}>
               <div className="flex items-center gap-3 mb-1">
                 <div className="text-yellow-400 flex">★★★★★</div>
               </div>
               <p className="text-sm font-bold text-slate-800">"{t.hero.review}"</p>
             </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            t.trust.home,
            t.trust.time,
            t.trust.refund,
            t.trust.care
          ].map((item, idx) => {
            const Icon = trustIcons[idx];
            return (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center gap-3 hover:border-medical-blue/30 transition-colors group">
                <div className="p-4 bg-blue-50 text-medical-blue rounded-full group-hover:bg-medical-blue group-hover:text-white transition-colors">
                  <Icon size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Visual Process Section (How it works) */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-medical-blue font-bold tracking-wider uppercase text-sm">{t.process.badge}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">{t.process.title}</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-blue-100 -z-10"></div>
            
            {[
              { ...t.process.step1, icon: Phone, step: "01" },
              { ...t.process.step2, icon: Calendar, step: "02" },
              { ...t.process.step3, icon: Smile, step: "03" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center bg-white">
                <div className="w-24 h-24 bg-white border-4 border-blue-50 rounded-full flex items-center justify-center text-medical-blue shadow-sm mb-6 relative">
                  <item.icon size={32} />
                  <div className={`absolute -top-2 ${isRTL ? '-left-2' : '-right-2'} w-8 h-8 bg-soft-green text-white rounded-full flex items-center justify-center font-bold text-sm shadow-sm`}>
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 max-w-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience (Pour qui ?) - Visual Redesign */}
      <section id="patients" className="bg-slate-50 py-20 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-medical-blue font-bold tracking-wider uppercase text-sm">{t.patients.badge}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">{t.patients.title}</h2>
              <p className="text-slate-600 mt-4 text-lg">
                {t.patients.desc}
              </p>
            </div>
            <a href="#contact" className="hidden md:inline-flex items-center font-bold text-medical-blue hover:text-blue-700 transition-colors">
              {t.patients.link}
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {t.patients.cards.map((card, idx) => {
              const icons = [UserCheck, Stethoscope, Heart];
              const images = ["/images/senior-v2.jpg", "/images/postop-v2.jpg", "/images/chronic-v2.jpg"];
              const Icon = icons[idx];
              
              return (
                <div key={idx} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
                  {/* Visual Header / Image */}
                  <div className="h-48 relative bg-slate-200">
                    <Image 
                      src={images[idx]}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-medical-blue/20 mix-blend-multiply"></div>
                    <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} bg-white/90 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center text-medical-blue shadow-sm`}>
                      <Icon size={24} />
                    </div>
                  </div>
                  
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{card.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-6 flex-1">{card.desc}</p>
                    <div className="pt-6 border-t border-slate-100">
                      <a href="#contact" className="text-medical-blue font-bold text-sm flex items-center gap-2 group-hover:translate-x-1 transition-transform cursor-pointer">
                        {t.patients.cta} <span className={`text-lg ${isRTL ? 'rotate-180' : ''}`}>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section - Detailed */}
      <section id="services" className="bg-white py-20 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-medical-blue font-bold tracking-wider uppercase text-sm">{t.services.badge}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">{t.services.title}</h2>
            <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
              {t.services.desc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.list.map((service, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-soft-green/10 text-soft-green flex items-center justify-center flex-shrink-0 group-hover:bg-soft-green group-hover:text-white transition-colors">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href="tel:+212770782742" className="inline-flex items-center gap-2 text-medical-blue font-bold hover:underline text-lg">
              <Phone size={20} />
              {t.services.question}
            </a>
          </div>
        </div>
      </section>

      {/* Visual Atmosphere / Gallery Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-3xl p-8 border border-slate-100">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">{t.atmosphere.title}</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                {t.atmosphere.desc}
              </p>
              <ul className="space-y-4">
                {t.atmosphere.points.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <div className="w-6 h-6 rounded-full bg-soft-green/20 text-green-700 flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                 <div className="aspect-[3/4] bg-slate-100 rounded-2xl relative overflow-hidden shadow-md">
                   <Image 
                     src="/images/trust-doctor.jpg"
                     alt="Médecin expliquant un traitement avec bienveillance"
                     fill
                     className="object-cover"
                   />
                 </div>
              </div>
              <div className="space-y-4">
                 <div className="aspect-square bg-blue-50 rounded-2xl relative overflow-hidden flex items-center justify-center border border-blue-100">
                    <div className="text-medical-blue font-bold text-4xl">{t.atmosphere.exp_years}</div>
                    <div className="absolute bottom-4 text-sm text-blue-800 font-medium">{t.atmosphere.exp_text}</div>
                 </div>
                 <div className="aspect-[3/4] bg-slate-100 rounded-2xl relative overflow-hidden shadow-md">
                    <Image 
                      src="/images/trust-hand.jpg"
                      alt="Geste rassurant d'un soignant sur l'épaule d'un patient"
                      fill
                      className="object-cover"
                    />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="container mx-auto px-4 mb-8 scroll-mt-24">
        <div className="bg-medical-blue rounded-3xl p-8 md:p-16 text-white overflow-hidden relative shadow-2xl">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <div className="max-w-xl space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">{t.cta_section.title}</h2>
              <p className="text-blue-100 text-xl leading-relaxed">
                {t.cta_section.desc}
                <br />
                <span className="text-white font-semibold">{t.cta_section.sub_desc}</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                <a href="tel:+212770782742" className="bg-white text-medical-blue px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg flex items-center justify-center gap-2">
                  <Phone size={20} /> {t.cta_section.btn_call}
                </a>
                <a href="https://wa.me/212770782742" className="bg-whatsapp-green text-white px-8 py-4 rounded-full font-bold hover:bg-green-500 transition-colors flex items-center justify-center gap-2 shadow-lg border border-transparent hover:border-white/20">
                  <MessageCircle size={20} /> {t.cta_section.btn_whatsapp}
                </a>
              </div>
            </div>
            <div className="hidden md:block relative">
               <div className="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-inner">
                  <div className="text-center space-y-2">
                    <div className="text-5xl font-bold">{t.cta_section.circle_text}</div>
                    <div className="text-blue-100 text-sm uppercase tracking-widest">{t.cta_section.circle_sub}</div>
                  </div>
               </div>
               {/* Decorative floating elements */}
               <div className="absolute top-0 right-0 w-16 h-16 bg-soft-green rounded-full blur-xl opacity-60 animate-pulse"></div>
            </div>
          </div>
          
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-soft-green/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
