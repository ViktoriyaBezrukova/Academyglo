
let deposit = true;


console.log(typeof income)
console.log(typeof deposit);
console.log(typeof money)

let expenses1, expenses2
start = function() {
    do {
        money = prompt("Ваш месячный доход?");
        
    }while(isNaN(money) || money === '' || money === null){
    };
}
start()


let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: {},
    deposit: false,
    mission: 50000,
    period: 3,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function() {
        let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую (пример: Квартплата, проездной, кредит)");
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm("Есть ли у вас депозит в банке?");
    }
};


appData.budgetDay = Math.ceil(money / 30)
console.log("Бюджет на день: " + Math.floor(appData.budgetDay) + "рублей");


console.log([appData.addExpenses]);

function getExpensesMonth(a, b) {
    let sum = 0;
    for(let i = 0; i < 2; i++) {
        if(i === 0){
            expenses1 = prompt("Введите обязательную статью расходов?");  
        } else if(i === 1) {
            expenses2 = prompt("Введите обязательную статью расходов?");
        }
        do {
            sum += +prompt("Во сколько рублей это обойдется?");
            
        }while(isNaN(parseFloat(sum))){
        
        };
    }
    console.log(sum)
    return sum;
}
let expensesAmount = getExpensesMonth();
appData.getExpensesMonth = expensesAmount
console.log(appData)


console.log("Сумма обязательных расходов: " + expensesAmount);

function getAccumulatedMonth(a, b) {
    return money - expensesAmount;
}

let accumulatedMonth = getAccumulatedMonth();
appData.getAccumulatedMonth = accumulatedMonth

function getTargerMonth(a, b) {
    return appData.mission / accumulatedMonth
}
appData.getTargerMonth = Math.ceil(getTargerMonth())




budgetDay = Math.ceil(accumulatedMonth / 30);

if(0 > getTargerMonth() ) {
    console.log("Цель не будет достигнута")
} else{
    console.log("Цель будет достигнута за " + Math.ceil(getTargerMonth(appData.mission, accumulatedMonth)) + " месяцев(-а)")
}

let getStatusIncome = function() {
    if(0>= budgetDay ) {
        return("Что то пошло не так")
    } else if(600>= budgetDay > 0) {
        return("К сожалению у вас уровень дохода ниже среднего")
    } else if(1200 >= budgetDay && budgetDay > 600) {
        return("У вас средний уровень дохода")
    } else{
        return("У вас высокий уровень дохода")
    }
}
let statusIncome = getStatusIncome()
appData.getStatusIncome = statusIncome


console.log("Накопления за месяц: " + accumulatedMonth);

console.log("Бюджет на день : " + budgetDay);
