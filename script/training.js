const left = document.querySelector('.left_decision');
const right = document.querySelector('.right_decision');
const decision = document.querySelector('.decision');
const result = document.querySelector('.result');
const footer = document.querySelector('.training');
const btn_result = document.querySelector('.global_result');
const btn_start = document.querySelector('.start_button');
const footer2 = document.querySelector('.footer_training');
const error = document.querySelector('.error');
const new_attemp = document.querySelector('.new_attemp');
let timer = document.querySelector('.timer');
let image = document.querySelector('.image');
let i = 2
let percent_of_good_answers = 0;
let minutes = 1, seconds = 1;

let good_answers = [false, true, true, true, false, false, true, false, true, true, true,
    true, true, true, false, true, true, true, false, true, false, true, true, true, false, true, true, true, true];
    
let answers = [];

function Timer() {
    console.log("Timer on");
    if (seconds < 10) {
        timer.innerHTML = `Time: 0${minutes}:0${seconds}`;
    } else {
        timer.innerHTML = `Time: 0${minutes}:${seconds}`;
    }
    if (seconds < 59) {
        seconds++;
    } else {
        seconds = 0;
        minutes++;
    }
    if (minutes == 2) {
        
        timer.innerHTML = `Time: 02:00`;
        image.style = "display: none";
        left.style = "display: none";
        right.style = "display: none";
        footer2.style = "position: absolute; bottom: 0";
        i = 2;
        good_answers = [];
        clearInterval(Timer);
        window.Timer = window.setInterval(Timer, 300);
        error.style = "display:flex";
        new_attemp.style = "display: flex";
        seconds = 1;
        minutes = 1;
        return;
    }
}

new_attemp.addEventListener('click', function(e){
    location.reload();
})

btn_start.addEventListener('click', function(e){
    seconds = 1;
    minutes = 1;
    btn_start.style = "display:none";
    image.style = "display:flex";
    timer.style = "display:flex";
    window.Timer = window.setInterval(Timer, 300);
    decision.style = "display:flex";
    footer2.style = "position:relative";
})

left.addEventListener('click', function(e){
    image.src = `./images/${i}.JPG`;
    answers[i - 2] = true;
    check();
    i++;
})

right.addEventListener('click', function(e){
    image.src = `./images/${i}.JPG`;
    answers[i - 2] = false;
    check();
    i++;
})

btn_result.addEventListener('click', function(e){
    location.reload();
})

function check() {
    if (answers[i - 2] === good_answers[i - 2]) {
        percent_of_good_answers += 100/29;
    }
    if (i === 30) {
        image.style = "display: none";
        result.style = "display: flex";
        left.style = "display: none";
        right.style = "display: none";
        footer2.style = "position: absolute; bottom: 0";
        btn_result.style = "display: flex";
        i = 2;
        result.innerHTML = `Ваш результат ${percent_of_good_answers.toFixed(2)}%`;
        good_answers = []
        window.clearInterval(Timer);
    }
}

// If left is correct than element must me True, othervise False