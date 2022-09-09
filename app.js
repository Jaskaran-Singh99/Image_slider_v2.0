const hamburger = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.hamburger-menu')
const navbar = document.querySelector('.navbar');
const navMenu = document.querySelector('.navMenu');
const navItem = document.querySelectorAll('.navItem');

var istrue = false;

hamburgerMenu.addEventListener('click', ()=>{
    if(!istrue){
        hamburger.classList.add('open')
        navbar.classList.add('open');
        navMenu.classList.add('open')
        navItem.forEach(items => items.classList.add('open'))
        istrue = true;
    }
    else{
        hamburger.classList.remove('open');
        navbar.classList.remove('open');
        navMenu.classList.remove('open')
        navItem.forEach(items => items.classList.remove('open'))
        istrue = false;
    }
})


// image slider

const firstImage = document.getElementById('input-1');
const secondImage = document.getElementById('input-2');
const thirdImage = document.getElementById('input-3');

setInterval(ImageSlider , 1000);

function ImageSlider(){
    const time = new Date();

    const seconds = time.getSeconds();

    if(seconds == 10){
        firstImage.checked = true
    } 
    if(seconds == 30){
        secondImage.checked = true
    } 
    if(seconds == 50){
        thirdImage.checked = true
    } 
 
}