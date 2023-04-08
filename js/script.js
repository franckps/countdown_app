function returnTimeToEnd(endDate) {
  console.log(endDate);
  const timeToEnd = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const actualDate = Date.now();
  const milisseconds = endDate - actualDate;
  if (milisseconds > 0) {
    const milissecondsInSecond = 1000;
    const milissecondsInMinute = 60 * milissecondsInSecond;
    const milissecondsInHour = 60 * milissecondsInMinute;
    const milissecondsInDay = 24 * milissecondsInHour;
    let rest = 0;
    const days = Math.floor(milisseconds / milissecondsInDay);
    rest = milisseconds % milissecondsInDay;
    const hours = Math.floor(rest / milissecondsInHour);
    rest = rest % milissecondsInHour;
    const minutes = Math.floor(rest / milissecondsInMinute);
    rest = rest % milissecondsInMinute;
    const seconds = Math.floor(rest / milissecondsInSecond);
    return { days, hours, minutes, seconds };
  }

  return timeToEnd;
}

function updateScreen(endDate) {
  const timeToEnd = returnTimeToEnd(endDate.getTime());
  updateScreenDays(timeToEnd.days);
  updateScreenHours(timeToEnd.hours);
  updateScreenMinutes(timeToEnd.minutes);
  updateScreenSeconds(timeToEnd.seconds);
}

function updateScreenDays(days) {
  let daysContainer = document.getElementById("days-number");
  daysContainer.innerText = days;
}

function updateScreenHours(hours) {
  let hoursContainer = document.getElementById("hours-number");
  hoursContainer.innerText = hours;
}

function updateScreenMinutes(minutes) {
  let minutesContainer = document.getElementById("minutes-number");
  minutesContainer.innerText = minutes;
}

function updateScreenSeconds(seconds) {
  secondsContainer = document.getElementById("seconds-number");
  secondsContainer.innerText = seconds;
}

function init() {
  let endDate = new Date("2024-01-19T00:00:00.000-0300");
  setInterval(() => updateScreen(endDate), 1000);
}
init();
