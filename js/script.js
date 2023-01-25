// let book = document.querySelectorAll('.book'),
//     adv = document.querySelector('.adv '),
//     chapter = document.querySelectorAll('li')
//     title = document.querySelectorAll('a'),
//     newLi = document.createElement('li')
//     body = document.querySelector('body')
//     console.log(title)
// console.log(chapter)
// book[1].after(book[0])
// book[0].after(book[4])
// book[4].after(book[3])
// book[3].after(book[5])
// adv.remove()

// book[0].append(chapter[3])
// book[0].append(chapter[6])
// book[0].append(chapter[8])
// book[0].append(chapter[4])
// book[0].append(chapter[5])
// book[0].append(chapter[7])
// book[0].append(chapter[9])
// book[0].append(chapter[2])
// book[0].append(chapter[10])

// book[5].append(chapter[55])
// book[5].append(chapter[49])
// book[5].append(chapter[50])
// book[5].append(chapter[48])
// book[5].append(chapter[52])
// book[5].append(chapter[53])
// book[5].append(chapter[51])
// book[5].append(chapter[54])
// book[5].append(chapter[56])

// newLi.textContent = "Глава 8: За пределами ES6"
// title[4].textContent = ("Книга 3. this и Прототипы Объектов")
// chapter[25].after(newLi)
// body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)"


// ! 1 урок работа с сайтом
let buttonStart = document.getElementById('start'),
    btnPlus = document.getElementsByTagName('button')
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    targetMonthValue = document.getElementsByClassName('.target_month-value'),
    start = document.getElementById('start')
    salaryAmount = document.querySelector('.salary-amount')
    additionalIncomeItem = document.querySelectorAll('.additional_income-item')
    depositCheck = document.querySelector('#deposit-check'),
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0]
    accumulatedMonthValue = document.getElementsByClassName('accumulater_month-value')[0]
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0]
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0]
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0]
    targetMonthValue = document.getElementsByClassName('target_month-value')[0]
    salaryAmount = document.querySelector('.salary-amount')
    incomeTitle = document.querySelector('.income-title')
    // incomeAmount = document.querySelector('.income-amount')
    expensesTitle = document.querySelector('.expenses-title')
    expensesItems = document.querySelectorAll('.expenses-items')
    additionalExpenses = document.querySelector('.additional_expenses')
    periodSelect = document.querySelector('.period-select'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item')
    targetAmount = document.querySelector('.target-amount')
    incomeItem = document.querySelectorAll('.income-items')
    periodAmountText = document.querySelector('.period-amount')

let deposit = true;
let expenses1, expenses2
let appData = {
    budget: 0,
    expenses: {},
    addExpenses: [],
    incomeMonth: 0,
    deposit: false,
    percentDeposit: 0,
    moneyDeposit:0,
    budgetDay: 0,
    budgetMonth: 0,
    income:{},
    addIncome:[],
    expensesMonth: 0,
    calcPeriod:0,
    start: function() {
        if(salaryAmount.value === ''){
            alert('Ошибка, поле "Месячный доход" должно быть заполнено!')
            return
        }

        
        appData.budget = +salaryAmount.value

        appData.getExpenses()
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();

        appData.showResult();
    },
    showResult: function(){
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth
        additionalExpensesValue.value = appData.addExpenses.join(',')
        additionalIncomeValue.value = appData.addIncome.join(',')
        targetMonthValue.value = Math.ceil(targetAmount.value / appData.budgetMonth) 
        incomePeriodValue.value = appData.calcPeriod()
    },
    addExpensesBlock: function(){
        let cloneExpensesItems = expensesItems[0].cloneNode(true)
        expensesItems[0].parentNode.insertBefore(cloneExpensesItems, expensesPlus)
        expensesItems = document.querySelectorAll('.expenses-items')
        if(expensesItems.length === 3){
            expensesPlus.style.display = 'none'
        }
    
    },
    addIncomeBlock:function(){
        let cloneIncomeItems = incomeItem[0].cloneNode(true)
        incomeItem[0].parentNode.insertBefore(cloneIncomeItems, incomePlus)
        incomeItem = document.querySelectorAll('.income-items')
        if(incomeItem.length === 3){
            incomePlus.style.display = 'none'
        }
    },
    getExpenses: function() {
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== ''){
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
    getIncome: function() {
        if(confirm("Есть ли у вас доп заработок?")) {
            incomeItem.forEach(function(item){
                let itemIncome = item.querySelector('.income-title').value;
                let cashIncome = item.querySelector('.income-amount').value;
                if(itemIncome !== '' & cashIncome !== ''){
                    appData.income[itemIncome] = cashIncome
                }
            })
            for(let key in appData.income){
                appData.incomeMonth += +appData.income[key]
            }
    }},
    getAddExpenses: function(){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            if(item !== ''){
                item = item.trim();             
                appData.addExpenses.push(item);
            }
        })
    },
    getAddIncome: function(){
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if(itemValue !== ''){
                appData.addIncome.push(itemValue)
            }
        })
    },
    getExpensesMonth: function () {
            for(let key in appData.expenses){
                appData.expensesMonth += +appData.expenses[key] 
                }
        }, 
    getBudget:function(a, b) {
            appData.budgetMonth =  appData.budget + appData.incomeMonth - appData.expensesMonth;
            appData.budgetDay = Math.floor(appData.budgetMonth / 30)
        },
    getTargetMonth:function() {
        return targetAmount.value / appData.budgetMonth
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
        },
    getInfoDeposit: function() {
        if(appData.deposit) {
            do{
            appData.percentDeposit = prompt("Какой годовой процент?")
            appData.percentDeposit = appData.percentDeposit && appData.percentDeposit.trim()
            } while(isNaN(appData.percentDeposit) || appData.percentDeposit == '' || appData.percentDeposit === null){}
            
            do{
                appData.moneyDeposit = prompt("Какая сумма заложена?") 
                appData.moneyDeposit = appData.moneyDeposit && appData.moneyDeposit.trim() 
            }while(isNaN(appData.moneyDeposit) || appData.moneyDeposit == '' || appData.moneyDeposit === null){};

            

        }
    },
    calcPeriod: function() {
        return appData.budgetMonth * periodSelect.value;
    },
    periodValue: function() {
        let a = periodSelect.value
        console.log(a)
        
    },
    }

    start.addEventListener('click', appData.start);
    expensesPlus.addEventListener('click', appData.addExpensesBlock)
    incomePlus.addEventListener('click', appData.addIncomeBlock)
    appData.getTargetMonth();
    appData.getInfoDeposit()

console.log(appData)

// for(i in appData){
//     console.log("Наша программа включает в себя данные: " +i + ":" + appData[i])
// }
appData.getTargerMonth = Math.ceil(appData.getTargetMonth())

// if(0 > appData.getTargerMonth ) {
//     console.log("Цель не будет достигнута")
// } else{
//     console.log("Цель будет достигнута за " + Math.ceil(appData.getTargerMonth) + " месяцев(-а)")
// }



