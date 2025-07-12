
const startDate = new Date(2022, 5, 1, 0, 0, 0);

function pad(n) {
  return n.toString().padStart(2, '0');
}

function updateTimer() {
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();
  let hours = now.getHours() - startDate.getHours();
  let minutes = now.getMinutes() - startDate.getMinutes();
  let seconds = now.getSeconds() - startDate.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    months--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    months += 12;
    years--;
  }

  const ymdHTML =
    `<span class="time-unit">${years}Y</span> +
    <span class="time-unit">${months}M</span> +
    <span class="time-unit">${days}D</span>`;

  const hmsHTML =
    `<span class="time-unit">${pad(hours)}h</span> :
    <span class="time-unit">${pad(minutes)}m</span> :
    <span class="time-unit">${pad(seconds)}s</span>`;

    document.getElementById('ymd').innerHTML = ymdHTML;
    document.getElementById('hms').innerHTML = hmsHTML;

}

updateTimer();
setInterval(updateTimer, 1000);
// Hearts animation
const container = document.querySelector('.header-container');
setInterval(() => {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + '%';
  heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
  const heartShape = document.createElement('i')
  heart.innerText = '❤';
  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
}, 800);