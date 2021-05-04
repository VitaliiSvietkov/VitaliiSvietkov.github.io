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
        
        "JavaScript": "Advanced knowledge of this programming language gives me more tools for creating websites and improving them adding some animations and logics. As an example, this one, where you are now, can be taken. Also, I am able to use different APIs to improve the product.",

        "PHP": "PHP for me stands at the same position as C. Most of my projects during studying at the UCODE IT academy were implemented exactly on it.",

        "Databases": "Both query languages helped me to realize different projects for the UCODE IT academy including card game, uchat and usof (StackOverflow analog).",

        "Additional": "GTK3 alongside with C was used by me to create \"UCODE-uchat\" project and I can say that I really liked working with it. Of course, there can be a mess in the code, but it was my first experience and I am sure that now I can do better. SDL2 was used to create \"Space Invaders\" game.",

        "Download": "Download resume",

        "Works": "Recent works",

        "Skills": "Skills",

        "EduHeader": "Education/Courses",

        "Education": 'Currently I am studying at the\
        <a target="_blank" href="https://ucode.world/en/?utm_source=google&utm_medium=cpc&utm_campaign=Brand&utm_content=%7Bad_id%7D_%7Bposition_type%7D_%7Bdevice_type%7D&utm_term=ucode&gclid=Cj0KCQjwppSEBhCGARIsANIs4p5Uhpd89u0DVdwejsbKHk2MQKDq8wOXT8-a0dWrQLExCXxo12bGZbcaAmBhEALw_wcB">\
        UCODE IT academy</a>. Successfully finished\
        <a target="_blank" href="https://ucode.world/en/programmer-profession/?utm_source=google&utm_medium=cpc&utm_campaign=Brand&utm_content=%7Bad_id%7D_%7Bposition_type%7D_%7Bdevice_type%7D&utm_term=ucode&gclid=Cj0KCQjwppSEBhCGARIsANIs4p5Uhpd89u0DVdwejsbKHk2MQKDq8wOXT8-a0dWrQLExCXxo12bGZbcaAmBhEALw_wcB&utm_source=google&utm_medium=cpc&utm_campaign=Brand&utm_content=%7Bad_id%7D_%7Bposition_type%7D_%7Bdevice_type%7D&utm_term=ucode&gclid=Cj0KCQjwppSEBhCGARIsANIs4p5Uhpd89u0DVdwejsbKHk2MQKDq8wOXT8-a0dWrQLExCXxo12bGZbcaAmBhEALw_wcB&utm_source=google&utm_medium=cpc&utm_campaign=Brand&utm_content=%7Bad_id%7D_%7Bposition_type%7D_%7Bdevice_type%7D&utm_term=ucode&gclid=Cj0KCQjwppSEBhCGARIsANIs4p5Uhpd89u0DVdwejsbKHk2MQKDq8wOXT8-a0dWrQLExCXxo12bGZbcaAmBhEALw_wcB">\
        IoT/GameDev world</a> program (Only the first two stages - the last one was not included in my university\'s program). As a result I have a deep knowledge of C programming language and implemented my messaging app like Telegram, Viber, or WhatsApp ("uchat") with a simple game ("Space Invaders").\
        Now I am participating in the\
        <a target="_blank" href="https://ucode.world/web-full-stack-developer/?utm_source=google&utm_medium=cpc&utm_campaign=Brand&utm_content=%7Bad_id%7D_%7Bposition_type%7D_%7Bdevice_type%7D&utm_term=ucode&gclid=Cj0KCQjwppSEBhCGARIsANIs4p5Uhpd89u0DVdwejsbKHk2MQKDq8wOXT8-a0dWrQLExCXxo12bGZbcaAmBhEALw_wcB">\
        Full Stack Developer</a> program (the main track) and already developed a multiplayer browser card game in a battle variation (UCODE-CardGame).',

        "ContactHeader": "Get In Touch",

        "ContactDesc": "Drop me a line if you are interested in collaboration. I am looking forward to hearing from you!",

        "Address": "Pushkinska street<br />Kharkiv, TN 62000<br />Ukraine",

        "Design": "Design:",

        "UCODE-CardGame": "<br/>\
        <ul>\
          <li> <span class=\"scode\">PHP</span> was used to implement server part and host project.</li>\
          <li> <span class=\"scode\">JavaScript</span> helped to animate, construct and control game process.</li>\
          <li> <span class=\"scode\">MVC</span> pattern was used to construct the application structure.</li>\
          <li> <span class=\"scode\">MySql</span> was used as a database.</li>\
          <li> <span class=\"scode\">HTTP Websocket server</span> was taken from <a href=\"https://habr.com/ru/post/209864/\" target=\"_blank\">this</a> website, then improved and changed for my project's needs. (code by <a href=\"https://github.com/morozovsk/\" target=\"_blank\">Vladimir Goncharov</a>)</li>\
        </ul>\
        <h3>Rules</h3><hr>\
        <p>At the beginning of the game a coin will be tossed to determin the player's turn.<br>\
          Each user has 3 cards to begin with and at the beginning of his every turn 1 card will be added from the deck.<br>\
          Playing the card you pay for its use by your \"Infinity stones\". This is some equivalent of mana. You can play as many cards as you want while you have enough stones.<br>\
          To skip the move, click on the coin or wait 30 seconds. To surrender press on the \"cross\" image at your avatar.\
          Each card deals certain amount of damage to another card or to the enemy player. The main goal of the game is to reduce your oponent's health from 20 points to 0.\
        </p>\
        <p style=\"text-align: center;\">Please, visit <a href=\"https://github.com/VitaliiSvietkov/UCODE-CardGame\" target=\"_blank\">this</a> github page to learn more.</p>",

        "CardGamePrev": "Implementation of a multiplayer card game in a battle variation (Gwent and Hearthstone as references)",

        "UCODE-uchat": "<br/>\
        <ul>\
          <li> <span class=\"scode\">gtk3</span> library was used to create user interface.</li>\
          <li> Gtk3 sublibrary <span class=\"scode\">cairo</span> was used to draw most of pictures in the application.</li>\
          <li> <span class=\"scode\">CSS</span> was used to style gtk widgets.</li>\
          <li> <span class=\"scode\">SQLite</span> was used as a database.</li>\
          <li> <span class=\"scode\">XML</span> files were used to create a couple of widgets.</li>\
          <li> <span class=\"scode\">base64</span> algorithm is used to encrypt images before sending them via socket communication from client or server. I used the open source code by Joe DF (<a href=\"https://github.com/joedf\" target=\"_blank\">https://github.com/joedf</a>).</li>\
        </ul>\
        <h3> Implemented features</h3><hr>\
        <h4> Client part</h4><hr>\
        <ul>\
          <li>Basic authentication</li>\
          <li>Reconnection</li>\
          <li>The user can <strong>delete, edit and copy</strong> the text from the message after it is sended</li>\
          <li>Image sending</li>\
          <li>Avatar change</li>\
          <li>Search by users</li>\
          <li>Multiple themes</li>\
          <li>Localization (Ukrainian, Russian, English)</li>\
          <li>Modifying profile information</li>\
        </ul>\
        <h4> Server part</h4><hr>\
        <ul>\
          <li>Concurrency</li>\
          <li><span class=\"scode\">uchat_server</span> works as a <strong>daemon</strong></li>\
          <li>All necessary data is saved into the database</li>\
        </ul>\
        <p style=\"text-align: center;\">Please, visit <a href=\"https://github.com/VitaliiSvietkov/UCODE-uchat\" target=\"_blank\">this</a> github page to learn more.</p>",

        "UchatPrev": "A real-time messaging application for UNIX-like systems"
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
        
        "JavaScript": "Продвинутое знание этого языка программирования дает мне больше инструментов для создания веб-сайтов и их улучшения путём добавления некоторых анимаций и логики. В качестве примера можно взять этот сайт. Кроме того, я могу использовать разные API для улучшения продукта.",

        "PHP": "PHP для меня занимает такое же место как и С. Большинство моих проектов за время обучения в ucode IT академии были реализованы именно на нём.",

        "Databases": "Оба языка запросов помогли мне реализовать различные проекты для ucode IT академии, включая карточную игру, uchat и usof (аналог StackOverflow).",

        "Additional": "GTK3 в связке с С был использован мной для создания \"UCODE-uchat\" и я могу сказать что мне действительно понравилось работать с ним. Естественно, в коде может быть некий хаос, поскольку это был мой первый опыт и сейчас я уверен что теперь смогу даже лучше. На SDL2 была создана игра \"Space Invaders\".",

        "Download": "Скачать резюме",

        "Works": "Недавние работы",

        "Skills": "Навыки",

        "EduHeader": "Образование/Курсы",

        "Education": 'На данный момент я обучаюсь в\
        <a target="_blank" href="https://ucode.world/en/?utm_source=google&utm_medium=cpc&utm_campaign=Brand&utm_content=%7Bad_id%7D_%7Bposition_type%7D_%7Bdevice_type%7D&utm_term=ucode&gclid=Cj0KCQjwppSEBhCGARIsANIs4p5Uhpd89u0DVdwejsbKHk2MQKDq8wOXT8-a0dWrQLExCXxo12bGZbcaAmBhEALw_wcB">\
        UCODE IT академии</a>. Успешно завершил\
        <a target="_blank" href="https://ucode.world/en/programmer-profession/?utm_source=google&utm_medium=cpc&utm_campaign=Brand&utm_content=%7Bad_id%7D_%7Bposition_type%7D_%7Bdevice_type%7D&utm_term=ucode&gclid=Cj0KCQjwppSEBhCGARIsANIs4p5Uhpd89u0DVdwejsbKHk2MQKDq8wOXT8-a0dWrQLExCXxo12bGZbcaAmBhEALw_wcB&utm_source=google&utm_medium=cpc&utm_campaign=Brand&utm_content=%7Bad_id%7D_%7Bposition_type%7D_%7Bdevice_type%7D&utm_term=ucode&gclid=Cj0KCQjwppSEBhCGARIsANIs4p5Uhpd89u0DVdwejsbKHk2MQKDq8wOXT8-a0dWrQLExCXxo12bGZbcaAmBhEALw_wcB&utm_source=google&utm_medium=cpc&utm_campaign=Brand&utm_content=%7Bad_id%7D_%7Bposition_type%7D_%7Bdevice_type%7D&utm_term=ucode&gclid=Cj0KCQjwppSEBhCGARIsANIs4p5Uhpd89u0DVdwejsbKHk2MQKDq8wOXT8-a0dWrQLExCXxo12bGZbcaAmBhEALw_wcB">\
        IoT/GameDev world</a> программу (только первые два этапа - послейний не входил в мою университетскую программу). В результате я имею основательные знания языка программирования С, а также реализовал своё приложение для обмена сообщениями как Telegram, Viber, или WhatsApp ("uchat") на ряду с простой игрой ("Space Invaders").\
        Сейчас я учавствую в\
        <a target="_blank" href="https://ucode.world/web-full-stack-developer/?utm_source=google&utm_medium=cpc&utm_campaign=Brand&utm_content=%7Bad_id%7D_%7Bposition_type%7D_%7Bdevice_type%7D&utm_term=ucode&gclid=Cj0KCQjwppSEBhCGARIsANIs4p5Uhpd89u0DVdwejsbKHk2MQKDq8wOXT8-a0dWrQLExCXxo12bGZbcaAmBhEALw_wcB">\
        Full Stack Developer</a> программе (основной этап) и на данный момент создал многопользовательскую браузерную карточную игру в боевой вариации (UCODE-CardGame).',

        "ContactHeader": "Обратная связь",

        "ContactDesc": "Напишите мне, если вы заинтересованы в сотрудничестве. С нетерпение жду вашего письма!",

        "Address": "Улица Пушкинская<br />Харьков, TN 62000<br />Украина",

        "Design": "Дизайн:",

        "UCODE-CardGame": "<br/>\
        <ul>\
          <li> <span class=\"scode\">PHP</span> был использован для создания серверной части и хостинга проекта.</li>\
          <li> <span class=\"scode\">JavaScript</span> помог анимировать, сконструировать и контролировать игровой процесс.</li>\
          <li> <span class=\"scode\">MVC</span> паттерн был использован для конструирования структуры приложения.</li>\
          <li> <span class=\"scode\">MySql</span> послужила базой данных.</li>\
          <li> <span class=\"scode\">HTTP Websocket сервер</span> был взят с <a href=\"https://habr.com/ru/post/209864/\" target=\"_blank\">этого</a> сайта, затем изменён под нужды моего проекта. (автор кода <a href=\"https://github.com/morozovsk/\" target=\"_blank\">Vladimir Goncharov</a>)</li>\
        </ul>\
        <h3>Правила</h3><hr>\
        <p>В начале игры будет подброшена монета для определения хода игрока.<br>\
          Каждый пользователь имеет поначалу 3 карты и при наступлении каждого его хода, 1 карта будет добавлятся с колоды.<br>\
          Играя карту, вы платите за неё своими \"Камнями бесконечности\". Это эквивалент маны. Вы можете играть столько карт, сколько хотите, пока у вас есть достаточно камней.<br>\
          Для пропуска хода, кликните на монету или подождите 30 секунд. Чтобы сдаться, нажмите на картинку \"крестика\" у вашего аватара.\
          Каждая карта наносит определённое колличество урона другой карте либо самому противнику. Главная цель игры - опустить значение здоровья вашего опонента с 20 единиц до 0.\
        </p>\
        <p style=\"text-align: center;\">Пожалуйста, посетите <a href=\"https://github.com/VitaliiSvietkov/UCODE-CardGame\" target=\"_blank\">эту</a> github страницу для лучшего ознакомления.</p>",

        "CardGamePrev": "Реализация мультиплеерной карточной игры в боевой вариации (Gwent и Hearthstone взяты как референсы)",

        "UCODE-uchat": "<br/>\
        <ul>\
          <li> <span class=\"scode\">gtk3</span> библиотека была использована для создания пользовательского интерфейса.</li>\
          <li> Gtk3 зависимость <span class=\"scode\">cairo</span> помогла отобразить большинство картинок в приложении.</li>\
          <li> <span class=\"scode\">CSS</span> был использован для стилизации gtk виджетов.</li>\
          <li> <span class=\"scode\">SQLite</span> послужила базой данных.</li>\
          <li> <span class=\"scode\">XML</span> файлы были использованы для создания пары виджетов.</li>\
          <li> <span class=\"scode\">base64</span> алгоритмом шифруются картинки перед отправкой через сокеты от клиента или сервера. Я использовал код в открытом доступе от Joe DF (<a href=\"https://github.com/joedf\" target=\"_blank\">https://github.com/joedf</a>).</li>\
        </ul>\
        <h3> Реализованые особенности</h3><hr>\
        <h4> Клиентская часть</h4><hr>\
        <ul>\
          <li>Базовая авторизация</li>\
          <li>Переподключение</li>\
          <li>Пользователь может <strong>удалять, редактировать и копировать</strong> текст сообщения после его отправки</li>\
          <li>Отправка изображений</li>\
          <li>Смена аватара</li>\
          <li>Поиск по пользователям</li>\
          <li>Несколько цветовых тем</li>\
          <li>Локализация (Украинский, Русский, Английский)</li>\
          <li>Изменение информации профиля</li>\
        </ul>\
        <h4> Серверная часть</h4><hr>\
        <ul>\
          <li>Параллелизм</li>\
          <li><span class=\"scode\">uchat_server</span> работает как <strong>демонический процесс</strong></li>\
          <li>Вся необходимая информация сохраняется в базу данных</li>\
        </ul>\
        <p style=\"text-align: center;\">Пожалуйста, посетите <a href=\"https://github.com/VitaliiSvietkov/UCODE-uchat\" target=\"_blank\">эту</a> github страницу для лучшего ознакомления.</p>",

        "UchatPrev": "Приложение для обмена сообщениями в реальном времени для UNIX систем"
      }
    }
  }
}, function(err, t) {
  // init set content
  updateContent();
  window.lang = 'en';
});

