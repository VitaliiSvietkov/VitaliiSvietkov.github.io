import i18next from 'https://cdn.jsdelivr.net/gh/i18next/i18next/src/index.js'

i18next.init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: {
        "Introduction": "<strong>I am Vitalii Svietkov</strong>,<br /> a software developer<br /> from Kharkiv, Ukraine<br />"
      }
    },
    ru: {
      translation: {
        "Introduction": "<strong>Я Виталий Светков</strong>,<br /> разработчик программного <br /> обеспечения из Харькова, Украина<br />"
      }
    }
  }
}, function(err, t) {
  // init set content
  updateContent();
});

function updateContent() {
  document.getElementById('Introduction').innerHTML = i18next.t('Introduction');
}

function changeLng(lng) {
  i18next.changeLanguage(lng);
}

i18next.on('languageChanged', () => {
  updateContent();
});

window.i18next = i18next;
