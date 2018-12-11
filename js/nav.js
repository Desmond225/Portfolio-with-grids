const navToggle = document.querySelector(".menu-button")
const nav = document.querySelector('nav')

function openNav() {
    console.log('openNav')
    document.body.classList.toggle('nav-is-open')
    
}

function closeNav() {
    console.log('closeNav')
    document.body.classList.remove('nav-is-open')
}

// navToggle.addEventListener('touchstart', openNav)
navToggle.addEventListener('click', openNav)

// nav.addEventListener('touchstart', closeNav)
nav.addEventListener('click', closeNav)
