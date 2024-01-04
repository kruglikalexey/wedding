let countdownDate = new Date("2024-06-02");
countdownDate.setHours(countdownDate.getHours() + 12)

let baseGuest = "Дорогие Гости!"
let guests = {
	"276788cc-ea6e-4a06-9135-017f6fdf1c35": "Дорогие Антон и Анастасия!"
};

let timerInterval;

const daysElem = document.getElementById("days"),
	hoursElem = document.getElementById("hours"),
	minutesElem = document.getElementById("minutes"),
	secondsElem = document.getElementById("seconds"),
	timer = document.getElementById("timer");

const guestElem = document.getElementById("guest")

const startCountdown = () => {
	let now = new Date();
	now.setHours(now.getHours() + 3);
	const countdown = new Date(countdownDate);

	const difference = (countdown.getTime() - now.getTime()) / 1000;
	if (difference < 1) {
		endCountdown();
	}

	let days = Math.floor(difference / (60 * 60 * 24));
	let hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
	let minutes = Math.floor((difference % (60 * 60)) / 60);
	let seconds = Math.floor(difference % 60);

	daysElem.innerHTML = `${days} : `;
	hoursElem.innerHTML = `${hours} : `;
	minutesElem.innerHTML = `${minutes} : `;
	secondsElem.innerHTML = `${seconds}`;
};

const endCountdown = () => {
	clearInterval(timerInterval);
	timer.remove();
};

window.addEventListener("load", () => {
	startCountdown();
	timerInterval = setInterval(startCountdown, 1000);

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


window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})

function formatTime(number, titles) {
	const cases = [2, 0, 1, 1, 1, 2];
	return `${number} ${titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]]}`;
}


