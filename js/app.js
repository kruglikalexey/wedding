let baseGuest = "Дорогие Гости!"
let guests = {
	"276788cc-ea6e-4a06-9135-017f6fdf1c35": "Дорогие Антон и Анастасия!",
	"a6637398-ed83-4637-92b4-3aacc7a89df1": "Дорогие Никита и Екатерина!",
	"73dc9f46-63d2-4467-9f0e-52cd2ddb10aa": "Дорогие Папа, Мама и Катя!",
	"c3ef67e3-3be3-4edd-9a7d-ef19f106f7ec": "Дорогие Мама и Бабушка!",
	"535f3fdd-0180-40ba-90da-1f7c8c2adee4": "Дорогие Денис, Екатерина и Мирослава!",
	"eb7c17c3-8a58-4e73-9741-ac9e891db233": "Дорогие Дед и Бабуля!",
	"3bb251c5-ab09-48cc-b5f9-c6b6f8642a92": "Дорогие Сергей, Яна и Захар!",
	"9652320e-c30d-4ce7-9575-5a72433a2d08": "Дорогие Эдуард и Анастасия!",
	"5247cfcd-0603-41b8-b853-0d5be8839076": "Дорогие Яна и Илья!",
	"91ff2ea6-fd6b-47ff-8715-1b912b280a60": "Дорогие Артем и Ольга!",
	"0f9bec02-4e0b-44c3-8703-e02ea2f18960": "Дорогие Алексей и Алина!",
	"1805dc63-5dd6-4eba-a707-a71b21840618": "Дорогой Сергей!",
	"9f0e63c7-a8ad-4413-af05-53107f20b6d4": "Дорогая Олеся!"
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


