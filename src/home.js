import chef from './assets/chef.png';

function renderHomepage () {
    const main = document.querySelector('main');

    const intro = document.createElement('div')
    intro.classList.add('intro');
    const heroText = document.createElement('p');
    heroText.classList.add('hero-text');
    heroText.textContent = 'Traditional Ladakhi Cuisine with a Modern Twist!';
    const samples = document.createElement('div');
    samples.classList.add('samples');
    intro.appendChild(heroText);
    intro.appendChild(samples);

    const about = document.createElement('div');
    about.classList.add('about');
    const aboutHeading = document.createElement('h2');
    aboutHeading.textContent = 'About';

    const d1 = document.createElement('div');
    const d2 = document.createElement('div');
    const p1 = document.createElement('p');
    p1.innerHTML = '<span>alchi kitchen</span> was founded by chef <chef style="font-weight: bold">Nilza Angmo</chef> in the year 2016 in the village of Alchi which is situated around 65 kilometers from Leh district of Ladakh.'
    const p2 = document.createElement('p');
    p2.innerHTML = '\tThe restaurant is unique in a way, that the kitchen is in open setting. Every order is prepared on the spot from scratch. Nilza conducts workshops and train local rural women to cook and manage the restaurant by themselves. For her incredible work, she has been awarded in the year 2020, the <a href="https://en.wikipedia.org/wiki/Nari_Shakti_Puraskar" style="font-weight: bold; color: black; text-decoration: none">Nari Shakti Puraskar</a>, which is an annual award given by the Ministry of Women and Child Development of the Government of India to individual women or to institutions that work towards the cause of women empowerment.';
    const p3 = document.createElement('p');
    p3.innerHTML = '\tShe started the restaurant with the help of a loan and with a vision to make Ladakhi Cusine and culture known to more people. What started as a one small restuarant in the remote village of Alchi, has now expanded into three more branches across Ladakh. And now she aims to turn <span>alchi kitchen</span> into a franchise across cities outside Ladakh.';
    d2.appendChild(p1);
    d2.appendChild(p2);
    d2.appendChild(p3);
    
    const chefPhoto = new Image();
    chefPhoto.src = chef;
    chefPhoto.alt ='the chef/founder of alchi kitchen';

    d1.appendChild(d2);
    d1.appendChild(chefPhoto);

    about.appendChild(aboutHeading);
    about.appendChild(d1);

    main.appendChild(intro);
    main.appendChild(about);
}

export default renderHomepage;