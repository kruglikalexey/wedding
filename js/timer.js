let countdownDate = new Date("2024-06-02");
countdownDate.setHours(countdownDate.getHours() + 15)

let timerInterval;

const daysElem = document.getElementById("days"),
    hoursElem = document.getElementById("hours"),
    minutesElem = document.getElementById("minutes"),
    secondsElem = document.getElementById("seconds"),
    timer = document.getElementById("timer"),
    daysElemCaption = document.getElementById("days_caption"),
    hoursElemCaption = document.getElementById("hours_caption"),
    minutesElemCaption = document.getElementById("minutes_caption"),
    secondsElemCaption = document.getElementById("seconds_caption");

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

    daysElem.innerHTML = `${days} `;
    daysElemCaption.innerHTML = formatTime(days, ['День', 'Дня', 'Дней']);
    hoursElem.innerHTML = `${hours} `;
    hoursElemCaption.innerHTML = formatTime(hours, ['Час', 'Часа', 'Часов']);
    minutesElem.innerHTML = `${minutes} `;
    minutesElemCaption.innerHTML = formatTime(minutes, ['Минута', 'Минуты', 'Минут']);
    secondsElem.innerHTML = `${seconds} `;
    secondsElemCaption.innerHTML = formatTime(seconds, ['Секунда', 'Секунды', 'Секунд']);
};

const endCountdown = () => {
    clearInterval(timerInterval);
    timer.remove();
};

startCountdown();
timerInterval = setInterval(startCountdown, 1000);

function formatTime(n, titles) {
    return titles[n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
}
