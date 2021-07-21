//element button
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

//element penentu work timer
var workMinutes = document.getElementById('w_minutes');
var workSeconds = document.getElementById('w_seconds');

//element penentu break timer
var breakMinutes = document.getElementById('b_minutes');
var braeakSeconds = document.getElementById('b_seconds');

//variable untuk menyimpan informasi jika timer sudah dimulai(start)
var startTimer;

//ketika tombol start diklik
start.addEventListener('click', function(){
    if(startTimer === undefined){
        //fungsi waktu akan berjalan terus dgn interval 1detik
        startTimer = setInterval(time, 1000);
    } else {
        alert("Timer-nya udah jalan lho...");
    }
});

//ketika tombol stop diklik
stop.addEventListener('click', function(){
    stopTimer();
    startTimer = undefined;
});

//ketika tombol reset diklik
reset.addEventListener('click', function(){
    workMinutes.innerText = 25;
    workSeconds.innerText = "00";

    breakMinutes.innerText = 5;
    braeakSeconds.innerText = "00";

    document.getElementById('counter').innerText = 0;
    stopTimer();
    startTimer = undefined;
});




//fungsi waktu
function time(){
    
    //hitung mundur break timer
    if(workMinutes.innerText == 0 && workSeconds.innerText == 0){
        if(braeakSeconds.innerText != 0){
            braeakSeconds.innerText--;
        } else if(breakMinutes.innerText != 0 && braeakSeconds.innerText == 0){
            braeakSeconds.innerText = 59;
            breakMinutes.innerText--;
        }
    }
    
    
    //hitung mundur work timer
    if(workSeconds.innerText != 0){
        workSeconds.innerText--;
    } else if(workMinutes.innerText != 0 && workSeconds.innerText == 0){
        workSeconds.innerText = 59;
        workMinutes.innerText--;
    }

   

    //jika work timer dan break timer terselesaikan maka cycle counter akan terjadi increement
    if(workMinutes.innerText == 0 && workSeconds.innerText == 0 && breakMinutes.innerText == 0 && braeakSeconds.innerText == 0){
        workMinutes.innerText = 25;
        workSeconds.innerText = "00";

        breakMinutes.innerText = 5;
        braeakSeconds.innerText = "00";

        document.getElementById('counter').innerText++;
    }
}

//fungsi stop timer
function stopTimer(){
    clearInterval(startTimer);
}