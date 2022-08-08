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




navEl.forEach(list_item => {
    list_item.addEventListener('mouseover', () =>{
        overLay.classList.add('active')
        let position = list_item.getBoundingClientRect();
        overLay.style.left = position.x + 'px';
        overLay.style.top = position.y + 'px';
        overLay.style.height = position.height + 'px';
        overLay.style.width = position.width + 'px';

    })
    list_item.addEventListener('mouseout', () =>{
        overLay.classList.remove('active')
    })
})

homeEl.addEventListener('click', () => {
    homePage.style.visibility = 'visible';
    aboutPage.style.visibility = 'hidden';
    projectPage.style.visibility = 'hidden';
    newsPage.style.visibility = 'hidden';
    contactPage.style.visibility = 'hidden';
})
aboutEl.addEventListener('click', () => {
    homePage.style.visibility = 'hidden';
    aboutPage.style.visibility = 'visible';
    projectPage.style.visibility = 'hidden';
    newsPage.style.visibility = 'hidden';
    contactPage.style.visibility = 'hidden';
})
projectsEl.addEventListener('click', () => {
    homePage.style.visibility = 'hidden';
    aboutPage.style.visibility = 'hidden';
    projectPage.style.visibility = 'visible';
    newsPage.style.visibility = 'hidden';
    contactPage.style.visibility = 'hidden';
})
newsEl.addEventListener('click', () => {
    homePage.style.visibility = 'hidden';
    aboutPage.style.visibility = 'hidden';
    projectPage.style.visibility = 'hidden';
    newsPage.style.visibility = 'visible';
    contactPage.style.visibility = 'hidden';
})
contactEl.addEventListener('click', () => {
    homePage.style.visibility = 'hidden';
    aboutPage.style.visibility = 'hidden';
    projectPage.style.visibility = 'hidden';
    newsPage.style.visibility = 'hidden';
    contactPage.style.visibility = 'visible';
})

inTouchEl.addEventListener('click', () => {
    homePage.style.visibility = 'hidden';
    aboutPage.style.visibility = 'hidden';
    projectPage.style.visibility = 'hidden';
    newsPage.style.visibility = 'hidden';
    contactPage.style.visibility = 'visible';
})


