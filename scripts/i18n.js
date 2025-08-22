(function () {
  i18next
    .use(i18nextHttpBackend)
    .use(i18nextBrowserLanguageDetector)
    .init({
      fallbackLng: 'en',
      supportedLngs: ['en','es','fr','de','it','pt','ro','ar','hi','zh'],
      backend: { loadPath: '/locales/{{lng}}/site.json' },
      detection: { order: ['querystring','localStorage','navigator'], caches: ['localStorage'], lookupQuerystring: 'lang' },
      interpolation: { escapeValue: false }
    }).then(applyTranslations);

  function applyTranslations() {
    const lng = i18next.resolvedLanguage || 'en';
    document.documentElement.setAttribute('lang', lng);
    document.documentElement.setAttribute('dir', ['ar'].includes(lng) ? 'rtl' : 'ltr');

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = i18next.t(key);
      if (key.endsWith('_html')) el.innerHTML = val; else el.textContent = val;
    });

    const picker = document.getElementById('lang');
    if (picker) picker.value = lng;
  }

  document.addEventListener('change', (e) => {
    if (e.target && e.target.id === 'lang') {
      const lng = e.target.value;
      i18next.changeLanguage(lng).then(applyTranslations);
      try { localStorage.setItem('i18nextLng', lng); } catch(e){}
    }
  });
})();
