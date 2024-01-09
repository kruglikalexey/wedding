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

var prevScrolled = 0
var delay = 10;
var timeout = null;
window.addEventListener('scroll', e => {
	if (Math.abs(prevScrolled - this.scrollY) > 50 || scrollY === 0) {
		clearTimeout(timeout);
		document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`)
		prevScrolled = scrollY
	} else {
		clearTimeout(timeout);
		timeout = setTimeout(function () {
			document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`)
		}, delay);
	}

})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})


