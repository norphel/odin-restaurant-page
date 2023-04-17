// import createHeader from './createHeader.js';
import renderHomepage from './home.js';
import renderMenupage from './menu.js';
import renderContactpage from './contact.js';

import './styles/styles.css';
import 'normalize.css';

renderHomepage();

(function () {
    const home = document.querySelector('.home');
    const menu = document.querySelector('.menu');
    const contact = document.querySelector('.contact');
    
    home.addEventListener('click', () => {
        const main = document.querySelector('main');
        main.innerHTML = "";
        renderHomepage();
    });
    menu.addEventListener('click', () => {
        const main = document.querySelector('main');
        main.innerHTML = "";
        renderMenupage();
    });
    contact.addEventListener('click', () => {
        const main = document.querySelector('main');
        main.innerHTML = "";
        renderContactpage();
    });

})();