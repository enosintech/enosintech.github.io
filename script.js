const date = "10 June 2024";

const dayC = document.querySelector("#days");
const hourC = document.querySelector("#hours");
const minC = document.querySelector("#mins");
const secC = document.querySelector("#seconds");
const totalDays = document.querySelector("#total-days");
const totalHours = document.querySelector("#total-hours");
const totalMins = document.querySelector("#total-mins");
const totalSecs = document.querySelector("#total-seconds");

const countdownApp = () => {
    const currentDate = new Date();
    const targetDate = new Date(date);
    const totalSeconds = (targetDate - currentDate) / 1000;

    const seconds = Math.floor(totalSeconds) % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor( totalSeconds/3600) % 24;
    const days = Math.floor(totalSeconds/3600/24);

    const allSecs = Math.floor(totalSeconds);
    const allMins = Math.floor(totalSeconds/60);
    const allHours = Math.floor(allMins / 60);
    const allDays = Math.floor(allHours / 24);

    dayC.innerHTML = addZero(days);
    hourC.innerHTML = addZero(hours);
    minC.innerHTML = addZero(minutes);
    secC.innerHTML = addZero(seconds);
    totalDays.innerHTML = addZero(allDays);
    totalHours.innerHTML = addZero(allHours);
    totalMins.innerHTML = addZero(allMins);
    totalSecs.innerHTML = addZero(allSecs);
}


const addZero = (time) => {
    return time < 10 ? `0${time}` : time ;
}


countdownApp();

setInterval(countdownApp, 1000);
