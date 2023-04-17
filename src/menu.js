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
        'Khambir is the sourdough bread of Ladakh. The chef has given a modern twist to it in the way of providing it in stuffed form where both veg and non-veg stuffing are available',
        '../src/assets/khambir.jpg'
    );

    const paba = createMenuCard(
        'Paba and Tangtur',
        'Paba is made from roasted barley. Tangtur is made with either curd or buttermilk in which herbs like coriander, chives, etc are added.',
        '../src/assets/paba.png'
    );

    const chutagi = createMenuCard(
        'Chutagi',
        'It is the Ladakhi Pasta made with wheat in the shape of bowties. It comes in both vegetarian and non-vegetarian variants. It is a highly nutritiuos food eaten by Ladakhis throughout the year.',
        '../src/assets/chutagi.png'
    );

    const buckwheatCrepe = createMenuCard(
        'Buckwheat Crepe',
        'Buckwheat is considered a super food. Crepe made from it highly delicious when eaten with a fresh homemade apricot jam with a cup of refreshing tea',
        '../src/assets/buckwheat_crepe.png'
    );

    const apricotJam = createMenuCard(
        'Apricot Jam',
        'Apricots are found throughout Ladakh. The white kernel apricot is very sweet, delicious, and healthy. The jam can be made at home with freshly picked apricots. We can eat it with any bread',
        '../src/assets/apricot_jam.jpg'
    );

    menus.appendChild(khambir);
    menus.appendChild(paba);
    menus.appendChild(chutagi);
    menus.appendChild(buckwheatCrepe);
    menus.appendChild(apricotJam);
    
    main.appendChild(menus);

    document.body.appendChild(main);
} 

export default renderMenupage;