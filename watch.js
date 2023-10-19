let startTime;
let intervalId;
let running = false;

const display = document.getElementById("display");
const startStopButton = document.getElementById("startStop");
const resetButton = document.getElementById("reset");

startStopButton.addEventListener("click", startStop);
resetButton.addEventListener("click", reset);

function startStop() {
  if (running) {
    clearInterval(intervalId);
    startStopButton.innerText = "Start";
  } else {
    startTime = startTime || Date.now();
    intervalId = setInterval(updateDisplay, 10);
    startStopButton.innerText = "Stop";
  }
  running = !running;
}

function updateDisplay() {
  const currentTime = Date.now();
  const elapsedTime = currentTime - startTime;
  display.innerText = formatTime(elapsedTime);
}

function formatTime(ms) {
  const date = new Date(ms);
  return date.toISOString().substr(11, 8);
}

function reset() {
  clearInterval(intervalId);
  running = false;
  startStopButton.innerText = "Start";
  display.innerText = "00:00:00";
  startTime = null;
}
