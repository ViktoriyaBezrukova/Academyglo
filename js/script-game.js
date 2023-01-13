alert("Угадайте число от 1 до 100")
let number = Math.floor(Math.random()*100);
quesses = 0;

function randomNumber() {   
    let result = +prompt("Введите число ")   
    if(result == number) {
        alert("Вы угадали число! Попыток: " + quesses + "Число: " + number)
        let a = prompt("Хотели бы сыграть еще?")
        if(a === null){
            return alert("Игра окончена! Вы нажали отмена")
        } else{
            quesses = 0;
            randomNumber()
        }
    } else if(result < number && result != 0) {
        alert("Ваше число " + result + " меньше загаданного. Попыток: " + quesses )   
        quesses++;
    } else if(result > number) {
        alert("Ваше число " + result + " больше загаданного. Попыток: " + quesses)
        quesses++;
    } else if(isNaN(parseFloat(result)) || result === ""){
        quesses = quesses - 1;
        alert("Введите число!")
    } else if(result === 0){
        return alert("Игра окончена! Вы нажали отмена")
    }

    if(quesses < 10) {
        randomNumber();
        
    } else {
        alert("Попытки закончились, вы не угадали число.")
        let a = prompt("Хотели бы сыграть еще?")
        if(a === null){
            return alert("Игра окончена! Вы нажали отмена")
        } else{
            quesses = 0;
            randomNumber()
        }
    }
    console.log(result)
}
randomNumber()
console.log(typeof(prompt))
console.log(number)
