const fs = require('fs');

function formatTime(date) {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

function formatTimeAMPM(date) {
  let hours = date.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds} ${ampm}`;
}

function updateClock() {
  const now = new Date();

  const currentTime = formatTime(now);
  const currentTimeAMPM = formatTimeAMPM(now);

  console.log(`Current Time (24-hour format): ${currentTime}`);
  console.log(`Current Time (12-hour format): ${currentTimeAMPM}`);
}

function startClock() {
  updateClock(); 

  setInterval(() => {
    updateClock();
  }, 1000); 
}
startClock();
