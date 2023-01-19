let deposit = true;
let money = 5000



let expenses1, expenses2



let appData = {
    budget: money,
    expenses: {},
    addExpenses: {},
    deposit: false,
    mission: 50000,
    period: 3,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    start: function() {
        do {
            money = prompt("Ваш месячный доход?");
            appData.budget = money
        }while(isNaN(money) || money === '' || money === null){
        };
    },
    asking: function () {
        addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую (пример: Квартплата, проездной, кредит)");
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm("Есть ли у вас депозит в банке?");

        let sum = 0;
    
        for(let i = 0; i < 2; i++) { 
                expenses = prompt("Введите обязательную статью расходов?");  
                do {
                    sum = +prompt("Во сколько рублей это обойдется?");
                    
                }while(isNaN(parseFloat(sum))){};
                this.expenses[expenses] = sum
                
            }
            
        },
    getExpensesMonth: function () {
            for(let key in appData.expenses){
                appData.expensesMonth += appData.expenses[key] 
                }
        }, 
    getBudget:function(a, b) {
            appData.budgetMonth =  appData.budget - appData.expensesMonth;
            appData.budgetDay = Math.ceil(appData.budgetMonth / 30)
        },
    getTargerMonth:function(a, b) {
            return appData.mission / appData.budgetMonth
        },
    getStatusIncome: function() {
            if(0>= appData.budgetDay ) {
                console.log("Что то пошло не так")
            } else if(600>= appData.budgetDay > 0) {
                console.log("К сожалению у вас уровень дохода ниже среднего")
            } else if(1200 >= appData.budgetDay && appData.budgetDay > 600) {
                console.log("У вас средний уровень дохода")
            } else{
                console.log("У вас высокий уровень дохода")
            }
        }
    }

    

    appData.start();
    appData.asking();
    appData.getExpensesMonth();
    appData.getBudget();
    appData.getTargerMonth();
    appData.getStatusIncome();

// let showTypeof = function(item) {
//     console.log(typeof item)
// }
// showTypeof(deposit)
// showTypeof(money)

console.log(appData)
for(i in appData){
    console.log("Наша программа включает в себя данные: " +i + ":" + appData[i])
}



appData.getTargerMonth = Math.ceil(appData.getTargerMonth())

console.log("Расходы за месяц: " + appData.expensesMonth)
if(0 > appData.getTargerMonth ) {
    console.log("Цель не будет достигнута")
} else{
    console.log("Цель будет достигнута за " + Math.ceil(appData.getTargerMonth) + " месяцев(-а)")
}



