/**
 * Central content source for the whole site (copy, links, options).
 * All user-facing text lives here — components only render it.
 */

export const siteConfig = {
  brand: {
    initials: 'ea',
    wordmark: 'eman automation',
  },

  email: 'emanautomation1@gmail.com',

  social: {
    xHandle: '@AutomationLabb',
    xUrl: 'https://x.com/AutomationLabb',
  },

  nav: {
    links: [
      { label: 'الخدمات', href: '#services' },
      { label: 'منهجيتنا', href: '#approach' },
      { label: 'المنتجات', href: '#products' },
      { label: 'الأسئلة', href: '#faq' },
    ],
    cta: { label: 'تواصل معنا', href: '#contact' },
  },

  hero: {
    titleLine1: 'حوّل الأتمتة إلى',
    titleLine2Prefix: 'ميزتك ',
    titleAccent: 'التنافسية',
    subcopy:
      'نبني وكلاء ذكاء اصطناعي وأنظمة أتمتة واستراتيجيات توفّر لعملك أكثر من 10 ساعات أسبوعيًا — من الفكرة إلى التشغيل، نتولى كل شيء.',
    ctaPrimary: { label: 'احجز استشارة مجانية ←', href: '#contact' },
    ctaSecondary: { label: 'تصفّح خدماتنا', href: '#services' },
  },

  mockWindow: {
    title: 'eman automation — سيناريو تسجيل العملاء',
    nodes: [
      {
        tag: 'المحفّز',
        tagAccent: true,
        title: 'عميل جديد من الإعلان',
        sub: 'نموذج إنستغرام / الموقع',
      },
      {
        tag: 'الخطوة 1',
        tagAccent: false,
        title: 'تسجيل في قاعدة العملاء',
        sub: 'الاسم · المصدر · التاريخ',
      },
      {
        tag: 'الخطوة 2',
        tagAccent: false,
        title: 'رسالة ترحيب فورية',
        sub: 'واتساب خلال دقيقة',
      },
    ],
    successNote: '12 عميلًا سُجّلوا ورُحّب بهم تلقائيًا اليوم — دون أي تدخّل يدوي',
  },

  services: {
    eyebrow: 'ماذا نبني',
    title: 'حلول ذكاء اصطناعي تحقق نتائج',
    agents: {
      title: 'وكلاء ذكاء اصطناعي',
      body: 'وكلاء مستقلون يتولّون مهامك المتكررة — من استقبال العملاء إلى الرد على الاستفسارات — لتتفرغ أنت للنموّ.',
      chat: [
        { from: 'user', text: 'وصلنا 12 استفسارًا جديدًا أمس — ماذا أفعل بها؟' },
        { from: 'agent', text: 'أثرِ البيانات وأضفهم لقائمة المتابعة' },
        { from: 'user', text: 'تم — 12 جهة اتصال سُجّلت، ومسودات الردود جاهزة للمراجعة.' },
      ],
    },
    workflows: {
      title: 'أتمتة العمليات',
      body: 'تدفّقات آلية تربط أدواتك ببعضها وتوفّر أكثر من 10 ساعات أسبوعيًا — لا مزيد من الإدخال اليدوي والنسخ بين الأدوات.',
      nodes: {
        input: { label: 'استقبال طلب', color: '#4fc06a' },
        process: { label: 'معالجة وتصنيف', color: '#8b6fd4' },
        outputs: [
          { label: 'إشعار واتساب', color: '#4a9de0' },
          { label: 'تحديث الجدول', color: '#f5b944' },
        ],
      },
    },
    noCode: {
      title: 'بناء منتجات No-Code',
      body: 'نحوّل فكرتك إلى منتج رقمي يعمل — بخارطة طريق واضحة التكلفة والمدة، وبأدوات لا تحتاج فريقًا تقنيًا لصيانتها.',
      roadmapLabel: 'خارطة التنفيذ',
      roadmap: [
        { label: 'تشخيص وتصميم', weeks: 'أسبوع 1-2', progress: 100, color: '#3d9a4e' },
        { label: 'نموذج أولي', weeks: 'أسبوع 3-4', progress: 65, color: '#5cb672' },
        { label: 'إطلاق وتسليم', weeks: 'أسبوع 5-6', progress: 30, color: '#8fd1a0' },
      ],
    },
  },

  approach: {
    eyebrow: 'منهجيتنا',
    title: 'من الفكرة إلى الأثر في 4 خطوات',
    steps: [
      {
        n: '01',
        title: 'استكشاف',
        body: 'نتعرّف على عملك من الداخل — تدفّقات العمل، نقاط الألم، والأهداف — لنحدّد فرص الأتمتة الأعلى أثرًا.',
        meta: 'عادةً: 2-3 مكالمات + مراجعة غير متزامنة',
      },
      {
        n: '02',
        title: 'استراتيجية',
        body: 'نصمّم الحل المناسب بخارطة طريق واضحة: الجدول الزمني، التكلفة، والعائد المتوقع — فتعرف تمامًا ما ينتظرك.',
        meta: 'التسليم: مواصفات تقنية + نموذج العائد',
      },
      {
        n: '03',
        title: 'تنفيذ',
        body: 'نبني الحل وندمجه مع أدواتك وتدفّقاتك الحالية — دون تعطيل لعملك، فقط نتائج.',
        meta: 'عروض أسبوعية + تسليم تدريجي',
      },
      {
        n: '04',
        title: 'دعم',
        body: 'تحسين ومراقبة وتوسيع مستمر لنضمن أن أنظمتك تواصل الإنجاز مع نموّ عملك.',
        meta: 'أوقات استجابة مضمونة',
      },
    ],
  },

  products: {
    eyebrow: 'المنتجات والأسعار',
    title: 'منتجات تصنع الفرق',
    subtitle: 'أسعار واضحة، وقيمة تصلك من اليوم الأول.',
    featuredBadge: 'الأكثر طلبًا',
    items: [
      {
        id: 'shumul',
        name: 'شمول',
        tagline: 'فهرس شامل لأدوات الذكاء الاصطناعي',
        description:
          'دليل واسع ومنسّق لأدوات الذكاء الاصطناعي الخاصة بالأعمال، مصنّف بعناية ليساعدك على إيجاد الأداة المناسبة بسرعة.',
        price: 'مجاني',
        priceNote: '',
        cta: { label: 'تصفّح الدليل', href: 'https://ai-flame-xi.vercel.app/', external: true },
        featured: false,
        ctaVariant: 'dark' as const,
      },
      {
        id: 'nabta',
        name: 'نبتة',
        tagline: 'مساعد ذكي لتقييم المشاريع الناشئة',
        description:
          'مساعد مستقل يقيّم أفكار المشاريع الناشئة آليًا، يحلّل السوق والجدوى ويمنحك توصيات عملية لاتخاذ القرار بثقة.',
        price: 'نسخة تجريبية',
        priceNote: 'مجانًا الآن',
        cta: { label: 'جرّبه الآن', href: 'https://nabta-alpha.vercel.app/', external: true },
        featured: true,
        ctaVariant: 'accent' as const,
      },
      {
        id: 'consulting',
        name: 'استشارة خاصة',
        tagline: 'حلول أتمتة مصمّمة لعملك',
        description:
          'جلسة تشخيصية نحلّل فيها عملياتك، ثم نصمّم وننفّذ نظام الأتمتة المناسب — من وكلاء الذكاء الاصطناعي إلى تكاملات No-Code.',
        price: '99 ريال',
        priceNote: 'ابتداءً من',
        cta: { label: 'احجز موعدًا', href: '#contact', external: false },
        featured: false,
        ctaVariant: 'outline' as const,
      },
    ],
  },

  faq: {
    eyebrow: 'الأسئلة الشائعة',
    title: 'كل ما تريد معرفته',
    items: [
      {
        q: 'كم تستغرق أتمتة عملية واحدة؟',
        a: 'يعتمد على تعقيد العملية، لكن أغلب الأتمتات البسيطة (استقبال عملاء، تقارير دورية، متابعة رسائل) تُنجَز خلال أسبوع إلى أسبوعين من جلسة التشخيص.',
      },
      {
        q: 'هل أحتاج خبرة تقنية للاستفادة من المنتجات؟',
        a: 'لا إطلاقًا. منتجاتنا وأنظمتنا مبنية بأدوات No-Code، ونسلّمك كل شيء جاهزًا مع شرح مبسّط للاستخدام والتعديل.',
      },
      {
        q: 'ما الفرق بين «شمول» و«نبتة»؟',
        a: '«شمول» فهرس منسّق يساعدك على إيجاد أدوات الذكاء الاصطناعي المناسبة لعملك، بينما «نبتة» مساعد ذكي يقيّم فكرة مشروعك ويحلّل السوق والجدوى ويمنحك توصيات عملية.',
      },
      {
        q: 'كيف تتم الاستشارة الخاصة؟',
        a: 'نبدأ بجلسة تشخيصية عن بُعد نحلّل فيها عملياتك الحالية، ثم نقترح خطة أتمتة واضحة بالتكلفة والمدة، وننفّذها بعد موافقتك.',
      },
    ],
  },

  contact: {
    eyebrow: 'ابدأ الآن',
    title: 'لنتحدث عن مشروعك',
    subtitle: 'أخبرنا ماذا تبني، وسنريك كيف تسرّعه الأتمتة.',
    progressLabel: 'اكتمال النموذج',
    expectTitle: 'ماذا تتوقع',
    expectations: [
      'استشارة مجانية 30 دقيقة',
      'رد خلال 24 ساعة',
      'تحديد نطاق المشروع دون التزام',
      'تسعير شفاف من البداية',
    ],
    emailCardLabel: 'تفضّل البريد مباشرة؟',
    form: {
      nameLabel: 'الاسم',
      namePlaceholder: 'اسمك الكامل',
      emailLabel: 'البريد الإلكتروني',
      emailPlaceholder: 'you@company.com',
      servicesLabel: 'الخدمات التي تهمك',
      serviceOptions: ['وكلاء ذكاء اصطناعي', 'أتمتة العمليات', 'بناء منتجات No-Code', 'استشارة واستراتيجية'],
      timelineLabel: 'الإطار الزمني',
      timelineOptions: ['في أقرب وقت', 'خلال 1-3 أشهر', '3-6 أشهر', 'أستكشف الخيارات'],
      messageLabel: 'التحدي الأساسي في عملك',
      messagePlaceholder: 'ما المهمة التي تستهلك وقتك أكثر من غيرها؟',
      submitLabel: 'إرسال',
    },
    success: {
      title: 'وصلتنا رسالتك',
      body: 'سنعود إليك خلال 24 ساعة لتحديد موعد الاستشارة.',
    },
  },

  footer: {
    links: [
      { label: 'الخدمات', href: '#services', external: false },
      { label: 'المنتجات', href: '#products', external: false },
      { label: 'تواصل معنا', href: 'mailto:emanautomation1@gmail.com', external: false },
      { label: '@AutomationLabb', href: 'https://x.com/AutomationLabb', external: true, ltr: true },
    ],
    copyright: '© 2026',
  },
};

export type SiteConfig = typeof siteConfig;
