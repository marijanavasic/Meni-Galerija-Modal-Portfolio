// MENU
let btn = document.querySelector('.header button');

const mobileMenu = () => {
    let menu = document.querySelector('.header ul');
        if(btn.innerText === 'MENU'){
        menu.style.display = 'block';
        btn.innerText = 'CLOSE';
    }else{
        menu.style.display = 'none';
        btn.innerText = 'MENU';
    }
}
btn.addEventListener('click', mobileMenu);


//GALERIJA
let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img');

let imgNum = 0;

//Klikom na rightBtn desnu strelicu pomeramo slike u desno
const moveRight = () => {
    displayNone();
    imgNum++;
     //Kada dodje do trece slike ili koliko vec ima, treba da se vrati na prvu tj imgNum = 0
    if(imgNum === pictures.length){
        imgNum = 0;
    }

    pictures[imgNum].style.display = 'block';
 
}

//Klikom na leftBtn levu strelicu pomeramo slike u levo
const moveLeft = () => {
    displayNone();
    imgNum--;
    if(imgNum === -1){
        //pictures.length - 1(3 slike -1 = slika sa indeksom 2 a to je poslednja slika u ovom nizu)
        imgNum = pictures.length - 1;
    }
    pictures[imgNum].style.display = 'block';
}

rightBtn.addEventListener('click', moveRight);
leftBtn.addEventListener('click', moveLeft);

//Ova funkcija ce da sakrije sve slike
const displayNone = () => {
    pictures.forEach((img) => {
        img.style.display = 'none';
    });
}



// PORTFOLIO
let categoryBtn = document.querySelectorAll('.portfolio-categories button');
for (let i = 0; i < categoryBtn.length; i++) {
    categoryBtn[i].addEventListener('click', function () {
        let category = categoryBtn[i].getAttribute('data-category');
        // console.log(category);
        let portfolioItems = document.querySelectorAll('.portfolio-single-item');

        //Sakriva  sve item-e
        portfolioItems.forEach((item) => {
            item.style.display = 'none';
        });

        if(category === 'sve'){
            portfolioItems.forEach((item) => {
                item.style.display = 'block';
            });
        }

        //Prikaz po kategorijama
        portfolioItems.forEach((item) => {
            if (item.getAttribute('data-category').includes(category)) {
                item.style.display = 'block';
            }
        });
    });
}

// OTVORI MODAL
let openModalBtn = document.querySelectorAll('.open-modal');

for (let i = 0; i < openModalBtn.length; i++) {
    openModalBtn[i].addEventListener('click', function () {

        let openModal = document.querySelectorAll('.popup-modal');
        openModal[i].style.display = 'block';

        let overlay = document.querySelector('.overlay');
        overlay.style.display = 'block';
    });
}


// ZATVORI MODAL
let closeModalBtn = document.querySelectorAll('.close-modal');

for (let i = 0; i < closeModalBtn.length; i++) {
    closeModalBtn[i].addEventListener('click', function () {

        let closeModal = document.querySelectorAll('.popup-modal');
        closeModal[i].style.display = 'none';

        let overlay = document.querySelector('.overlay');
        overlay.style.display = 'none';
    });
}







