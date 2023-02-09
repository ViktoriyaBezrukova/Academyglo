
function all(){
    'use strict';
    let greeting = document.querySelector('.greeting'),
    weekday = document.querySelector('.weekday'),
    currentTime = document.querySelector('.currentTime'),
    timeRemaining = document.querySelector('.timeRemaining');
        let newYear = new Date(2023, 11, 31, 7),
        date = new Date();
        
    let dateStop = newYear.getTime(),
        dateNow = date.getTime(),
        time = (dateStop - dateNow) / 1000,
        days = Math.floor(time / 60 / 60 / 24),
        hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
        minutes = date.getMinutes() < 10 ? '0' + + date.getMinutes() : date.getMinutes(),
        seconds = date.getSeconds() < 10 ? '0' + + date.getSeconds() : date.getSeconds();
    
function greetings(){
    if(hours >= 7 && hours < 12){
        greeting.textContent = 'Доброе утро!'
    } else if(hours >= 12 && hours < 15){
        greeting.textContent = 'Добрый день!'
    }else if(hours >= 15 && hours < 23){
        greeting.textContent = 'Добрый вечер!'
    }else{
        greeting.textContent = 'Доброй ночи!'
    }
}
function weekDays(){
    var days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];  
    var n = date.getDay();
    weekday.textContent = 'Сегодня: ' + (days[n]);
}
function currentTimes(){
    if(date.hours > 0 && hours < 12){
        currentTime.textContent = 'Текущее время: ' + hours + ':' + minutes + ':' + seconds  + ' ' + 'AM'
    } else {
        currentTime.textContent = 'Текущее время: ' + hours + ':' + minutes + ':' + seconds + ' ' + 'PM'
    }
}
function declinationOfDays(days, words){
    days = Math.abs(days) % 100;
    var days = days % 10;
    if(days > 10 && days < 20) return words[2]; 
	if(days > 1 && days < 5) return words[1];
	if(days == 1) return words[0]; 
	return words[2];
}
timeRemaining.textContent = 'До нового года осталось: ' + days + ' ' + declinationOfDays(days, ['день', 'дня', 'дней'])



greetings();
weekDays();
currentTimes(); 
}

all()