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

class AppData {
    constructor(){
        this.budget = 0;
        this.expenses = {};
        this.addExpenses = [];
        this.incomeMonth = 0;
        this.deposit = false;
        this.percentDeposit = 0;
        this.moneyDeposit = 0;
        this.budgetDay = 0;
        this.budgetMonth = 0;
        this.income ={};
        this.addIncome = [];
        this.expensesMonth = 0;
        this.calcPeriod = 0;
    }
    check(){
        if(salaryAmount.value != ''){
            start.removeAttribute('disab;ed')
        }
    }
    
    start(){
        this.budget = +salaryAmount.value
        this.getExpInc();
        this.periodValue()
        this.getExpensesMonth();
        this.getAddExpenses();
        this.getAddIncome();
        this.getBudget();
        this.showResult();
    
        this.blocked();
        
    }
    
    blocked(){
        document.querySelectorAll('.data input[type=text]').forEach(function(item){
            item.disabled = true
        });
        start.style.display = 'none'
        cancel.style.display = 'block'
    }
    addExpensesBlock(){
        const cloneExpensesItems = expensesItems[0].cloneNode(true)
        expensesItems[0].parentNode.insertBefore(cloneExpensesItems, expensesPlus)
        expensesItems = document.querySelectorAll('.expenses-items')
        if(expensesItems.length === 3){
            expensesPlus.style.display = 'none'
        }
    
    }
    addIncomeBlock(){
        const cloneIncomeItems = incomeItem[0].cloneNode(true)
        incomeItem[0].parentNode.insertBefore(cloneIncomeItems, incomePlus)
        incomeItem = document.querySelectorAll('.income-items')
        if(incomeItem.length === 3){
            incomePlus.style.display = 'none'
        }
    }
    showResult(){
        const _this = this;
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth
        additionalExpensesValue.value = this.addExpenses.join(',')
        additionalIncomeValue.value = this.addIncome.join(',')
        targetMonthValue.value = Math.ceil(targetAmount.value / this.budgetMonth) 
        incomePeriodValue.value = _this.calcPeriod; 
    }
    
    getExpInc(){
        const count = item => {
            const startStr = item.className.split('-')[0]
            const itemTitle = item.querySelector(`.${startStr}-title`).value
            const itemAmount = item.querySelector(`.${startStr}-amount`).value
            if(itemTitle !== '' & itemAmount !== ''){
                this[startStr][itemTitle] = itemAmount
            }
        }
        incomeItem.forEach(count);
        expensesItems.forEach(count);
        for(const key in appData.income){
            appData.incomeMonth += +appData.income[key]
        }
    
    }
    getAddExpenses(){
        const addExpenses = additionalExpensesItem.value.split(',');
        const _this = this;
        addExpenses.forEach(function(item){
            if(item !== ''){
                item = item.trim();             
                _this.addExpenses.push(item);
            }
        })
    }
    getAddIncome(){
        const _this = this;
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if(itemValue !== ''){
                _this.addIncome.push(itemValue)
            }
        })
    } 
    getExpensesMonth() {
            for(const key in appData.expenses){
                appData.expensesMonth += +appData.expenses[key] 
                }
        }
    getBudget = function(a, b) {
            this.budgetMonth =  this.budget + this.incomeMonth - this.expensesMonth;
            this.budgetDay = Math.floor(this.budgetMonth / 30)
        }
    getTargetMonth(){
        return targetAmount.value / this.budgetMonth
        }
    getStatusIncome(){
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
    getInfoDeposit(){
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
    }
    calcPeriod(){
        return this.budgetMonth * periodSelect.value;
    }
    periodValue(){
        periodSelect.addEventListener("change", function(){
            periodAmount.innerHTML = periodSelect.value
        })
    
        
    }
    notEmpty() {
        salaryAmount.addEventListener('input', function(){
            start.disabled = (this.value === '')
        })
    }
    reset(){
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




const appData = new AppData();

start.addEventListener('click', appData.start.bind(appData));
cancel.addEventListener('click', appData.reset.bind(appData))
appData.notEmpty()
expensesPlus.addEventListener('click', appData.addExpensesBlock)
incomePlus.addEventListener('click', appData.addIncomeBlock)
appData.getTargetMonth();
appData.getInfoDeposit()

appData.getTargerMonth = Math.ceil(appData.getTargetMonth())
periodSelect.addEventListener('change', function(){
    periodAmount.innerHTML = periodSelect.value;
})
let addExp = [];
for(let i = 0; i< appData.addExpenses.length; i++){
    let element = appData.addExpenses[i].trim();
    element = element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
    addExp.push(element);
}


console.log(appData)

    



class First{
    constructor(){
    }
    hello(){
    console.log('Привет я метод родителя!') 
    }
}
const first = new First()


class Second extends First{
    constructor(){
        super()
    }
    hello(){
        console.log('Привет я метод родителя!') 
        this.hello2()
        }
    hello2(){
        console.log('А я наследуемый метод!')
    }
}

const second = new Second()
second.hello()

