/* STAP 1 T/M 3: centrale taalkeuze en subtiele binnenkomst van de secties.
   De HTML bevat Nederlands, zodat de pagina ook zonder JavaScript werkt. */
const translations = {
  nl: {
    introLabel: 'Aangenaam, ik ben Samuel.',
    introTitle: 'Een oog voor design. Aandacht voor de ervaring.',
    introCopy: 'Ik ontwerp digitale ervaringen en visuele identiteiten. Met UX/UI als focus en oog voor de details die het verschil maken.',
    selectedWork: 'Geselecteerd werk',
    lumiereTagline: 'Een avond film begint hier.',
    lumiereAlt: 'Het Lumière-homescherm met filmaanbod, zoekfunctie en navigatie.',
    lumiereDescription: 'Van een film ontdekken tot een avond plannen. Een cinema-app voor tickets, filmaanbod en persoonlijke voorkeuren.',
    schoolProject: 'Schoolopdracht',
    lumiereProcess: 'Onderzoek, user flows, wireframes en een interactief prototype.',
    viewDesign: 'Bekijk het ontwerp',
    burberryJacketAlt: 'Trenchcoat met het ontworpen Burberry-label.',
    burberryKnitAlt: 'Zwarte trui met het Burberry-woordmerk en monogram.',
    personalProject: 'Persoonlijk project',
    burberryProcess: 'Merkonderzoek, identiteit, logo-exploratie en toepassingen.',
    burberryDescription: 'Een rustigere, moderne identiteit die het Britse erfgoed herkenbaar houdt.',
    viewConcept: 'Bekijk het concept',
    skip: 'Naar de inhoud',
    language: 'Taalkeuze',
    description: 'Samuel Marquez Castro. Designer & Developer met een focus op UX/UI en visueel ontwerp.'
  },
  en: {
    introLabel: 'Hello, I’m Samuel.',
    introTitle: 'An eye for design. A feel for the experience.',
    introCopy: 'I design digital experiences and visual identities. Focused on UX/UI, with an eye for the details that make a difference.',
    selectedWork: 'Selected work',
    lumiereTagline: 'A night at the movies starts here.',
    lumiereAlt: 'The Lumière home screen with film listings, search and navigation.',
    lumiereDescription: 'From discovering a film to planning a night out. A cinema app for tickets, film listings and personal preferences.',
    schoolProject: 'School project',
    lumiereProcess: 'Research, user flows, wireframes and an interactive prototype.',
    viewDesign: 'View the design',
    burberryJacketAlt: 'Trench coat with the redesigned Burberry label.',
    burberryKnitAlt: 'Black knit with the Burberry wordmark and monogram.',
    personalProject: 'Personal project',
    burberryProcess: 'Brand research, identity, logo exploration and applications.',
    burberryDescription: 'A calmer, modern identity that keeps its British heritage recognisable.',
    viewConcept: 'View the concept',
    skip: 'Skip to content',
    language: 'Language',
    description: 'Samuel Marquez Castro. Designer & Developer focused on UX/UI and visual design.'
  }
};

const language = new URLSearchParams(window.location.search).get('lang') === 'en' ? 'en' : 'nl';
const content = translations[language];

document.documentElement.lang = language;
document.querySelector('meta[name="description"]').content = content.description;
document.querySelector('.language-switch').setAttribute('aria-label', content.language);

document.querySelectorAll('[data-i18n]').forEach(element => {
  element.textContent = content[element.dataset.i18n];
});
document.querySelectorAll('[data-i18n-alt]').forEach(image => {
  image.alt = content[image.dataset.i18nAlt];
});
document.querySelectorAll('[data-language]').forEach(link => {
  if (link.dataset.language === language) link.setAttribute('aria-current', 'true');
  else link.removeAttribute('aria-current');
});
document.querySelector('.wordmark').href = `index.html?lang=${language}`;

// Observeer secties één keer, zonder continue scroll-handler of verborgen inhoud.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      if (!reducedMotion.matches) entry.target.classList.add('is-revealed');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.introduction, .project-stage, .project-context').forEach(section => observer.observe(section));
}
