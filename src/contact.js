import fbIcon from './assets/icons8-facebook.svg';
import igIcon from './assets/icons8-instagram.svg'

function renderContactpage () {
    const main = document.querySelector('main');

    const loc = document.createElement('div');
    loc.classList.add('location');
    const map = document.createElement('iframe');
    map.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16275.773166395207!2d77.16642948187675!3d34.22579494694893!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38fd0a8cec431e63%3A0xc12ab3b28df5db91!2sAlchi%20Kitchen!5e0!3m2!1sen!2sin!4v1681966864754!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade');
    loc.appendChild(map);

    const links = document.createElement('div');
    links.classList.add('links');
    const fbLink = document.createElement('a');
    fbLink.setAttribute('target', '_blank');
    fbLink.setAttribute('href', 'https://www.facebook.com/Alchi.Kitchen/');
    const fb = new Image();
    fb.src = fbIcon;
    fbLink.appendChild(fb);

    const igLink = document.createElement('a');
    igLink.setAttribute('target', '_blank');
    igLink.setAttribute('href', 'https://www.instagram.com/alchikitchen/?hl=en');
    const ig = new Image();
    ig.src = igIcon;
    igLink.appendChild(ig);

    links.appendChild(fbLink);
    links.appendChild(igLink);

    main.appendChild(loc);
    main.appendChild(links);
}

export default renderContactpage;