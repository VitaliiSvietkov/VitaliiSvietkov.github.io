//import i18next from './localization.js';

function displayMessage(event, message) {
    // Create and add body
    let node = document.createElement('div');
    node.className = "message";
    node.style.left = event.clientX + 15 + "px";
    node.style.top = event.clientY + 15 + "px";
    node.innerHTML = message;
    document.getElementsByTagName('body')[0].appendChild(node);
    
    // Copy to the clipboard required information
    let email_tmp_input = document.getElementById('email');
    email_tmp_input.value = "vsvietkov@gmail.com";
    email_tmp_input.select();
    document.execCommand("copy");
    email_tmp_input.value = "";
    email_tmp_input.blur();

    // Animation of fading in
    let opacity = 0.1;
    let handle_id = setInterval(() => {
        node.style.opacity = opacity;
        opacity += 0.1;
    }, 30);

    // Animation of fading out
    setTimeout(() => {
        clearInterval(handle_id);
        opacity = 0.9;
        handle_id = setInterval(() => {
            node.style.opacity = opacity;
            opacity -= 0.1;
        }, 30);

        setTimeout(() => {
            clearInterval(handle_id);
            document.getElementsByTagName('body')[0].removeChild(node);
        }, 300);
    }, 700);
}

function showDetails(event) {
    let parent = event.target.parentNode;
    let body = document.getElementsByTagName('body');

    // Create blackout element
    let blackout = document.createElement('div');
    blackout.className = 'blackout';
    body[0].appendChild(blackout);
    fadeIn(blackout);

    // Create container for the detailed information
    let container = document.createElement('div');
    container.className = 'details';

    // Add image from the preview and title
    let preview_image = document.createElement('img');
    preview_image.className = 'prewiew_image';
    preview_image.src = event.target.children[0].src;
    container.appendChild(preview_image);
    container.appendChild(parent.children[1].cloneNode(true));
    container.children[1].style.textAlign = 'center';
    container.children[1].style.marginBottom = "-20px";
    container.children[1].style.padding = "0px";
    container.appendChild(document.createElement('hr'));

    // Add detailed description
    container.appendChild(parent.children[2].cloneNode(true));
    container.children[3].style.display = "block";
    blackout.appendChild(container);

    let rect = blackout.children[0].getBoundingClientRect();
    //container.style.width = '0px';
    //container.style.height = '0px';
    blackout.onclick = (e) => {
        let x = e.clientX;
        let y = e.clientY;

        if (rect.left > x || rect.right < x || rect.top > y || rect.bottom < y) {
            fadeOut(blackout);
            setTimeout(() => {
                body[0].removeChild(blackout);
            }, 200);
        }
    }

    // Animation of appearing
    /*let end_width = rect.right - rect.left;
    let end_height = rect.bottom - rect.top;
    let start_width = 10;
    let start_height = 10;
    let w_step = end_width / 10;
    let h_step = end_height / 10;
    let handle_id = setInterval(() => {
        container.style.width = start_width + w_step + 'px';
        start_width += w_step / 2;
        container.style.height = start_height + h_step + 'px';
        start_height += h_step / 2;
    }, 10);
    setTimeout(() => {
        container.style.width = end_width + 'px';
        container.style.height = end_height + 'px';
        clearInterval(handle_id);
    }, 200);*/

    container.focus();
}

function expandAbout(event) {
    let about_div = document.getElementById('additional_about');
    // Get info about the block
    about_div.style.display = 'flex';
    let rect = about_div.getBoundingClientRect();
    about_div.style.display = 'none';

    let height = rect.bottom - rect.top;
    let step = height / 10;
    about_div.style.opacity = '0';
    event.target.parentElement.parentElement.style.marginTop = '0';
    let margin = 0;
    let handle_id = setInterval(() => {
        margin += step / 2;
        event.target.parentElement.parentElement.style.marginTop = margin + 'px';
    }, 15);

    setTimeout(() => {
        clearInterval(handle_id);
        about_div.style.display = 'flex';
        event.target.parentElement.parentElement.style.margin = '0';
        if (lang === 'en')
            event.target.innerHTML = 'Hide';
        else
            event.target.innerHTML = 'Скрыть';
        event.target.onclick = hideAbout;

        let opacity = 0;
        handle_id = setInterval(() => {
            opacity += 0.05;
            about_div.style.opacity = opacity;
            if (opacity >= 1)
                clearInterval(handle_id);
        }, 10);
    }, 301);
}

function hideAbout(event) {
    let about_div = document.getElementById('additional_about');

    let rect = about_div.getBoundingClientRect();
    let height = rect.bottom - rect.top;
    let step = height / 10;
    let margin = height;
    let opacity = 1;
    let handle_id = setInterval(() => {
        opacity -= 0.05;
        about_div.style.opacity = opacity;
        if (opacity <= 0)
            clearInterval(handle_id);
    }, 10);

    setTimeout(() => {
        clearInterval(handle_id);
        about_div.style.display = 'none';
        event.target.parentElement.parentElement.style.marginTop = margin + 'px';
        if (lang === 'en')
            event.target.innerHTML = 'Learn more';
        else 
            event.target.innerHTML = 'Подробнее';
        event.target.onclick = expandAbout;

        handle_id = setInterval(() => {
            margin -= step / 2;
            event.target.parentElement.parentElement.style.marginTop = margin + 'px';
            if (margin <= 0)
                clearInterval(handle_id);
        }, 15);
    }, 201);
}

function showLangs(event, animation) {
    if (document.getElementById('languageContainer') !== null) {
        fadeOut(document.getElementById('languageContainer'));
        setTimeout(() => {
            document.getElementsByTagName('body')[0].removeChild(document.getElementById('languageContainer'));
        }, 200);
        return;
    }
    let container = document.createElement('div');
    container.className = "languageContainer";
    container.id = 'languageContainer';
    container.style.opacity = 1;
    let rus = document.createElement('div');
    rus.className = "languageItem";
    rus.innerHTML = 'RUS';
    rus.onclick = function() { 
        i18next.changeLanguage('ru');
        window.lang = 'ru';
        fadeOut(container);
        setTimeout(() => {
            document.getElementsByTagName('body')[0].removeChild(container);
        }, 200);
    };
    let eng = document.createElement('div');
    eng.className = "languageItem";
    eng.innerHTML = 'ENG';
    eng.onclick = function() { 
        i18next.changeLanguage('en');
        window.lang = 'en';
        fadeOut(container);
        setTimeout(() => {
            document.getElementsByTagName('body')[0].removeChild(container);
        }, 200);
    };
    container.appendChild(rus);
    container.appendChild(eng);

    document.getElementsByTagName('body')[0].appendChild(container);
    container.style.left = event.clientX + 5 + 'px';
    container.style.top = event.clientY + 5 + 'px';

    animation(container);
}

function fadeIn(element) {
    let opacity = 0;
    element.style.opacity = opacity;
    let handle_id = setInterval(() => {
        if (!element) {
            clearInterval(handle_id);
            return;
        }
        opacity += 0.05;
        element.style.opacity = opacity;
        if (opacity >= 1)
            clearInterval(handle_id);
    }, 10);
}

function fadeOut(element) {
    let opacity = 1;
    element.style.opacity = opacity;
    let handle_id = setInterval(() => {
        if (!element) {
            clearInterval(handle_id);
            return;
        }
        opacity -= 0.05;
        element.style.opacity = opacity;
        if (opacity >= 1)
            clearInterval(handle_id);
    }, 10);
}