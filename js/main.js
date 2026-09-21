/* STAP 1 T/M 3: centrale taalkeuze en subtiele binnenkomst van de secties.
   De HTML bevat Nederlands, zodat de pagina ook zonder JavaScript werkt. */
const translations = {
  nl: {
    navWork: 'Werk',
    navAbout: 'Over mij',
    navContact: 'Contact',
    mainNavigation: 'Hoofdnavigatie',
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
    viewPreview: 'Bekijk preview',
    workLabel: 'Geselecteerd werk',
    workTitle: 'Werk met een duidelijk idee en een sterke uitvoering.',
    workIntro: 'Van digitale productervaringen tot visuele identiteit. Elk project toont hoe ik onderzoek, ontwerp en afwerking samenbreng.',
    projectsLabel: 'Projecten',
    openLumiere: 'Bekijk de Lumière-case study',
    viewCaseStudy: 'Bekijk de case study',
    openBurberry: 'Bekijk de Burberry-preview',
    aboutLabel: 'Over mij',
    aboutTitle: 'Ik maak om ideeën vorm te geven.',
    aboutIntro: 'Ik ben Samuel, laatstejaarsstudent Digital Experience Design. Ik gebruik design om mijn creativiteit om te zetten in ervaringen die helder, bruikbaar en visueel sterk zijn.',
    portraitAlt: 'Tijdelijke portretplaceholder voor Samuel.',
    portraitCaption: 'Portret wordt later toegevoegd.',
    directionLabel: 'Waarom design',
    directionTitle: 'Ik wilde altijd al dingen maken en ontwerpen om mijn creativiteit te gebruiken.',
    directionCopy: 'Wat mij het meeste energie geeft, is een idee effectief maken en het daarna blijven verbeteren. Door te itereren ontdek ik wat sterker, duidelijker en gebruiksvriendelijker kan.',
    processLabel: 'Hoe ik werk',
    processUnderstandTitle: 'Begrijpen',
    processUnderstandCopy: 'De context, gebruiker en belangrijkste vraag scherp krijgen.',
    processMakeTitle: 'Maken',
    processMakeCopy: 'Ideeën zichtbaar en testbaar maken in flows, wireframes en prototypes.',
    processIterateTitle: 'Itereren',
    processIterateCopy: 'Feedback gebruiken om keuzes te verfijnen en het resultaat sterker te maken.',
    servicesLabel: 'Wat ik doe',
    serviceProduct: 'Onderzoek, user flows, wireframes, prototypes en gebruikerstesten.',
    serviceVisual: 'Visuele identiteit, typografie, compositie en motion.',
    serviceFrontend: 'Responsive interfaces bouwen met HTML, CSS en JavaScript.',
    toolsLabel: 'Tools',
    contactLabel: 'Contact',
    contactTitle: 'Heb je iets in gedachten?',
    contactIntro: 'Ik sta open voor een stage, junior rol, creatieve samenwerking of een goed gesprek over design.',
    contactKicker: 'Stuur me een e-mail',
    availabilityLabel: 'Beschikbaar voor',
    availabilityCopy: 'Stages, junior mogelijkheden en creatieve projecten.',
    focusLabel: 'Focus',
    focusCopy: 'UX/UI, visueel ontwerp en digitale ervaringen.',
    backToWork: 'Terug naar werk',
    caseDeck: 'Een eenvoudiger pad van film ontdekken naar een avond plannen.',
    caseIntro: 'Een individueel appconcept voor Lumière, ontworpen om films, tickets en persoonlijke voorkeuren op een heldere manier samen te brengen.',
    openPrototype: 'Open het Figma-prototype',
    caseHeroAlt: 'Het uitgewerkte Lumière-homescherm met filmaanbod en navigatie.',
    caseHeroCaption: 'Het uiteindelijke homescherm van het appconcept.',
    caseOverviewLabel: 'Het project',
    caseOverviewTitle: 'Een app die mensen echt zouden gebruiken.',
    caseOverviewCopy: 'Voor het vak Lab kreeg ik de opdracht om individueel een app voor Lumière te ontwerpen. Omdat Lumière geen eigen app heeft, werkte ik een zelfstandig concept uit. Bezoekers zouden daarin films kunnen ontdekken, tickets kiezen en via een account voorkeuren zoals hun locatie bewaren.',
    caseContextLabel: 'Context',
    caseContextValue: 'Individuele schoolopdracht · Lab',
    caseRoleLabel: 'Rol',
    caseScopeLabel: 'Aanpak',
    caseScopeValue: 'Onderzoek, flows, wireframes, prototype en gebruikerstest',
    caseQuestionLabel: 'De ontwerpvraag',
    caseQuestionTitle: 'Hoe maak je kiezen eenvoudiger zonder de mogelijkheden te verliezen?',
    caseQuestionCopy: 'Een cinema-app moet informatie over films en planning bieden, maar de keuze voor een film mag niet overweldigend worden. Die spanning tussen mogelijkheden en overzicht bepaalde de richting van het ontwerp.',
    caseFlowLabel: 'Structuur',
    caseFlowTitle: 'Eerst de routes, dan de schermen.',
    caseFlowCopy: 'Ik bracht mogelijke stappen en functies in kaart: van een film vinden tot informatie bekijken en tickets kiezen. De flowchart toont hoe breed het concept aanvankelijk was en gaf een basis om de interface te ordenen.',
    caseFlowAria: 'Scrollbare Lumière-flowchart',
    caseFlowAlt: 'Flowchart van het appconcept met routes van de start naar home, filmaanbod, account en tickets.',
    caseFlowCaption: 'De informatiestructuur van het bredere appconcept.',
    caseEvolutionLabel: 'Uitwerking',
    caseEvolutionTitle: 'Van structuur naar een herkenbare interface.',
    caseEvolutionCopy: 'Het homescherm ontwikkelde zich van een eenvoudige indeling naar een visueel uitgewerkt ontwerp. De drie versies laten zien hoe inhoud, beeld en navigatie hun plaats kregen.',
    caseLowAlt: 'Eerste low-fidelity versie van het Lumière-homescherm.',
    caseLowLabel: 'Eerste indeling',
    caseMidAlt: 'Mid-fidelity versie waarin het beeld en de inhoud worden geplaatst.',
    caseMidLabel: 'Inhoud en hiërarchie',
    caseHighAlt: 'Uitgewerkte high-fidelity versie van het Lumière-homescherm.',
    caseHighLabel: 'Visuele uitwerking',
    caseInsightLabel: 'Gebruikertest',
    caseInsightTitle: 'Een film kiezen moet eenvoudig blijven.',
    caseInsightCopy: 'Uit de gebruikerstest kwam naar voren dat te veel opties of een druk scherm mensen kunnen verwarren wanneer ze een film kiezen. Dat inzicht maakte eenvoud en duidelijke keuzes belangrijk in de beoordeling van het ontwerp.',
    caseOutcomeLabel: 'Het resultaat',
    caseOutcomeTitle: 'Een interactief concept om verder te verkennen.',
    caseOutcomeCopy: 'Het resultaat is een uitgewerkt homescherm en een interactief Figma-prototype van het bredere appconcept. Het project leerde me om functies steeds af te wegen tegen de eenvoud van de ervaring.',
    caseNextAria: 'Verder navigeren',
    footerRole: 'Designer & Developer met een focus op UX/UI.',
    skip: 'Naar de inhoud',
    language: 'Taalkeuze',
    description: 'Samuel Marquez Castro. Designer & Developer met een focus op UX/UI en visueel ontwerp.'
  },
  en: {
    navWork: 'Work',
    navAbout: 'About',
    navContact: 'Contact',
    mainNavigation: 'Main navigation',
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
    viewPreview: 'View preview',
    workLabel: 'Selected work',
    workTitle: 'Work with a clear idea and strong execution.',
    workIntro: 'From digital product experiences to visual identity. Each project shows how I bring research, design and finish together.',
    projectsLabel: 'Projects',
    openLumiere: 'View the Lumière case study',
    viewCaseStudy: 'View the case study',
    openBurberry: 'View the Burberry preview',
    aboutLabel: 'About',
    aboutTitle: 'I make to give ideas a tangible form.',
    aboutIntro: 'I’m Samuel, a final-year Digital Experience Design student. I use design to turn my creativity into experiences that are clear, useful and visually strong.',
    portraitAlt: 'Temporary portrait placeholder for Samuel.',
    portraitCaption: 'Portrait will be added later.',
    directionLabel: 'Why design',
    directionTitle: 'I have always wanted to make and design things as a way to use my creativity.',
    directionCopy: 'What gives me the most energy is turning an idea into something real and then continuing to improve it. Iteration helps me discover what can be stronger, clearer and easier to use.',
    processLabel: 'How I work',
    processUnderstandTitle: 'Understand',
    processUnderstandCopy: 'Define the context, the user and the question that matters most.',
    processMakeTitle: 'Make',
    processMakeCopy: 'Make ideas visible and testable through flows, wireframes and prototypes.',
    processIterateTitle: 'Iterate',
    processIterateCopy: 'Use feedback to refine decisions and make the result stronger.',
    servicesLabel: 'What I do',
    serviceProduct: 'Research, user flows, wireframes, prototypes and usability testing.',
    serviceVisual: 'Visual identity, typography, composition and motion.',
    serviceFrontend: 'Building responsive interfaces with HTML, CSS and JavaScript.',
    toolsLabel: 'Tools',
    contactLabel: 'Contact',
    contactTitle: 'Have something in mind?',
    contactIntro: 'I’m open to an internship, junior role, creative collaboration or a good conversation about design.',
    contactKicker: 'Send me an email',
    availabilityLabel: 'Available for',
    availabilityCopy: 'Internships, junior opportunities and creative projects.',
    focusLabel: 'Focus',
    focusCopy: 'UX/UI, visual design and digital experiences.',
    backToWork: 'Back to work',
    caseDeck: 'A simpler path from discovering a film to planning a night out.',
    caseIntro: 'An individual app concept for Lumière, designed to bring films, tickets and personal preferences together in a clear experience.',
    openPrototype: 'Open the Figma prototype',
    caseHeroAlt: 'The finished Lumière home screen with film listings and navigation.',
    caseHeroCaption: 'The final home screen of the app concept.',
    caseOverviewLabel: 'The project',
    caseOverviewTitle: 'An app people would actually want to use.',
    caseOverviewCopy: 'For my Lab course, I was asked to design an app for Lumière independently. As Lumière does not have an app, I developed a concept of my own. Visitors could discover films, choose tickets and save preferences such as their location in an account.',
    caseContextLabel: 'Context',
    caseContextValue: 'Individual school project · Lab',
    caseRoleLabel: 'Role',
    caseScopeLabel: 'Approach',
    caseScopeValue: 'Research, flows, wireframes, prototype and usability testing',
    caseQuestionLabel: 'The design question',
    caseQuestionTitle: 'How do you make choosing easier without losing useful options?',
    caseQuestionCopy: 'A cinema app needs to offer information about films and planning, while keeping the choice of a film manageable. That balance between options and clarity guided the design.',
    caseFlowLabel: 'Structure',
    caseFlowTitle: 'Routes first, screens second.',
    caseFlowCopy: 'I mapped possible steps and functions, from finding a film to viewing details and choosing tickets. The flowchart shows the initial breadth of the concept and gave me a basis for organising the interface.',
    caseFlowAria: 'Scrollable Lumière flowchart',
    caseFlowAlt: 'Flowchart of the app concept with routes from the start to home, film listings, account and tickets.',
    caseFlowCaption: 'The information structure of the wider app concept.',
    caseEvolutionLabel: 'Design development',
    caseEvolutionTitle: 'From structure to a recognisable interface.',
    caseEvolutionCopy: 'The home screen developed from a simple layout into a finished visual design. The three versions show how content, imagery and navigation found their places.',
    caseLowAlt: 'First low-fidelity version of the Lumière home screen.',
    caseLowLabel: 'Initial layout',
    caseMidAlt: 'Mid-fidelity version with imagery and content being placed.',
    caseMidLabel: 'Content and hierarchy',
    caseHighAlt: 'Finished high-fidelity version of the Lumière home screen.',
    caseHighLabel: 'Visual design',
    caseInsightLabel: 'Usability test',
    caseInsightTitle: 'Choosing a film should stay simple.',
    caseInsightCopy: 'The usability test indicated that too many options or a busy screen can confuse people when choosing a film. This made simplicity and clear choices important when evaluating the design.',
    caseOutcomeLabel: 'The outcome',
    caseOutcomeTitle: 'An interactive concept to explore further.',
    caseOutcomeCopy: 'The outcome is a finished home screen and an interactive Figma prototype of the wider app concept. The project taught me to weigh each feature against the simplicity of the experience.',
    caseNextAria: 'Continue browsing',
    footerRole: 'Designer & Developer focused on UX/UI.',
    skip: 'Skip to content',
    language: 'Language',
    description: 'Samuel Marquez Castro. Designer & Developer focused on UX/UI and visual design.'
  }
};

