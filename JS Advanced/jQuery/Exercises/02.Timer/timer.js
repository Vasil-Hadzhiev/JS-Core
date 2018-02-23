function timer() {
    let hours = $('#hours');
    let minutes = $('#minutes');
    let seconds = $('#seconds');
    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');

    let currentSeconds = 0;
    let interval;
    let timerIsOn = false;

    startBtn.on('click', function(){
        if(!timerIsOn){
            timerIsOn = true;
            interval = setInterval(step, 1000);
        }
    });

    stopBtn.on('click', function(){
        clearInterval(interval);
        timerIsOn = false;
    });

    function updateTime(currSec) {
        hours.text(('0' + Math.floor(currSec / 3600)).slice(-2));
        minutes.text(('0' + Math.floor((currSec % 3600) / 60)).slice(-2));
        seconds.text(('0' + (currSec % 3600) % 60).slice(-2));
    }
    
    function step() {
        currentSeconds++;
        updateTime(currentSeconds);
    }
}