import renderHomepage from './home.js';
// import renderMenupage from './menu.js';
// import renderContactpage from './contact.js';

import './styles/styles.css';
import 'normalize.css';

function createHeader () {
    const header = document.createElement('header');

    const home = document.createElement('div');
    home.classList.add('home');

    const logo = document.createElement('div');
    logo.classList.add('logo');
    const restaurantName = document.createElement('h1');
    restaurantName.textContent = 'alchi kitchen';

    home.appendChild(logo);
    home.appendChild(restaurantName);

    const nav = document.createElement('nav');
    const menu = document.createElement('h2');
    const contact = document.createElement('h2');
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';

    nav.appendChild(menu);
    nav.appendChild(contact);

    header.appendChild(home);
    header.appendChild(nav);

    return header;
}

(function () {
    document.body.appendChild(createHeader());
    const main = document.createElement('main');
    document.body.appendChild(main);
    renderHomepage();
})();