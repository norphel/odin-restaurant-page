import apricotJamPhoto from './assets/apricot_jam.png';
import buckwheatCrepePhoto from './assets/buckwheat_crepe.png';
import chutagiPhoto from './assets/chutagi.png';
import khambirPhoto from './assets/khambir.png';
import pabaPhoto from './assets/paba.png';
import tashiTagyeTeaPhoto from './assets/tashiTagyeTea.png';
import thukpaPhoto from './assets/thukpa.png';


function createMenuCard(itemName, description, itemPhoto) {
    const card = document.createElement('div');
    card.classList.add('card');

    const title = document.createElement('h3');
    title.textContent = itemName;

    const about = document.createElement('div');
    about.classList.add('description');
    about.textContent = description;

    const photo = document.createElement('div');
    photo.classList.add('item-photo');
    photo.style.backgroundImage = `url('${itemPhoto}')`;

    card.appendChild(title);
    card.appendChild(about);
    card.appendChild(photo);

    return card;
}

function renderMenupage () {
    const main = document.querySelector('main');
    
    const menus = document.createElement('div');
    menus.classList.add('menus');

    const khambir = createMenuCard(
        'Khambir',
        'Khambir is the sourdough bread of Ladakh. Start your day with a khambir stuffed with egg-potato salad topped with peri-peri which adds some zing to the dish. Many other stuffing variations are also available in our menu.',
        khambirPhoto
    );

    const paba = createMenuCard(
        'Paba and Tangtur',
        'Paba is usually made from roasted barley but multi-grain variations also exist. The flour grinded with water mill preserves the taste and nutrition. Tangtur is basically curd or buttermilk mixed with herbs like coriander, chives, etc.',
        pabaPhoto
    );

    const chutagi = createMenuCard(
        'Chutagi',
        'Also known as Ladakhi pasta, small bowtie shape pasta is cooked in a stew of various vegetables, mutton, etc. In order to preserve its nutritional value, the pasta is made with wholegrain wheat instead of refined flour.',
        chutagiPhoto
    );

    const buckwheatCrepe = createMenuCard(
        'Buckwheat Crepe',
        'Buckwheat is considered a superfood. A sumptuous breakfast of buckwheat crepe, oats chia yogurt, red juicy apples, and walnuts is the perfect way to start your day.',
        buckwheatCrepePhoto
    );

    const apricotJam = createMenuCard(
        'Apricot Jam',
        'Apricots are found throughout Ladakh. Get some fresh apricots and make your own jam at home with some cinnamon and mint and enjoy with any bread.',
        apricotJamPhoto
    );

    const tashiTagyeTea = createMenuCard(
        'Tashi Tagye Tea',
        '"Tashi Tagye" means eight auspicious symbols. This tea is made with 8 aromatic and healthy spices and herbs which not only refreshes you but also keeps you healthy.',
        tashiTagyeTeaPhoto
    );

    const thukpa = createMenuCard(
        'Thukpa',
        'Thukpa is a kind of soup/stew usually eaten during cold winter nights. A combination of noodles, vegetables, Ladakhi sun-dried cheese called "churpe", etc. makes it a highly tasty and healthy food.',
        thukpaPhoto
    )

    menus.appendChild(khambir);
    menus.appendChild(paba);
    menus.appendChild(chutagi);
    menus.appendChild(buckwheatCrepe);
    menus.appendChild(apricotJam);
    menus.appendChild(tashiTagyeTea);
    menus.appendChild(thukpa);
    
    main.appendChild(menus);

    document.body.appendChild(main);
} 

export default renderMenupage;