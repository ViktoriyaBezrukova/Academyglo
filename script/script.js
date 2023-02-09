window.addEventListener('DOMContentLoaded', function(){
'use sctrict'
// Timer
function countTimer(deadline){
let timerHours = document.querySelector('#timer-hours'),
    timerMinutes = document.querySelector('#timer-minutes'),
    timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining(){
        let dateStop = new Date(2023, 06, 01).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 60 / 60) % 24;
        return {timeRemaining, hours, minutes, seconds};
        
    }
    
    function updateClock(){     
        let timer = getTimeRemaining()

        timerHours.textContent = timer.hours < 10 ? '0' + timer.hours : timer.hours
        timerMinutes.textContent = timer.minutes < 10 ? '0' + timer.minutes : timer.minutes;
        timerSeconds.textContent = timer.seconds < 10 ? '0' + timer.seconds : timer.seconds;
        

        if(timer.timeRemaining > 0){
            setInterval(updateClock, 1000)
        } else{
            clearInterval(updateClock)
        }
        
    }
}



    countTimer('1 july 2023')
    // setInterval(countTimer, 1000, '1 july 2023')
})