const metadata = {
  nl: {
    home: ['Samuel | Designer & Developer', 'Samuel Marquez Castro. Designer & Developer met een focus op UX/UI en visueel ontwerp.'],
    work: ['Werk | Samuel Marquez Castro', 'Geselecteerd UX/UI- en branddesignwerk van Samuel Marquez Castro.'],
    about: ['Over mij | Samuel Marquez Castro', 'Over Samuel Marquez Castro, Designer & Developer met een focus op UX/UI.'],
    contact: ['Contact | Samuel Marquez Castro', 'Neem contact op met Samuel Marquez Castro voor werk, stage of een kennismaking.'],
    lumiere: ['Lumière | Samuel Marquez Castro', 'Lumière: een individueel UX/UI-appconcept van Samuel Marquez Castro voor het vak Lab.']
  },
  en: {
    home: ['Samuel | Designer & Developer', 'Samuel Marquez Castro. Designer & Developer focused on UX/UI and visual design.'],
    work: ['Work | Samuel Marquez Castro', 'Selected UX/UI and brand design work by Samuel Marquez Castro.'],
    about: ['About | Samuel Marquez Castro', 'About Samuel Marquez Castro, a Designer & Developer focused on UX/UI.'],
    contact: ['Contact | Samuel Marquez Castro', 'Contact Samuel Marquez Castro about work, an internship or an introduction.'],
    lumiere: ['Lumière | Samuel Marquez Castro', 'Lumière: an individual UX/UI app concept by Samuel Marquez Castro for his Lab course.']
  }
};

