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
            ;
            return;
        }
        secondsTimer.innerText = seconds;
    }, 1000);
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

const rangeValue = document.getElementById("js--rangeValue");
const slider = document.getElementById("js--slider");
const body = document.getElementById("js--body");

slider.value = 2;
rangeValue.innerText = slider.value + "x";

slider.oninput = function(){
    rangeValue.innerText = slider.value + "x";
    body.style.fontSize = slider.value + "rem"; 
}

const paragraph = document.getElementById("js--text");
const img = document.getElementById("js--img");
let data = fetch("data.json").then(
    function(binnenGekomenData){
        return binnenGekomenData.json();
    }).then(
        function(echteData){
            paragraph.innerHTML = echteData.text;
            img.src = echteData.img;
        });
        
    


/*const text = document.getElementById("js--text");
text.innerText = data.text;*/ 

/*const img = document.getElementById("js--img");
console.log(img);
img.innerText = data.img;*/ 