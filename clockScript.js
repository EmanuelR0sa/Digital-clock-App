function digitalClock() {
  const myClock = document.getElementById("clockElement");
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

  myClock.innerHTML = `${hour}:${minutes}:${seconds}`;
  weekDayEl.innerHTML = `${currentDayOfWeek}`;
  dayEl.innerHTML = `${dayOfMonth}`;
}
digitalClock();
setInterval(digitalClock, 1000);
