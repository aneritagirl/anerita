<script>
(function () {
  i18next
    .use(i18nextHttpBackend)
    .use(i18nextBrowserLanguageDetector)
    .init({
      fallbackLng: 'en',
      backend: { loadPath: '/locales/{{lng}}/site.json' },
      returnEmptyString: false,
      interpolation: { escapeValue: false }
    }, applyI18n);

  function applyI18n() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = i18next.t(key);
      // fall back: show nothing rather than the raw key
      el.innerHTML = (val === key) ? '' : val;
    });

    // set picker to current language
    const pick = document.getElementById('lang');
    if (pick) {
      pick.value = i18next.language?.split('-')[0] || 'en';
      pick.onchange = () => {
        i18next.changeLanguage(pick.value).then(applyI18n);
      };
    }
  }
})();
</script>
