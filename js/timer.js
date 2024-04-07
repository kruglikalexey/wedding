let countdownDate = new Date("2024-06-02");
countdownDate.setHours(countdownDate.getHours() + 15)
countdownDate.setMinutes(countdownDate.getMinutes() + 30)

let timerInterval;

const daysElem = document.getElementById("days"),
    hoursElem = document.getElementById("hours"),
    minutesElem = document.getElementById("minutes"),
    secondsElem = document.getElementById("seconds"),
    timer = document.getElementById("timer");

const guestElem = document.getElementById("guest")
const transferElem = document.getElementById("transfer_text")
const transferTimeElem = document.getElementById("transfer_time")

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

    if (days > 9) {
        daysElem.innerHTML = `${days} `;
    } else {
        daysElem.innerHTML = `0${days} `;
    }
    // daysElemCaption.innerHTML = formatTime(days, ['День', 'Дня', 'Дней']);

    if (hours > 9) {
        hoursElem.innerHTML = `${hours} `;
    } else {
        hoursElem.innerHTML = `0${hours} `;
    }
    // hoursElemCaption.innerHTML = formatTime(hours, ['Час', 'Часа', 'Часов']);

    if (minutes > 9) {
        minutesElem.innerHTML = `${minutes} `;
    } else {
        minutesElem.innerHTML = `0${minutes} `;
    }
    // minutesElemCaption.innerHTML = formatTime(minutes, ['Минута', 'Минуты', 'Минут']);

    if (seconds > 9) {
        secondsElem.innerHTML = `${seconds} `;
    } else {
        secondsElem.innerHTML = `0${seconds} `;
    }
    // secondsElemCaption.innerHTML = formatTime(seconds, ['Секунда', 'Секунды', 'Секунд']);
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
