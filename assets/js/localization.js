import i18next from 'https://cdn.jsdelivr.net/gh/i18next/i18next/src/index.js'

i18next.init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: {
        "Introduction": "<strong>I am Vitalii Svietkov</strong>,<br /> a software developer<br /> from Kharkiv, Ukraine<br />",
        "Quote": "\“Most prisons are of our own making. A man makes his own freedom, too.\” © Robin Hobb",
        "About": "I am a student of National Technical University \"Kharkiv Polytechnic Institute\" on the second year of education. I do not have any experience of working on a real project, but I have plenty of cool non-commertial works done during the study in the ucode IT academy (see \"Learn more\").\
        <br>I really like learning new things, besides I am very interesting in the GameDev sphere and some of my free time I spend studying \"Unreal Engine\".\
        <br><br>Visit my <a href=\"https://github.com/VitaliiSvietkov\" class=\"icon brands fa-github\" target=\"_blank\">Github</a> page to see all what I have worked on.",
        "C/C++": "My favourite tools for creating programs. Maybe because they were the first languages that I learned deeply - on C++/OpenGL I wrote a semester project during my first year of education at the university (\"Tetris\" game in 3D) and with C I went through a lot of troubles at the UCODE IT academy.",
        "Layout": "I am familiar with website layout tools and can create new projects or expand existing ones with no problems.",
        "JavaScript": "Advanced knowledge of this programming language gives me more tools for creating websites and improving them adding some animations and logics. As an example, this one, where you are now, can be taken. Also, I am able to use different APIs to improve the product."
      }
    },
    ru: {
      translation: {
        "Introduction": "<strong>Я Виталий Светков</strong>,<br /> разработчик программного <br /> обеспечения из Харькова, Украина<br />",
        "Quote": "\“В большинстве случаев мы сами строим свою тюрьму. И так же человек создает свою свободу.\” © Робин Хобб",
        "About": "Я учусь на втором курсе Национального технического университета \"Харьковский политехнический институт\". У меня нет опыта работы над реальными проектами, но за время обучения в ucode IT академии я сделал много крутых некоммерческих работ (см. \"Подробнее\").\
        <br>Мне действительно нравится изучать что-то новое по моей специальности, к тому же я интересуюсь сферой GameDev и часть свободного времени провожу за освоением движка \"Unreal Engine\".\
        <br><br>Посетите мою <a href=\"https://github.com/VitaliiSvietkov\" class=\"icon brands fa-github\" target=\"_blank\">Github</a> страницу чтобы ознакомиться со всем что я реализовал.",
        "C/C++": "Мои любимые инструменты для создания программ. Может быть, потому что они были первыми языками, которые я изучил углублённо - на C++/OpenGL я написал курсовой проект на первом году обучения в университете (\"Тетрис\" в 3D), а с C я преодолел много трудностей в ucode IT академии.",
        "Layout": "Я знаком с инструментами верстки веб-сайтов и могу без проблем создавать новые проекты или расширять существующие.",
        "JavaScript": "Продвинутое знание этого языка программирования дает мне больше инструментов для создания веб-сайтов и их улучшения путём добавления некоторых анимаций и логики. В качестве примера можно взять этот сайт. Кроме того, я могу использовать разные API для улучшения продукта."
      }
    }
  }
}, function(err, t) {
  // init set content
  updateContent();
});

function updateContent() {
  let arr = ["Introduction", "Quote", "About", "C/C++", "Layout", "JavaScript"];
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
