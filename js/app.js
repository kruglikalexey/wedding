let baseGuest = "Дорогие Гости!"
let guests = {
	"276788cc-ea6e-4a06-9135-017f6fdf1c35": "Дорогие Антон и Анастасия!"
};

window.addEventListener("load", () => {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const guest = urlParams.get('guest')

	let guestFromDict = guests[guest]
	if (guestFromDict === undefined) {
		guestElem.innerHTML = baseGuest;
	} else {
		guestElem.innerHTML = guestFromDict
	}
});


var prevScroll = 0;
window.addEventListener('scroll', e => {
	if (Math.abs(prevScroll - this.scrollY) > 100 || this.scrollY === 0) {
		document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
	}
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})


