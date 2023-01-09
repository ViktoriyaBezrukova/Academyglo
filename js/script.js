let money = 35000;
let income = "Таксую";
let addExpenses = "Такси, Поход в кино, Маникюр, Интернет, ЖКХ";
let deposit = true;
let mission = 150000;
let period = 10;
let budgetDay = money / 30

addExpenses = addExpenses.toLowerCase();




console.log(typeof money)
console.log(typeof income)
console.log(typeof deposit)
console.log(addExpenses.length)
console.log("Период равен " + period + " месяцев")
console.log("Цель заработать " + mission + " рублей")
console.log(Array.from(addExpenses))
console.log(Math.floor(budgetDay)) 
console.log("Период равен " + period + " месяцев");
console.log("Цель заработать " + mission + " рублей");




money = +prompt("Ваш месячный доход?");
addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую")
deposit = confirm("Есть ли у вас депозит в банке?");

expenses1 = prompt("Введите обязательную статью расходов?");
let amount1 = +prompt("Во сколько " + expenses1 + " обойдется?");
expenses2 = prompt("Введите обязательную статью расходов?");
let amount2 = +prompt("Во сколько " + expenses2 + " обойдется?");





let budgetMonth = money - amount1 - amount2;
console.log("Бюджет на месяц: " + budgetMonth + "рублей");

budgetDay = budgetMonth / 30;
console.log("Бюджет на день: " + Math.floor(budgetDay) + "рублей");

if(0>= budgetDay ) {
    console.log("Что то пошло не так")
} else if(600>= budgetDay > 0) {
    console.log("К сожалению у вас уровень дохода ниже среднего")
} else if(1200 >= budgetDay && budgetDay > 600) {
    console.log("У вас средний уровень дохода")
} else{
    console.log("У вас высокий уровень дохода")
}
console.log(addExpenses);
console.log("Цель будет достигнута за " + Math.ceil(mission / budgetMonth) + " месяцев(-а)");
