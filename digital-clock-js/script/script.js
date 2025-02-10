const titleText = "Digital Clock";
const digitalClockHourNumberText = "hour";
const digitalClockMinuteNumberText = "minutes";
const digitalClockSecondNumberText = "seconds";


const title = document.getElementById("title");
const dateText = document.getElementById("dateText");
const digitalClock = document.getElementById("digitalClock");
const digitalClockHourNumber = document.getElementById("digitalClockHourNumber");
const digitalClockHourTitle = document.getElementById("digitalClockHourTitle");
const digitalClockMinuteNumber = document.getElementById("digitalClockMinuteNumber");
const digitalClockMinuteTitle = document.getElementById("digitalClockMinuteTitle");
const digitalClockSecondNumber = document.getElementById("digitalClockSecondNumber");
const digitalClockSecondTitle = document.getElementById("digitalClockSecondTitle");

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

title.innerText = titleText;

const initialClock = () => {
    digitalClockHourTitle.textContent = digitalClockHourNumberText;
    digitalClockMinuteTitle.textContent = digitalClockMinuteNumberText;
    digitalClockSecondTitle.textContent = digitalClockSecondNumberText;
}

const initialDate = (date, month, year) => {
    dateText.textContent = `${date} ${month} ${year}`;
}


const updateClock = () => {
    const now = new Date();
    const day = weekday[now.getDay()]
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    initialDate(date, month, year);
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    digitalClockHourNumber.textContent = `${hours}`;
    digitalClockMinuteNumber.textContent = `${minutes}`;
    digitalClockSecondNumber.textContent = `${seconds}`;
    console.log(day + "," + month + "," + date);
}

// update the clock every second
setInterval(updateClock, 1000);

// Initial clock on load page
initialClock();
updateClock();
