let maxMinutes = 1;

document.addEventListener('DOMContentLoaded', () => {
    let minutes = 0;
    let seconds = 0;
    
    let intervalId;

    const timerElement = document.getElementById('mtime');
    const startBtn = document.getElementById('ha1');
    const resetBtn = document.getElementById('rha1');
    const addtimeBtn = document.getElementById('adt');

    function updateTimerDisplay() {
        let minutesStr = minutes < 10 ? `0${minutes}` : minutes;
        let secondsStr = seconds < 10 ? `0${seconds}` : seconds;
        timerElement.textContent = `${minutesStr}:${secondsStr}`;
    }

    function startTimer() {
        intervalId = setInterval(() => {
            if (seconds === 59) {
                seconds = 0;
                minutes++;
                if (minutes < maxMinutes) {
                } else {
                    clearInterval(intervalId);
                }
            } else {
                seconds++;
            }
            updateTimerDisplay();
        }, 1000);
    }

    function resetTimer() {
        clearInterval(intervalId);
        minutes = 0;
        seconds = 0;
        updateTimerDisplay();
    }

    function addTime(){
        timetoAdd = document.getElementById("tam");
        maxMinutes += parseInt(timetoAdd.value);
        document.getElementById("maddtime").innerHTML = "+" + timetoAdd.value.toString();
        document.getElementById("addtime").style.visibility="visible";
        console.log(maxMinutes);
    }

    startBtn.addEventListener('click', startTimer);
    resetBtn.addEventListener('click', resetTimer);
    addtimeBtn.addEventListener('click', addTime);

    updateTimerDisplay(); // Initialize the display
});