const language = new URLSearchParams(window.location.search).get('lang') === 'en' ? 'en' : 'nl';
const content = translations[language];
const page = document.body.dataset.page || 'home';

document.documentElement.lang = language;
document.title = metadata[language][page][0];
document.querySelector('meta[name="description"]').content = metadata[language][page][1];
document.querySelector('.language-switch').setAttribute('aria-label', content.language);

document.querySelectorAll('[data-i18n]').forEach(element => {
  element.textContent = content[element.dataset.i18n];
});
document.querySelectorAll('[data-i18n-alt]').forEach(image => {
  image.alt = content[image.dataset.i18nAlt];
});
document.querySelectorAll('[data-i18n-aria]').forEach(element => {
  element.setAttribute('aria-label', content[element.dataset.i18nAria]);
});
document.querySelectorAll('[data-language]').forEach(link => {
  if (link.dataset.language === language) link.setAttribute('aria-current', 'true');
  else link.removeAttribute('aria-current');
  link.href = `?lang=${link.dataset.language}${window.location.hash}`;
});
document.querySelectorAll('[data-page-link]').forEach(link => {
  const [path, hash] = link.dataset.pageLink.split('#');
  link.href = `${path}?lang=${language}${hash ? `#${hash}` : ''}`;
});
document.querySelector('.wordmark').href = `index.html?lang=${language}`;
document.querySelectorAll('[data-current-year]').forEach(element => {
  element.textContent = new Date().getFullYear();
});

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
  document.querySelectorAll('.introduction, .project-stage, .project-context, .page-hero, .work-row, .about-portrait, .about-story, .process-grid, .services-grid, .contact-panel, .contact-details, .case-overview, .case-section-heading, .case-insight').forEach(section => observer.observe(section));
}
