const hamburger = document.querySelector('.hamburger')
const navigation = document.querySelector('.navigation')
const logo = document.getElementsByClassName('.logo')

const ACTIVE = 'active'

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle(ACTIVE)
	navigation.classList.toggle(ACTIVE)
	logo.style('display:none')
})

AOS.init();
