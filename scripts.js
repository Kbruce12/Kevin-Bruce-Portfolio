const overLay = document.querySelector('.overlay');
const navEl = document.querySelectorAll('.sticky ul li');
const homeEl = document.querySelector('.home');
const aboutEl = document.querySelector('.aboutNav');
const projectsEl = document.querySelector('.projectsNav');
const newsEl = document.querySelector('.newsNav');
const contactEl = document.querySelector('.contactNav');
const homePage = document.querySelector('.creator-heading');
const aboutPage = document.querySelector('.about');
const projectPage = document.querySelector('.projects');
const newsPage = document.querySelector('.news');
const contactPage = document.querySelector('.get-in-touch');
const inTouchEl = document.querySelector('.button');
const ulEl = document.querySelector('ul');
const darkMode = document.querySelector('.active-darkmode');
const bodyEl = document.querySelector('body');
const hamburgerEl = document.querySelector('.hamburger');
const slideNavEl = document.querySelector('.slide-out-nav');
const closeEl = document.querySelector('.close-button');
const slideOutli = document.querySelectorAll('.slide-out-nav ul li');
console.log(slideOutli);



navEl.forEach(list_item => {
    list_item.addEventListener('mouseover', () =>{
        overLay.classList.add('active')
        let position = list_item.getBoundingClientRect();
        overLay.style.left = position.x + 'px';
        overLay.style.top = position.y + 'px';
        overLay.style.width = position.width + 'px';
        
    })
    list_item.addEventListener('mouseout', () =>{
        overLay.classList.remove('active')
    })
    if(overLay.classList.remove('active')){
        list_item.style.color = "#f6fbff;"
    }
});



darkMode.addEventListener('click', function(){
    bodyEl.classList.toggle('darkMode');
});

hamburgerEl.addEventListener('click', function(){
    slideNavEl.style.top = "0";
    slideNavEl.style.right = "0";
});
closeEl.addEventListener('click', function(){
    slideNavEl.style.top = "0";
    slideNavEl.style.right = "10000px";
});

slideOutli.forEach(list_item => {
    list_item.addEventListener('click', function(){
        slideNavEl.style.top = "0";
        slideNavEl.style.right = "100000px";
    })
})



