let buttonStart = document.getElementById('start')
let plusButtonIncome = document.getElementsByTagName('btn_plus')[0]
let plusButtonExpenses = document.getElementsByTagName('btn_plus')[1]
let checkbox = document.querySelectorAll('.deposit-checkmark')
let inputExpenses = document.querySelectorAll('.additional_income-item')
let budgetDayValue = document.getElementsByClassName('.budget_day-value')
let expensesMonthValue = document.getElementsByClassName('.expenses_month-value')
let incomeMonthText = document.getElementsByClassName('.additional_income-value')
let expensesMonthText = document.getElementsByClassName('.additional_expenses-value')
let savingsMonthValue = document.getElementsByClassName('.income_period-value')
let targetMonthValue = document.getElementsByClassName('.target_month-value')
// let deposit = true;
// let money = 5000
// let expenses1, expenses2
// let appData = {
//     budget: money,
//     expenses: {},
//     addExpenses: {},
//     deposit: false,
//     percentDeposit: 0,
//     moneyDeposit:0,
//     mission: 50000,
//     period: 3,
//     budgetDay: 0,
//     budgetMonth: 0,
//     income:{},
//     addIncome:[],
//     expensesMonth: 0,
//     start: function() {
//         do {
//             money = prompt("Ваш месячный доход?", '5000');
//             appData.budget = money
//         }while(isNaN(money) || money === '' || money === null){
//         };
//     },
//     asking: function () {
//         if(confirm("Есть ли у вас доп заработок?")) {
//             do{
//                 itemIncome = prompt("Какой у вас есть дополнительный заработок?", "Таксую")
//             } while(!isNaN(itemIncome) || itemIncome ===null || itemIncome == ''){

//             }
            

//             do{
//                     cashIncome = prompt("Сколько приносит ваш доп заработок?"); 
//                     cashIncome = cashIncome && cashIncome.trim() 
//                 }while(isNaN(cashIncome) || cashIncome == '' || cashIncome === null){};
//                 appData.income[itemIncome] = cashIncome
//             }

//         do {
//             addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую (пример: Квартплата, проездной, кредит)")
//         } while (addExpenses === null || !(addExpenses = addExpenses.trim())); 
//         result = addExpenses.split(', ').map(s => s.charAt(0).toUpperCase() + s.substr(1));
//         appData.addExpenses = result.join(', ')

//         appData.deposit = confirm("Есть ли у вас депозит в банке?");

//         let sum = 0;
    
//         for(let i = 0; i < 2; i++) { 
//                 expenses = prompt("Введите обязательную статью расходов?");
                
//                 do {
//                     sum = +prompt("Во сколько рублей это обойдется?");
                    
//                 }while(isNaN(sum) || sum === '' || sum === 0){};
//                 appData.expenses[expenses] = sum
//             }   
//         },
//     getExpensesMonth: function () {
//             for(let key in appData.expenses){
//                 appData.expensesMonth += +appData.expenses[key] 
//                 }
//         }, 
//     getBudget:function(a, b) {
//             appData.budgetMonth =  appData.budget - appData.expensesMonth + +cashIncome;
//             appData.budgetDay = Math.floor(appData.budgetMonth / 30)
//         },
//     getTargerMonth:function(a, b) {
//             return appData.mission / appData.budgetMonth
//         },
//     getStatusIncome: function() {
//             if(0>= appData.budgetDay ) {
//                 console.log("Что то пошло не так")
//             } else if(600>= appData.budgetDay > 0) {
//                 console.log("К сожалению у вас уровень дохода ниже среднего")
//             } else if(1200 >= appData.budgetDay && appData.budgetDay > 600) {
//                 console.log("У вас средний уровень дохода")
//             } else{
//                 console.log("У вас высокий уровень дохода")
//             }
//         },
//     getInfoDeposit: function() {
//         if(appData.deposit) {
//             do{
//             appData.percentDeposit = prompt("Какой годовой процент?")
//             appData.percentDeposit = appData.percentDeposit && appData.percentDeposit.trim()
//             } while(isNaN(appData.percentDeposit) || appData.percentDeposit == '' || appData.percentDeposit === null){}
            
//             do{
//                 appData.moneyDeposit = prompt("Какая сумма заложена?") 
//                 appData.moneyDeposit = appData.moneyDeposit && appData.moneyDeposit.trim() 
//             }while(isNaN(appData.moneyDeposit) || appData.moneyDeposit == '' || appData.moneyDeposit === null){};

            

//         }
//     },
//     calcSavedMoney: function() {
//         return appData.budgetMonth * appData.period;
//     }
//     }

//     appData.start();
//     appData.asking();
//     appData.getExpensesMonth();
//     appData.getBudget();
//     appData.getTargerMonth();
//     appData.getStatusIncome();
//     appData.getInfoDeposit()

// console.log(appData)
// for(i in appData){
//     console.log("Наша программа включает в себя данные: " +i + ":" + appData[i])
// }
// appData.getTargerMonth = Math.ceil(appData.getTargerMonth())

// console.log("Расходы за месяц: " + appData.expensesMonth)
// if(0 > appData.getTargerMonth ) {
//     console.log("Цель не будет достигнута")
// } else{
//     console.log("Цель будет достигнута за " + Math.ceil(appData.getTargerMonth) + " месяцев(-а)")
// }



