import { CheckCircle, Clock, Heart, Home, Shield, UserCheck, Phone, MessageCircle, Calendar, Stethoscope, Smile, MapPin, Instagram } from "lucide-react";

export const translations = {
  fr: {
    meta: {
      title: "Allo mon kiné - Kinésithérapie à domicile à Tanger",
      desc: "Service professionnel de kinésithérapie à domicile à Tanger. Pour seniors, adultes et post-opératoire. Soins de qualité chez vous.",
    },
    nav: {
      home: "Accueil",
      services: "Services",
      patients: "Pour qui ?",
      faq: "FAQ",
      contact: "Contact",
      call_btn: "07 70 78 27 42",
      city: "Tanger"
    },
    hero: {
      badge: "Service agréé et conventionné",
      title_1: "Votre kinésithérapeute",
      title_2: "vient à vous à Tanger",
      desc: "Des soins doux et professionnels, directement chez vous à Tanger. Nous venons à votre domicile pour vous aider à aller mieux, à votre rythme.",
      cta_primary: "Prendre rendez-vous",
      cta_secondary: "Découvrir nos soins",
      review: "Merci pour votre patience et votre douceur.",
    },
    trust: {
      home: { title: "À domicile", desc: "Partout à Tanger" },
      time: { title: "Ponctualité", desc: "Horaires respectés" },
      refund: { title: "Remboursé", desc: "Soins agréés" },
      care: { title: "Douceur", desc: "À votre écoute" },
    },
    process: {
      badge: "Simplicité & Rapidité",
      title: "Votre parcours de soin en 3 étapes",
      step1: { title: "Appelez-nous", desc: "Un simple appel ou un message WhatsApp. Nous vous répondons avec le sourire." },
      step2: { title: "Première visite", desc: "Nous venons chez vous pour discuter et comprendre vos besoins." },
      step3: { title: "Vos soins", desc: "Des séances régulières pour vous aider à retrouver la forme." },
    },
    patients: {
      badge: "Nos Patients",
      title: "Une prise en charge adaptée à chacun",
      desc: "Que ce soit pour le grand âge, une suite d'opération ou une pathologie chronique, nous avons l'expertise.",
      link: "Voir toutes nos spécialités →",
      cards: [
        { title: "Pour les Seniors", desc: "Pour garder votre autonomie, éviter les chutes et rester en forme chez vous." },
        { title: "Après une opération", desc: "Pour vous aider à remarcher et bouger normalement après une chirurgie (prothèse, fracture)." },
        { title: "Maladies chroniques", desc: "Un accompagnement régulier et patient pour vous aider au quotidien (AVC, Parkinson, Respiratoire)." },
      ],
      cta: "Prendre rendez-vous"
    },
    services: {
      badge: "Nos Soins",
      title: "Une expertise complète à domicile",
      desc: "Nous couvrons l'ensemble des besoins de rééducation avec du matériel professionnel adapté.",
      list: [
        { title: "Suivi personnalisé", desc: "Bilan complet et programme sur-mesure." },
        { title: "Rééducation neurologique", desc: "AVC, Parkinson, SEP... prise en charge experte." },
        { title: "Rééducation fonctionnelle", desc: "Retrouver la mobilité et l'autonomie au quotidien." },
        { title: "Douleurs musculo-squelettiques", desc: "Soulager le dos, les articulations et les tensions." },
        { title: "Kinésithérapie Seniors", desc: "Prévention des chutes et maintien de la forme." },
        { title: "Rééducation respiratoire", desc: "Bronchiolite, BPCO, encombrement bronchique." }
      ],
      question: "Une question sur un soin spécifique ? Appelez-nous"
    },
    atmosphere: {
      title: "Nous prenons soin de vous",
      desc: "Le plus important pour nous, c'est que vous vous sentiez bien. Nous prenons le temps de vous écouter et de respecter votre rythme.",
      points: [
        "Nous prenons le temps qu'il faut",
        "Nous expliquons tout simplement",
        "Nous respectons votre douleur",
        "Nous parlons avec votre médecin"
      ],
      exp_years: "10+",
      exp_text: "Années d'expérience"
    },
    cta_section: {
      title: "Besoin d'un kiné rapidement à Tanger ?",
      desc: "Nous intervenons dans les plus brefs délais sur simple appel.",
      sub_desc: "Votre santé n'attend pas.",
      btn_call: "Appeler maintenant",
      btn_whatsapp: "WhatsApp",
      circle_text: "7j/7",
      circle_sub: "Prise de RDV"
    },
    footer: {
      desc: "Votre kiné à la maison à Tanger. Nous prenons soin de vous avec douceur et professionnalisme, directement chez vous.",
      intervention: "Intervention sur tout Tanger",
      services_title: "Services",
      services_list: ["Après une opération", "Problèmes respiratoires", "Pour les Seniors", "Maladies chroniques"],
      contact_title: "Contact",
      whatsapp_available: "WhatsApp disponible",
      instagram: "Suivez-nous sur Instagram",
      copyright: "© 2026 Allo mon kiné. Tous droits réservés."
    },
    contact_page: {
      title: "Contactez Allo mon kiné à Tanger",
      desc: "Bienvenue chez Allo mon kiné ! Nous sommes là pour vous offrir des services de kinésithérapie à domicile à Tanger, adaptés à vos besoins et dans le confort de votre maison.",
      phone: "Téléphone",
      zone: "Zone d'intervention",
      zone_desc: "Tanger et environs",
      hours: "Horaires",
      hours_desc: "Lundi – Samedi\n9h – 22h",
      form_title: "Envoyez-nous un message",
      labels: {
        name: "Votre nom",
        name_ph: "Votre nom complet",
        email: "Votre email",
        email_ph: "votre@email.com",
        message: "Votre message",
        message_ph: "Comment pouvons-nous vous aider ?",
        submit: "Envoyer le message",
        note: "*Veuillez prévoir votre ordonnance médicale si disponible."
      },
      quick_response: "Réponse rapide",
      quick_desc: "Pour une prise en charge immédiate, privilégiez le contact par WhatsApp.",
      material_note: "\"Nous nous déplaçons chez vous avec tout le matériel nécessaire pour votre séance.\""
    },
    faq_page: {
      title: "Questions Fréquentes",
      desc: "Nous comprenons que vous ayez des questions. Voici des réponses simples et claires pour vous rassurer. Votre santé et votre tranquillité d'esprit sont notre priorité.",
      cards: {
        secure: { title: "100% Sécurisé", desc: "Praticiens diplômés et protocoles d'hygiène stricts." },
        human: { title: "Approche Humaine", desc: "Patience, écoute et douceur pour chaque patient." },
        pace: { title: "À votre rythme", desc: "Nous prenons le temps nécessaire pour vous." }
      },
      categories: [
        {
          title: "Questions Générales",
          items: [
            { q: "Qu’est-ce que la kinésithérapie à domicile ?", a: "C'est un service médical où le kinésithérapeute se déplace directement chez vous avec tout son matériel. Vous bénéficiez des mêmes soins qu'en cabinet, mais dans le confort de votre maison, sans avoir à vous déplacer." },
            { q: "Est-ce que le service est fiable et sécurisé ?", a: "Absolument. Nous sommes des professionnels de santé diplômés d'État. Nous respectons strictement les protocoles médicaux et d'hygiène pour garantir votre sécurité et votre bien-être." },
            { q: "Dans quelles zones intervenez-vous ?", a: "Nous intervenons principalement à Tanger et ses environs. En cas de doute sur votre adresse, n'hésitez pas à nous appeler ou à nous envoyer un message WhatsApp pour confirmer." }
          ]
        },
        {
          title: "Déroulement des soins",
          items: [
            { q: "Comment se déroule une séance à domicile ?", a: "Le kinésithérapeute arrive chez vous avec le matériel nécessaire. La séance commence par un échange pour comprendre votre état, suivi des exercices et soins adaptés. Nous prenons le temps de tout vous expliquer calmement." },
            { q: "Combien de temps dure une séance ?", a: "Une séance dure généralement entre 30 et 45 minutes, selon vos besoins et votre prescription médicale. Nous prenons le temps nécessaire pour que le soin soit efficace et confortable." }
          ]
        },
        {
          title: "Seniors & Post-Opératoire",
          items: [
            { q: "Est-ce que le service est adapté aux personnes âgées ?", a: "Oui, c'est notre spécialité. Nous avons l'habitude de travailler avec les seniors. Nous sommes patients, à l'écoute et nous adaptons nos gestes pour assurer des soins en douceur et en toute sécurité." },
            { q: "Je sors d'une opération, pouvez-vous m'aider ?", a: "Tout à fait. La rééducation post-opératoire (après une prothèse, une fracture, etc.) est essentielle. Nous vous aidons à retrouver votre mobilité progressivement, sans que vous ayez à subir la fatigue des trajets." }
          ]
        },
        {
          title: "Rendez-vous & Urgences",
          items: [
            { q: "Comment prendre rendez-vous rapidement ?", a: "Le plus simple est de nous contacter par téléphone ou WhatsApp. Nous vous répondons rapidement pour fixer un créneau qui vous arrange." },
            { q: "Puis-je vous contacter directement par WhatsApp ?", a: "Oui, bien sûr ! C'est souvent le moyen le plus rapide. Vous pouvez nous envoyer un message vocal ou écrit, nous vous répondrons dans les plus brefs délais." },
            { q: "Que faire en cas d’urgence ?", a: "Si vous avez une douleur intense ou un blocage soudain, appelez-nous directement sur notre ligne d'urgence (bouton rouge). Nous ferons notre possible pour intervenir rapidement." }
          ]
        },
        {
          title: "Administratif",
          items: [
            { q: "Est-ce qu’une ordonnance médicale est nécessaire ?", a: "Pour un suivi médical complet et une prise en charge optimale, l'ordonnance de votre médecin est recommandée. Elle nous permet de connaître exactement le protocole à suivre pour votre rétablissement." }
          ]
        }
      ],
      cta: {
        text: "Une question ?",
        whatsapp: "Contactez-nous sur WhatsApp",
        call: "Appel direct – Réponse rapide",
        title_final: "Vous avez d'autres questions ?",
        desc_final: "Ne restez pas avec un doute. Appelez-nous simplement, nous sommes là pour vous aider et vous conseiller.",
        btn_final: "Parler à un kinésithérapeute"
      }
    }
  },
  ar: {
    meta: {
      title: "آلو مون كيني - علاج طبيعي منزلي في طنجة",
      desc: "خدمة احترافية للعلاج الطبيعي في المنزل بطنجة. لكبار السن والبالغين وما بعد العمليات الجراحية. رعاية عالية الجودة في منزلك.",
    },
    nav: {
      home: "الرئيسية",
      services: "خدماتنا",
      patients: "لمن؟",
      faq: "أسئلة شائعة",
      contact: "اتصل بنا",
      call_btn: "07 70 78 27 42",
      city: "طنجة"
    },
    hero: {
      badge: "خدمة معتمدة ومرخصة",
      title_1: "أخصائي العلاج الطبيعي",
      title_2: "يأتي إليك في طنجة",
      desc: "رعاية طبية لطيفة واحترافية، مباشرة في منزلك بطنجة. نأتي إليك لمساعدتك على التحسن والتعافي، وفقًا لوتيرتك الخاصة.",
      cta_primary: "احجز موعدك الآن",
      cta_secondary: "اكتشف علاجاتنا",
      review: "شكراً لكم على صبركم ولطفكم.",
    },
    trust: {
      home: { title: "في المنزل", desc: "في جميع أنحاء طنجة" },
      time: { title: "دقة المواعيد", desc: "احترام التوقيت" },
      refund: { title: "خدمة معتمدة", desc: "رعاية مغطاة" },
      care: { title: "عناية ولطف", desc: "نستمع إليك" },
    },
    process: {
      badge: "بساطة وسرعة",
      title: "رحلة علاجك في 3 خطوات",
      step1: { title: "اتصل بنا", desc: "مكالمة بسيطة أو رسالة واتساب. نرد عليك بابتسامة." },
      step2: { title: "الزيارة الأولى", desc: "نأتي إلى منزلك للمناقشة وفهم احتياجاتك الصحية." },
      step3: { title: "بدء العلاج", desc: "جلسات منتظمة لمساعدتك على استعادة لياقتك وحركتك." },
    },
    patients: {
      badge: "مرضانا",
      title: "رعاية مكيّفة لكل حالة",
      desc: "سواء كان ذلك لكبار السن، أو بعد عملية جراحية، أو لمرض مزمن، لدينا الخبرة اللازمة.",
      link: "شاهد جميع تخصصاتنا ←",
      cards: [
        { title: "لكبار السن", desc: "للحفاظ على استقلاليتك، وتجنب السقوط، والبقاء بصحة جيدة في منزلك." },
        { title: "بعد العمليات الجراحية", desc: "لمساعدتك على المشي والتحرك بشكل طبيعي بعد الجراحة (كسر، مفصل صناعي)." },
        { title: "الأمراض المزمنة", desc: "مرافقة منتظمة وصبورة لمساعدتك في حياتك اليومية (جلطة، باركنسون، تنفس)." },
      ],
      cta: "احجز موعدك"
    },
    services: {
      badge: "علاجاتنا",
      title: "خبرة شاملة في المنزل",
      desc: "نغطي جميع احتياجات إعادة التأهيل باستخدام معدات احترافية ومناسبة.",
      list: [
        { title: "متابعة شخصية", desc: "تقييم شامل وبرنامج علاجي مخصص." },
        { title: "إعادة التأهيل العصبي", desc: "الجلطات، باركنسون... رعاية متخصصة." },
        { title: "إعادة التأهيل الوظيفي", desc: "استعادة الحركة والاستقلالية في الحياة اليومية." },
        { title: "آلام العضلات والمفاصل", desc: "تخفيف آلام الظهر والمفاصل والتوتر." },
        { title: "علاج طبيعي لكبار السن", desc: "الوقاية من السقوط والحفاظ على النشاط." },
        { title: "إعادة التأهيل التنفسي", desc: "ضيق التنفس، الانسداد الرئوي، التهاب القصيبات." }
      ],
      question: "لديك سؤال حول علاج معين؟ اتصل بنا"
    },
    atmosphere: {
      title: "نحن نعتني بك",
      desc: "الأهم بالنسبة لنا هو أن تشعر بالتحسن. نأخذ الوقت الكافي للاستماع إليك واحترام وتيرة علاجك.",
      points: [
        "نأخذ الوقت اللازم لك",
        "نشرح كل شيء ببساطة",
        "نحترم ونقدر ألمك",
        "نتحدث مع طبيبك المعالج"
      ],
      exp_years: "+10",
      exp_text: "سنوات من الخبرة"
    },
    cta_section: {
      title: "هل تحتاج إلى أخصائي علاج طبيعي بسرعة في طنجة؟",
      desc: "نتدخل في أقرب وقت ممكن بمجرد اتصال بسيط.",
      sub_desc: "صحتك لا تنتظر.",
      btn_call: "اتصل الآن",
      btn_whatsapp: "واتساب",
      circle_text: "7/7",
      circle_sub: "حجز المواعيد"
    },
    footer: {
      desc: "معالجك الطبيعي في منزلك بطنجة. نعتني بك بلطف واحترافية، مباشرة في بيتك.",
      intervention: "تدخل في جميع أنحاء طنجة",
      services_title: "خدمات",
      services_list: ["بعد العمليات الجراحية", "مشاكل الجهاز التنفسي", "لكبار السن", "الأمراض المزمنة"],
      contact_title: "اتصل بنا",
      whatsapp_available: "واتساب متاح",
      instagram: "تابعنا على إنستغرام",
      copyright: "© 2026 آلو مون كيني. جميع الحقوق محفوظة."
    },
    contact_page: {
      title: "اتصل بـ آلو مون كيني في طنجة",
      desc: "مرحباً بك في آلو مون كيني! نحن هنا لتقديم خدمات العلاج الطبيعي المنزلي في طنجة، والمصممة خصيصاً لاحتياجاتك وفي راحة منزلك.",
      phone: "الهاتف",
      zone: "منطقة التدخل",
      zone_desc: "طنجة والنواحي",
      hours: "أوقات العمل",
      hours_desc: "الاثنين – السبت\n9 صباحاً – 10 ليلاً",
      form_title: "أرسل لنا رسالة",
      labels: {
        name: "الاسم",
        name_ph: "اسمك الكامل",
        email: "البريد الإلكتروني",
        email_ph: "بريدك الإلكتروني",
        message: "رسالتك",
        message_ph: "كيف يمكننا مساعدتك؟",
        submit: "إرسال الرسالة",
        note: "*يرجى تحضير الوصفة الطبية إذا كانت متوفرة."
      },
      quick_response: "رد سريع",
      quick_desc: "للحصول على رعاية فورية، يفضل التواصل عبر واتساب.",
      material_note: "\"ننتقل إلى منزلك مع جميع المعدات اللازمة لجلسة العلاج الخاصة بك.\""
    },
    faq_page: {
      title: "الأسئلة الشائعة",
      desc: "نتفهم أن لديك أسئلة. إليك إجابات بسيطة وواضحة لطمأنتك. صحتك وراحة بالك هما أولويتنا.",
      cards: {
        secure: { title: "آمن 100%", desc: "ممارسون مؤهلون وبروتوكولات نظافة صارمة." },
        human: { title: "نهج إنساني", desc: "صبر واستماع ولطف لكل مريض." },
        pace: { title: "على وتيرتك", desc: "نأخذ الوقت اللازم من أجلك." }
      },
      categories: [
        {
          title: "أسئلة عامة",
          items: [
            { q: "ما هو العلاج الطبيعي المنزلي؟", a: "هي خدمة طبية حيث يأتي أخصائي العلاج الطبيعي مباشرة إلى منزلك مع جميع معداته. تستفيد من نفس الرعاية المقدمة في العيادة، ولكن في راحة منزلك، دون الحاجة للتنقل." },
            { q: "هل الخدمة موثوقة وآمنة؟", a: "بالتأكيد. نحن مهنيون صحيون مرخصون من الدولة. نحترم بصرامة البروتوكولات الطبية والنظافة لضمان سلامتك ورفاهيتك." },
            { q: "ما هي المناطق التي تغطونها؟", a: "نتدخل بشكل رئيسي في طنجة ونواحيها. إذا كان لديك شك حول عنوانك، لا تتردد في الاتصال بنا أو إرسال رسالة واتساب للتأكيد." }
          ]
        },
        {
          title: "سير العلاج",
          items: [
            { q: "كيف تجري الجلسة في المنزل؟", a: "يصل الأخصائي إلى منزلك ومعه المعدات اللازمة. تبدأ الجلسة بنقاش لفهم حالتك، تليها التمارين والعلاجات المناسبة. نأخذ الوقت الكافي لشرح كل شيء لك بهدوء." },
            { q: "كم تستغرق الجلسة؟", a: "تستغرق الجلسة عادة ما بين 30 و 45 دقيقة، حسب احتياجاتك والوصفة الطبية. نأخذ الوقت اللازم ليكون العلاج فعالاً ومريحاً." }
          ]
        },
        {
          title: "كبار السن وما بعد الجراحة",
          items: [
            { q: "هل الخدمة مناسبة لكبار السن؟", a: "نعم، هذا تخصصنا. نحن معتادون على العمل مع كبار السن. نحن صبورون، مستمعون، ونكيف حركاتنا لضمان رعاية لطيفة وآمنة تماماً." },
            { q: "لقد أجريت عملية جراحية، هل يمكنكم مساعدتي؟", a: "بكل تأكيد. إعادة التأهيل بعد الجراحة (مفصل صناعي، كسر، إلخ) ضرورية. نساعدك على استعادة حركتك تدريجياً، دون أن تضطر لتحمل تعب التنقل." }
          ]
        },
        {
          title: "المواعيد والطوارئ",
          items: [
            { q: "كيف أحجز موعداً بسرعة؟", a: "الأسهل هو الاتصال بنا عبر الهاتف أو واتساب. نرد عليك بسرعة لتحديد موعد يناسبك." },
            { q: "هل يمكنني التواصل معكم مباشرة عبر واتساب؟", a: "نعم، بالطبع! غالباً ما تكون أسرع وسيلة. يمكنك إرسال رسالة صوتية أو كتابية، وسنرد عليك في أقرب وقت ممكن." },
            { q: "ماذا أفعل في حالة الطوارئ؟", a: "إذا كان لديك ألم شديد أو انسداد مفاجئ، اتصل بنا مباشرة على خط الطوارئ (الزر الأحمر). سنبذل قصارى جهدنا للتدخل بسرعة." }
          ]
        },
        {
          title: "إداري",
          items: [
            { q: "هل الوصفة الطبية ضرورية؟", a: "من أجل متابعة طبية كاملة ورعاية مثالية، يوصى بوجود وصفة طبية من طبيبك. فهي تسمح لنا بمعرفة البروتوكول الدقيق الذي يجب اتباعه لشفائك." }
          ]
        }
      ],
      cta: {
        text: "لديك سؤال؟",
        whatsapp: "تواصل معنا عبر واتساب",
        call: "اتصال مباشر – رد سريع",
        title_final: "هل لديك أسئلة أخرى؟",
        desc_final: "لا تبق في حيرة. اتصل بنا ببساطة، نحن هنا لمساعدتك وتقديم المشورة.",
        btn_final: "تحدث إلى أخصائي العلاج الطبيعي"
      }
    }
  }
};
