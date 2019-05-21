// Timer
let timer = setInterval(TimerHandler, 1000);
let sec = 0;
let min = 0;
let hour = 0;



function TimerHandler() {
    sec++;

    if (sec == 60) {
        sec = 0;
        min++;
    }

    if (min == 60) {
        min == 0;
        hour++;
    }

    DisplayTime();
}

function DisplayTime() {
    let sec_pretty;
    let min_pretty;
    let hour_pretty;
    let timer_element = document.getElementById("timer");
    if (sec < 10) {
        sec_pretty = "0" + sec;
    }

    if (min < 10) {
        min_pretty = "0" + min;
    }

    if (hour < 10) {
        hour_pretty = "0" + hour;
    }

    timer_element.innerHTML = hour_pretty + ":" + min_pretty + ":" + sec_pretty;
}