function digitalClock() {
  const myClock = document.getElementById("clockElement");
  const secondsClock = document.getElementById("secondsElement");
  const weekDayEl = document.getElementById("weekElement");
  const dayEl = document.getElementById("dayElement");
  const monthEl = document.getElementById("monthElement");

  const clock = new Date();

  const hour = clock.getHours();
  const minutes = clock.getMinutes();
  const seconds = clock.getSeconds();
  const dayOfWeek = clock.getDay();
  const dayOfMonth = clock.getDate();
  const month = clock.getMonth();

  const mothName = [
    "January",
    "February",
    "March",
    " April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonth = mothName[month];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDayOfWeek = weekdays[dayOfWeek];
  //console.log(`${hour}:${minutes}.${seconds}`);

  myClock.innerHTML = `${hour}:${minutes}`;
  secondsClock.innerHTML = `.${seconds}`;
  weekDayEl.innerHTML = `${currentDayOfWeek}`;
  dayEl.innerHTML = `${dayOfMonth}`;
  monthEl.innerHTML = `${currentMonth}`;
}
digitalClock();
setInterval(digitalClock, 1000);

const icon = document.getElementById("icon");
const hideClock = document.getElementById("Container");
const hidedayWM = document.getElementById("dayWMContainer");

icon.addEventListener("click", () => {
  document.body.classList.toggle("pomodoro");

  if (document.body.classList.contains("pomodoro")) {
    icon.className = "fa-solid fa-clock";
    hideClock.className = "hidden";
  } else {
    icon.className = "fa-solid fa-stopwatch";
    hideClock.className = "view";
  }
});

/*
hideClock.addEventListener("click", () => {
  document.body.classList.toggle('hidden');
  if (document.body.classList.contains("pomodoro")) {
    icon.className = "fa-solid fa-clock";
  } else {
    icon.className = "fa-solid fa-stopwatch";
  }
});
*/
