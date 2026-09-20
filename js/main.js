/* STAP 1: taalkeuze. Later breiden we deze centrale teksten per sectie uit.
   De HTML bevat Nederlands, zodat de pagina ook zonder JavaScript werkt. */
const translations = {
  nl: {
    skip: 'Naar de inhoud',
    language: 'Taalkeuze',
    description: 'Samuel Marquez Castro. Designer & Developer met een focus op UX/UI en visueel ontwerp.'
  },
  en: {
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
document.querySelectorAll('[data-language]').forEach(link => {
  if (link.dataset.language === language) link.setAttribute('aria-current', 'true');
  else link.removeAttribute('aria-current');
});
document.querySelector('.wordmark').href = `index.html?lang=${language}`;
