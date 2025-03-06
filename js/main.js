const startButton = document.getElementById("js--start");
const stopButton = document.getElementById("js--stop");
const resetButton = document.getElementById("js--reset");
let seconds = 0;
let minutes = 0;
let running = false;


const secondsTimer = document.getElementById("js--secondsTimer");

let timer;

startButton.onclick = function(){
    if (running === true) {
        return;
    }
    running = true;
     timer = setInterval(function(){
        seconds = seconds + 1;
        if(seconds === 60){
            minutes = minutes + 1;
            seconds = 0;
            miliseconds = 0;
            return;
        }
        secondsTimer.innerText = seconds;
    }, 100);
}

stopButton.onclick = function(){
    clearInterval(timer);
    running = false;
}


resetButton.onclick = function () {
    clearInterval(timer);
    running = false;
    seconds = 0;
    minutes = 0;
    secondsTimer.innerText = "0";
};
