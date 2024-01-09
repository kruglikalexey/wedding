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
	console.log(prevScroll)
	console.log(scrollY)
	// console.log(Math.abs(prevScroll - this.scrollY))
	if (Math.abs(prevScroll - this.scrollY) > 50 || this.scrollY === 0) {
		document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
		prevScroll = scrollY
	}
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})


