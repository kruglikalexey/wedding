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

// window.addEventListener('scrollend', e => {
// 	console.log("scrollend")
// 	console.log(scrollY)
// 	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`)
// })

var prevScrolled = new Date().getTime();
window.onscroll = function() {
	console.log(prevScrolled)
	console.log(new Date().getTime())
	if ((new Date().getTime() - prevScrolled) > 50 || this.scrollY === 0) {
		// var scrolled = window.pageYOffset || document.documentElement.scrollTop;
		document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`)
		prevScrolled = new Date().getTime();
		// console.log(scrollY)
	}
}

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})


