// let isNumber = function(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n)
// };

let money;
let income = "Таксую";
let deposit = true;
let mission = 150000;
let period = 10;

console.log(typeof money)
console.log(typeof income)
console.log(typeof deposit)
console.log("Цель заработать " + mission + " рублей");
// money = +prompt("Ваш месячный доход?");
addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую (пример: Квартплата, проездной, кредит)")
deposit = confirm("Есть ли у вас депозит в банке?");

let expenses1, expenses2

// let expenses1 = prompt("Введите обязательную статью расходов?");
//     expenses2 = prompt("Введите обязательную статью расходов?");
//     amount1 = +prompt("Во сколько " + expenses1 + " обойдется?");
//     amount2 = +prompt("Во сколько " + expenses2 + " обойдется?");
do {
    money = prompt("Ваш месячный доход?");
    
}while(isNaN(parseFloat(money))){

};


addExpenses.toLowerCase();
let budgetDay = money / 30
console.log("Бюджет на день: " + Math.floor(budgetDay) + "рублей");


console.log([addExpenses]);

function getExpensesMonth(a, b) {

    let sum = 0;

    for(let i = 0; i < 2; i++) {
        if(i === 0){
            expenses1 = prompt("Введите обязательную статью расходов?");  
        } else if(i === 1) {
            expenses2 = prompt("Введите обязательную статью расходов?");
        }
        do {
            sum = prompt("Во сколько рублей это обойдется?");
            
        }while(isNaN(parseFloat(sum))){};
    }
    console.log(sum)
    return sum;
}



let expensesAmount = getExpensesMonth();

console.log("Сумма обязательных расходов: " + expensesAmount);

function getAccumulatedMonth(a, b) {
    return money - expensesAmount;
}
let accumulatedMonth = getAccumulatedMonth();

function getTargerMonth(a, b) {
    return mission / accumulatedMonth
}

budgetDay = Math.ceil(accumulatedMonth / 30);

if(0 > getTargerMonth() ) {
    console.log("Цель не будет достигнута")
} else{
    console.log("Цель будет достигнута за " + Math.ceil(getTargerMonth(mission, accumulatedMonth)) + " месяцев(-а)")
}

if(0>= budgetDay ) {
    console.log("Что то пошло не так")
} else if(600>= budgetDay > 0) {
    console.log("К сожалению у вас уровень дохода ниже среднего")
} else if(1200 >= budgetDay && budgetDay > 600) {
    console.log("У вас средний уровень дохода")
} else{
    console.log("У вас высокий уровень дохода")
}


console.log("Накопления за месяц: " + accumulatedMonth);
console.log("Бюджет на день : " + budgetDay);
