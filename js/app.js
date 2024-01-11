let baseGuest = "Дорогие Гости!"
let guests = {
	"276788cc-ea6e-4a06-9135-017f6fdf1c35": "Дорогие Антон и Анастасия!",
	"a6637398-ed83-4637-92b4-3aacc7a89df1": "Дорогие Никита и Екатерина!",
	"73dc9f46-63d2-4467-9f0e-52cd2ddb10aa": "Дорогие Мама, Папа и Катя!",
	"c3ef67e3-3be3-4edd-9a7d-ef19f106f7ec": "Дорогие Мама и Бабушка!",
	"535f3fdd-0180-40ba-90da-1f7c8c2adee4": "Дорогие Денис, Екатерина и Марослава!"
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
var delay = 20;
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


