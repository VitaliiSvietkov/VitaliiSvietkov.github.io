import i18next from 'https://cdn.jsdelivr.net/gh/i18next/i18next/src/index.js'

i18next.init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: {
        "Introduction": "<strong>I am Vitalii Svietkov</strong>,<br /> a software developer<br /> from Kharkiv, Ukraine<br />",
        "Quote": "\“Most prisons are of our own making. A man makes his own freedom, too.\” © Robin Hobb"
      }
    },
    ru: {
      translation: {
        "Introduction": "<strong>Я Виталий Светков</strong>,<br /> разработчик программного <br /> обеспечения из Харькова, Украина<br />",
        "Quote": "\“В большинстве случаев мы сами строим свою тюрьму. И так же человек создает свою свободу.\” © Робин Хобб"
      }
    }
  }
}, function(err, t) {
  // init set content
  updateContent();
});

function updateContent() {
  let arr = ["Introduction", "Quote"];
  for (let i = 0; i < arr.length; ++i)
    document.getElementById(arr[i]).innerHTML = i18next.t(arr[i]);
}

function changeLng(lng) {
  i18next.changeLanguage(lng);
}

i18next.on('languageChanged', () => {
  updateContent();
});

window.i18next = i18next;