function updateContent() {
  let learnMore = document.getElementById('LearnMore');
  
  if (window.lang) {

    if (window.lang === 'en') {
      if (learnMore.innerHTML === 'Learn More')
        learnMore.innerHTML = 'Подробнее';
      else
        learnMore.innerHTML = 'Скрыть';

      document.getElementById('name').placeholder = 'Имя';
      document.getElementById('email').placeholder = 'Почта';
      document.getElementById('message').placeholder = 'Сообщение';
      document.getElementById('Send').value = 'Отправить';
    }
    else {
      if (learnMore.innerHTML === 'Подробнее')
        learnMore.innerHTML = 'Learn More';
      else
        learnMore.innerHTML = 'Hide';

      document.getElementById('name').placeholder = 'Name';
      document.getElementById('email').placeholder = 'Email';
      document.getElementById('message').placeholder = 'Message';
      document.getElementById('Send').value = 'Send Message';
    }

  }

  let arr = ["Introduction", "Quote", "About", "C/C++", "Layout", "JavaScript", "PHP", "ContactDesc",
    "Databases", "Additional", "Download", "Works", "Skills", "EduHeader", "Education", "ContactHeader",
    "Address", "Design", "UCODE-CardGame", "CardGamePrev", "UCODE-uchat", "UchatPrev"];
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
