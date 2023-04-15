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
    p1.innerHTML = '<span>alchi kitchen</span> was founded by chef <chef style="font-weight: bold">Nilza Angmo</chef> in the year 2016 in the village of Alchi which is situated around 60 kilometers from Leh district of Ladakh.'
    d2.appendChild(p1);
    
    const chefPhoto = document.createElement('img');
    chefPhoto.setAttribute('src', '../src/assets/chef.png');
    chefPhoto.setAttribute('alt', 'the chef/founder of alchi kitchen');

    d1.appendChild(d2);
    d1.appendChild(chefPhoto);

    about.appendChild(aboutHeading);
    about.appendChild(d1);

    main.appendChild(intro);
    main.appendChild(about);
}

export default renderHomepage;