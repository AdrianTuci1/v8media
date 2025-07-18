import { ref, computed } from 'vue'

// Translation data
const translations = {
  en: {
    // Navbar
    becomeClient: '+ Become a client',
    
    // Hero Section
    heroTitle: 'Speed up your digital footprint.',
    heroMotto: 'We empower your business with cutting-edge web design and marketing solutions that deliver exceptional results.',
    letsTalk: "Let's talk",
    yearsExperience: 'years of experience',
    projectsCompleted: 'projects completed',
    
    // About Us
    aboutUsText: 'We are a creative digital agency passionate about transforming brands through innovative design and strategic thinking. Our team combines artistic vision with technical expertise to deliver exceptional digital experiences.',
    
    // Our Services
    ourServices: 'our services',
    webDesign: 'Web Design',
    webDesignDesc: 'Creating stunning, responsive websites that convert visitors into customers.',
    brandingIdentity: 'Branding & Identity',
    brandingIdentityDesc: 'Building memorable brand identities that resonate with your audience.',
    strategicMarketing: 'Strategic Marketing',
    strategicMarketingDesc: 'Data-driven marketing strategies that drive growth and engagement.',
    creativeDesign: 'Creative Design',
    creativeDesignDesc: 'Innovative design solutions that set your brand apart.',
    automation: 'Automations',
    
    // Data Driven
    dataDriven: 'Data Driven',
    dataDrivenTitle: `Numbers don't lie.`,
    dataDrivenRow: 'we use Data',
    dataDrivenDesc: 'Science to drive',
    dataDrivenDesc2: 'measurable results.',
    
    // Testimonials
    testimonials: 'Testimonials',
    whatOurClientsSay: 'What our clients say',
    
    // Footer
    contactUs: 'Contact Us',
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved',
    
    // Contact Form
    contactForm: 'Contact Form',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send',
    close: 'Close',
    nameRequired: 'Name is required',
    emailRequired: 'Email is required',
    messageRequired: 'Message is required',
    invalidEmail: 'Please enter a valid email',
    messageSent: 'Message sent successfully!',
    errorSending: 'Error sending message. Please try again.',
    
    // Showcase
    ourWork: 'Our Work',
    viewProject: 'View Project',
    
    // Client Types
    clientTypes: 'Client Types',
    startups: 'Startups',
    startupsDesc: 'Innovative solutions for growing businesses',
    enterprises: 'Enterprises',
    enterprisesDesc: 'Scalable solutions for large organizations',
    agencies: 'Agencies',
    agenciesDesc: 'Partnership solutions for creative agencies',

    backUp: 'Back Up',
  },
  ro: {
    // Navbar
    becomeClient: '+ Devino client',
    
    // Hero Section
    heroTitle: 'Accelerează amprenta ta digitală.',
    heroMotto: 'Îți oferim afacerea soluții de web design și marketing de ultimă generație care oferă rezultate excepționale.',
    letsTalk: 'Să vorbim',
    yearsExperience: 'ani de experiență',
    projectsCompleted: 'proiecte finalizate',
    
    // About Us
    aboutUsText: 'Suntem o agenție digitală creativă pasionată de transformarea brandurilor prin design inovativ și gândire strategică. Echipa noastră combină viziunea artistică cu expertiza tehnică pentru a livra experiențe digitale excepționale.',
    
    // Our Services
    ourServices: 'serviciile noastre',
    webDesign: 'Web Design',
    webDesignDesc: 'Crearea de site-uri web uimitoare și responsive care transformă vizitatorii în clienți.',
    brandingIdentity: 'Branding & Identitate',
    brandingIdentityDesc: 'Construirea de identități de brand memorabile care rezonează cu publicul tău.',
    strategicMarketing: 'Marketing Strategic',
    strategicMarketingDesc: 'Strategii de marketing bazate pe date care stimulează creșterea și angajarea.',
    creativeDesign: 'Design Creativ',
    creativeDesignDesc: 'Soluții de design inovatoare care îți diferențiază brandul.',
    automation: 'Automatizări',
    
    // Data Driven
    dataDriven: 'Data Driven',
    dataDrivenTitle: `Numerele nu mint.`,
    dataDrivenRow: 'folosim Stiinta',
    dataDrivenDesc: 'Datelor ca sa obtinem',
    dataDrivenDesc2: 'rezultate măsurabile.',
    
    // Testimonials
    testimonials: 'Testimoniale',
    whatOurClientsSay: 'Ce spun clienții noștri',
    
    // Footer
    contactUs: 'Contactează-ne',
    followUs: 'Urmărește-ne',
    allRightsReserved: 'Toate drepturile rezervate',
    
    // Contact Form
    contactForm: 'Formular de Contact',
    name: 'Nume',
    email: 'Email',
    message: 'Mesaj',
    send: 'Trimite',
    close: 'Închide',
    nameRequired: 'Numele este obligatoriu',
    emailRequired: 'Emailul este obligatoriu',
    messageRequired: 'Mesajul este obligatoriu',
    invalidEmail: 'Te rugăm să introduci un email valid',
    messageSent: 'Mesajul a fost trimis cu succes!',
    errorSending: 'Eroare la trimiterea mesajului. Te rugăm să încerci din nou.',
    
    // Showcase
    ourWork: 'Lucrările Noastre',
    viewProject: 'Vezi Proiectul',
    
    // Client Types
    clientTypes: 'Tipuri de Clienți',
    startups: 'Startup-uri',
    startupsDesc: 'Soluții inovatoare pentru afaceri în creștere',
    enterprises: 'Întreprinderi',
    enterprisesDesc: 'Soluții scalabile pentru organizații mari',
    agencies: 'Agenții',
    agenciesDesc: 'Soluții de parteneriat pentru agenții creative',

    backUp: 'Inapoi sus',
  }
}

// Current language state
const currentLanguage = ref('en')

// Computed translation function
const t = computed(() => {
  return (key) => {
    const lang = currentLanguage.value
    const langTranslations = translations[lang]
    
    if (!langTranslations) {
      console.warn(`Language '${lang}' not found`)
      return key
    }
    
    const translation = langTranslations[key]
    if (!translation) {
      console.warn(`Translation key '${key}' not found for language '${lang}'`)
      return key
    }
    
    return translation
  }
})

// Language switching function
const switchLanguage = (lang) => {
  if (translations[lang]) {
    currentLanguage.value = lang
    // Store in localStorage for persistence
    localStorage.setItem('v8media-language', lang)
  } else {
    console.warn(`Language '${lang}' not supported`)
  }
}

// Initialize language from localStorage
const initLanguage = () => {
  const savedLang = localStorage.getItem('v8media-language')
  if (savedLang && translations[savedLang]) {
    currentLanguage.value = savedLang
  }
}

// Available languages
const availableLanguages = computed(() => {
  return Object.keys(translations).map(lang => ({
    code: lang,
    name: lang === 'en' ? 'EN' : 'RO'
  }))
})

export function useI18n() {
  return {
    currentLanguage,
    t,
    switchLanguage,
    initLanguage,
    availableLanguages
  }
} 