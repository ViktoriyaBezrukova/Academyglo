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
    cancel = document.getElementById('cancel')
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
    periodAmount = document.querySelector('.period-amount')

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
    check: function(){
        if(salaryAmount.value != ''){
            start.removeAttribute('disab;ed')
        }
    },
    start: function() {
        console.log(this)
        this.budget = +salaryAmount.value

        this.getExpenses();
        this.getIncome();
        this.periodValue()
        this.getExpensesMonth();
        this.getAddExpenses();
        this.getAddIncome();
        this.getBudget();
        this.showResult();

        this.blocked();
        
    },
    blocked: function(){
        document.querySelectorAll('.data input[type=text]').forEach(function(item){
            item.disabled = true
        });
        start.style.display = 'none'
        cancel.style.display = 'block'
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
    showResult: function(){
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth
        additionalExpensesValue.value = this.addExpenses.join(',')
        additionalIncomeValue.value = this.addIncome.join(',')
        targetMonthValue.value = Math.ceil(targetAmount.value / this.budgetMonth) 
        incomePeriodValue.value = this.calcPeriod()
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
    }
    },
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
            this.budgetMonth =  this.budget + this.incomeMonth - this.expensesMonth;
            this.budgetDay = Math.floor(this.budgetMonth / 30)
        },
    getTargetMonth:function() {
        return targetAmount.value / this.budgetMonth
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
        if(this.deposit) {
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
        periodSelect.addEventListener("change", function(){
            periodAmount.innerHTML = periodSelect.value
        })

        
    },
    notEmpty: function() {
        salaryAmount.addEventListener('input', function(){
            start.disabled = (this.value === '')
        })
    },
    reset: function(){
        document.querySelectorAll('.data input[type=text]').forEach(function(item){
            item.disabled = false
        });
        document.querySelectorAll('input').forEach(function(item){
            item.value = ""
        })
        cancel.style.display = 'none'
        start.style.display = 'block'
        appData.start
    }
    
}   
    start.addEventListener('click', appData.start.bind(appData));
    cancel.addEventListener('click', appData.reset.bind(appData))
    salaryAmount.addEventListener('keyup', appData.check)
    appData.notEmpty()
    expensesPlus.addEventListener('click', appData.addExpensesBlock)
    incomePlus.addEventListener('click', appData.addIncomeBlock)
    appData.getTargetMonth();
    appData.getInfoDeposit()
    appData.periodValue()
    appData.getTargerMonth = Math.ceil(appData.getTargetMonth())
    for(let i = 0; i< appData.addExpenses.length; i++){
        let element = appData.addExpenses[i].trim();
        element = element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
        addExp.push(element);
    }

