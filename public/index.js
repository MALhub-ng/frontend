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


const paymentHandler = document.getElementById("payment");
const courseHandler = document.getElementById("course");
const certificateHandler = document.getElementById("certificate");
const paymentFaqs = document.getElementById("payments-faqs");
const courseFaqs = document.getElementById("course-faqs");
const certificateFaqs = document.getElementById("certificate-faqs");


courseHandler.addEventListener("click", () => {
	courseFaqs.style.display = "block";
	paymentFaqs.style.display = "none";
	certificateFaqs.style.display = "none";
	courseHandler.className = "btn btn-primary";
	paymentHandler.className = "btn btn-outline-primary";
	certificateHandler.className = "btn btn-outline-primary";
});
paymentHandler.addEventListener("click", () => {
	paymentFaqs.style.display = "block";
	courseFaqs.style.display = "none";
	certificateFaqs.style.display = "none";
	paymentHandler.className = "btn btn-primary";
	courseHandler.className = "btn btn-outline-primary";
	certificateHandler.className = "btn btn-outline-primary";
});
certificateHandler.addEventListener("click", () => {
	certificateFaqs.style.display = "block";
	paymentFaqs.style.display = "none";
	courseFaqs.style.display = "none";
	certificateHandler.className = "btn btn-primary";
	paymentHandler.className = "btn btn-outline-primary";
	courseHandler.className = "btn btn-outline-primary";
});