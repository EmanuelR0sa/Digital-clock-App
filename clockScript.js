function digitalClock() {
  const myClock = document.getElementById("clockElement");
  const weekDays = document.getElementById("weekElement");
  const clock = new Date();

  const hour = clock.getHours();
  const minutes = clock.getMinutes();
  const seconds = clock.getSeconds();
  const week = clock.getDay().toLocaleString("default");

  //console.log(`${hour}:${minutes}.${seconds}`);

  myClock.innerHTML = `${hour}:${minutes}:${seconds}`;
  weekDays.innerHTML = `${week}`;
}
digitalClock();
setInterval(digitalClock, 1000);
