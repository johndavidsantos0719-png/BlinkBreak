
let totalSeconds = 20 * 60;

let timer = null;
let running = false;
let studySeconds = 0;
let breakCount = 0;

const timerDisplay = document.getElementById("timerDisplay");
const studyTime = document.getElementById("studyTime");
const breakDisplay = document.getElementById("breakCount");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

function updateDisplay() {

    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    timerDisplay.textContent = `${minutes}:${seconds}`;

}


// Study Time Display


function updateStudyTime() {

    let hours = Math.floor(studySeconds / 3600);

    let minutes = Math.floor((studySeconds % 3600) / 60);

    let seconds = studySeconds % 60;

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    studyTime.textContent = `${hours}:${minutes}:${seconds}`;

}
updateDisplay();
updateStudyTime();
updateBreakCount();

function updateBreakCount() {

    breakDisplay.textContent = breakCount;

}

// Start Button


startBtn.addEventListener("click", function () {

    if (running) return;

    running = true;

    timer = setInterval(function () {

        if (totalSeconds > 0) {
            totalSeconds--;
            studySeconds++;
            updateDisplay();
            updateStudyTime();
        } else {
            clearInterval(timer);

running = false;

breakCount++;

updateBreakCount();

alert("🎉 Great job!\n\nTake a 30-second up to 1-minute eye break.\n\nPress OK to start your next study session.");

totalSeconds = 20 * 60;

updateDisplay();

        }

    }, 1000);

});


// Pause Button


pauseBtn.addEventListener("click", function () {

    clearInterval(timer);
    running = false;

});


// Reset Button


resetBtn.addEventListener("click", function () {

    clearInterval(timer);
    running = false;
    totalSeconds = 20 * 60;
    breakCount = 0;
    updateDisplay();
    updateBreakCount();
});