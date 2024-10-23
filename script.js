const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const dateInput = document.getElementById('dateInput');
const timer = document.getElementById('timer');
const daysElem = document.getElementById('days');
const hoursElem = document.getElementById('hours');
const minutesElem = document.getElementById('minutes');
const secondsElem = document.getElementById('seconds');
const message = document.getElementById('message');

let countdownInterval;
let remainingTime; // Variable to store remaining time

function updateTimer() {
    const now = new Date();
    const targetDate = new Date(dateInput.value);

    if (isNaN(targetDate.getTime())) {
        message.textContent = 'Please select a valid date and time.';
        return;
    }

    remainingTime = targetDate - now;

    if (remainingTime <= 0) {
        clearInterval(countdownInterval);
        timer.style.display = 'none';
        message.textContent = 'Time is up!';
        return;
    }

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Update the timer display
    daysElem.textContent = String(days).padStart(2, '0');
    hoursElem.textContent = String(hours).padStart(2, '0');
    minutesElem.textContent = String(minutes).padStart(2, '0');
    secondsElem.textContent = String(seconds).padStart(2, '0');
}

startBtn.addEventListener('click', () => {
    clearInterval(countdownInterval);
    timer.style.display = 'flex';
    message.textContent = '';
    remainingTime = new Date(dateInput.value) - new Date(); // Calculate remaining time
    updateTimer();
    countdownInterval = setInterval(updateTimer, 1000);
});

resetBtn.addEventListener('click', () => {
    clearInterval(countdownInterval);
    timer.style.display = 'none';
    message.textContent = '';
    dateInput.value = ''; // Clear date input
    daysElem.textContent = '00';
    hoursElem.textContent = '00';
    minutesElem.textContent = '00';
    secondsElem.textContent = '00';
}); 
