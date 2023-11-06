function digitalClock() {
  const myClock = document.getElementById("clockElement");

  const clock = new Date();

  const hour = clock.getHours();
  const minutes = clock.getMinutes();
  const seconds = clock.getSeconds();

  console.log(`${hour}:${minutes}.${seconds}`);

  myClock.innerHTML = `${hour}:${minutes}:${seconds}`;
}
digitalClock();
setInterval(digitalClock, 1000);
