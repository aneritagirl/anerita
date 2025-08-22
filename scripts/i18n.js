<script>
(function () {
  // Helper: set text or HTML based on attribute
  function applyTranslation(el, value) {
    // If you want to allow HTML for this element, add data-i18n-html
    if (el.hasAttribute('data-i18n-html')) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  }

  // Render everything that has data-i18n
  function renderAll() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const fallback = el.getAttribute('data-i18n-default') || '';
      const v = i18next.t(key, { defaultValue: fallback });
      applyTranslation(el, v);
    });
  }

  // Language selector (optional)
  const picker = document.getElementById('lang');
  if (picker) {
    picker.addEventListener('change', () => {
      i18next.changeLanguage(picker.value).then(renderAll);
      document.documentElement.setAttribute('lang', picker.value);
    });
  }

  i18next
    .use(i18nextHttpBackend)
    .use(i18nextBrowserLanguageDetector)
    .init({
      fallbackLng: 'en',
      backend: { loadPath: '/locales/{{lng}}/site.json' },
      returnNull: false,            // fall back to default if null
      returnEmptyString: false,     // fall back to default if empty
    }, (err) => {
      if (err) console.error(err);
      // Sync picker with active language
      if (picker) picker.value = i18next.language?.split('-')[0] || 'en';
      renderAll();
    });

  // Re-render if language changes from elsewhere
  i18next.on('languageChanged', renderAll);
})();
</script>
