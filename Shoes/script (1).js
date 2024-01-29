let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

window.onscroll = () =>{
    searchform.classList.remove('active');
    navbar.classList.remove('active');

    if(window.scrollY > 30){
        document.querySelector('header').classList.add('header-active');
    }
    else{
        document.querySelector('header').classList.remove('header-active');
    }

}

var swiper = new Swiper(".featured-slider", {
    loop: true,
    centeredSlides: true,
    spaceBetween: 20,
    autoplay:{
        delay: 9500,
        disableOnInteraction:false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        450:{
            slidesPerView: 2,
        },
        768:{
            slidesPerView: 3,
        },
        1200:{
            slidesPerView: 4,
        },
    },
});

// let about=[
//     {
//         name:'./assets/Biriyaani.avif',
//         no:1,
//     },
//     {
//         name:'./assets/piza.avif',
//         no:1,

//     },
//     {
//         name:'./assets/thumb.jpg',
//         no:1,

//     },
// ]
// let outabout='';
// for(let i=0;i<about.length;i++){
//     outabout+=`<div class="box">
//     <img src=${about[i].name} alt="ikg">
//     <p>${about[i].no}</p>
// </div>`
// }
// document.querySelector('.about-container').innerHTML=outabout
// document.querySelector('.about-container').style.color='red'


