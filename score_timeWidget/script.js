let maxMinutes = 1;
let timetoAdd;

document.addEventListener('DOMContentLoaded', () => {
    let minutes = 0;
    let seconds = 0;
    
    let intervalId;

    const timerElement = document.getElementById('mtime');
    const startBtn = document.getElementById('ha1');
    const resetBtn = document.getElementById('rha1');
    const addtimeBtn = document.getElementById('adt');
    const resetaddTimeBtn = document.getElementById('radt');
    const addGoalTeam1Btn = document.getElementById('gt1');

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
        timetoAdd = parseInt(document.getElementById("tam").value);
        maxMinutes += timetoAdd;
        document.getElementById("maddtime").innerHTML = "+" + document.getElementById("tam").value.toString();
        document.getElementById("addtime").style.visibility="visible";
        console.log(maxMinutes);
    }

    function resetaddTime(){
        maxMinutes -= timetoAdd;
        console.log(maxMinutes);
        document.getElementById("addtime").style.visibility="hidden";

    }

    function addGoalTeam1(){
        tempscore = parseInt(document.getElementById("team1Score").textContent);
        console.log(tempscore);
        tempscore += 1;
        console.log(tempscore);
        document.getElementById("team1Score").innerHTML = tempscore.toString();
    }

    startBtn.addEventListener('click', startTimer);
    resetBtn.addEventListener('click', resetTimer);
    addtimeBtn.addEventListener('click', addTime);
    resetaddTimeBtn.addEventListener('click', resetaddTime);
    addGoalTeam1Btn.addEventListener('click', addGoalTeam1);

    updateTimerDisplay(); // Initialize the display
});
