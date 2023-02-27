window.addEventListener('DOMContentLoaded', () => {
'use sctrict'
// Timer
const countTimer = (deadline) => {
let timerHours = document.querySelector('#timer-hours'),
    timerMinutes = document.querySelector('#timer-minutes'),
    timerSeconds = document.querySelector('#timer-seconds');

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 60 / 60) % 24;
        return {timeRemaining, hours, minutes, seconds};
        
    }
    
    const updateClock = () => {     
        let timer = getTimeRemaining()

        timerHours.textContent = timer.hours < 10 ? '0' + timer.hours : timer.hours
        timerMinutes.textContent = timer.minutes < 10 ? '0' + timer.minutes : timer.minutes;
        timerSeconds.textContent = timer.seconds < 10 ? '0' + timer.seconds : timer.seconds;
        

        if(timer.timeRemaining > 0){
            setInterval(updateClock, 1000)
        } else{
            clearInterval(updateClock)
        }
        
    }
    updateClock()
};
    
    countTimer('10 07 2023') 


    // Меню
    const toggleMenu = () => {

        const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        menuItems = menu.querySelectorAll('ul>li');

        const handlerMenu = () =>{
            menu.classList.toggle('active-menu');
        }

        btnMenu.addEventListener('click', (handlerMenu))
        
        menu.addEventListener('click', (event) =>{
            let target = event.target
            if(target.classList.contains = 'close-btn'){
                menu.classList.toggle('active-menu');
            }else if(target.tagName.contains = 'li'){
                menu.classList.toggle('active-menu');
            }
            
        })
    


}
    toggleMenu()

    // Popup
    const togglePopUp = () =>{
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn');
            popupContent = document.querySelector('.popup-content')

            popupBtn.forEach((elem)=>{
                elem.addEventListener('click', ()=>{
                    if(document.documentElement.clientWidth > 768){
                        popupContent.style.left = '0'
                        popupContent.style.position = 'relative'
                        popup.style.display = 'block';
                        count = 0;
                        console.log(count)
                        let popupcontentRight = () =>{
                            count++;
                            popupContent.style.left = count - popupContent.getBoundingClientRect().width / 1.5 + 'px'
                            if(count < (document.documentElement.clientWidth / 2)) {
                                setTimeout(popupcontentRight, 15)
                            }
                            setTimeout(popupcontentRight, 20)
                        }
                        popupcontentRight()
                    }else{
                        popup.style.display = 'block';
                    }
                
                })
            });

                popup.addEventListener('click', (event) => {
                    let target = event.target;
                    if(target.classList.contains('popup-close')){
                        popup.style.display = 'none'
                    } else{
                        target = target.closest('.popup-content')
                        if(!target){
                            popup.style.display = 'none'
                        }
                    }         
                })
    };

    togglePopUp();


        //табы

    const tabs = () =>{
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {
            for(let i = 0; i < tabContent.length; i++){
                if(index === i){
                    tab[i].classList.add('active')
                    tabContent[i].classList.remove('d-none')
                } else{
                    tab[i].classList.remove('active')
                    tabContent[i].classList.add('d-none')
                }
            }
        };

        tabHeader.addEventListener('click', (event) =>{
            let target = event.target;
                target = target.closest('.service-header-tab')
                if(target){  
                    tab.forEach((item, i) =>{   
                        if(item === target){
                            toggleTabContent(i)
                        }
                    });
                }                
        })
    };
    tabs();

    // слайдер
    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn'),
            
            slider = document.querySelector('.portfolio-content');
            dotParent = document.querySelector('.portfolio-dots');
            let interval;

        let currentSlide = 0;
    
        const prevSlide = (elem, index, strClass) =>{
            elem[index].classList.remove(strClass)
        }
        const addDot = () =>{
            for(let i = 0; i< slide.length; i++){
                dotParent.insertAdjacentHTML('afterbegin', '<li class="dot"></li>')
            }
        }
        addDot()
        const nextSlide = (elem, index, strClass) =>{
            elem[index].classList.add(strClass)
        }

        const autoPlaySlide = () =>{   
            dot = document.querySelectorAll('.dot'),
            prevSlide(slide, currentSlide, 'portfolio-item-active')
            prevSlide(dot, currentSlide, 'dot-active')
            slide[currentSlide].classList.remove('portfolio-item-active')
            currentSlide++;
            if(currentSlide >= slide.length){
                currentSlide = 0
            }
            slide[currentSlide].classList.add('portfolio-item-active')
            
            nextSlide(slide, currentSlide, 'portfolio-item-active')
            nextSlide(dot, currentSlide, 'dot-active')
        }

        const startSlide = (time = 3000) =>{
            interval = setInterval(autoPlaySlide, time);
        }

        const stopSlide = () =>{
            clearInterval(interval)
        };

        slider.addEventListener('click', (event) =>{
            event.preventDefault()
            let target = event.target
            dot = document.querySelectorAll('.dot');
            if(!target.matches('.portfolio-btn, .dot')){
                return
            }
            prevSlide(slide, currentSlide, 'portfolio-item-active')
            prevSlide(dot, currentSlide, 'dot-active')

            if(target.matches('#arrow-right')){
                currentSlide++;
            } else if (target.matches('#arrow-left')){
                currentSlide--;
            } else if(target.matches('.dot')){
                dot.forEach((elem, index) =>{
                    if(elem === target){
                        currentSlide = index
                    }
                })
            }
            if(currentSlide >= slide.length){
                currentSlide = 0
            }
            if(currentSlide < 0){
                currentSlide = slide.length - 1
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active')
            nextSlide(dot, currentSlide, 'dot-active')

        });

        slider.addEventListener('mouseover', (event)=>{
            if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', (event)=>{
            if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
                startSlide();
            }
        })

        startSlide(1500);
    }
    slider();


// наша команда
    let ourCompany = () =>{
        let img = document.querySelectorAll('.command__photo');
    
    
        for(let i = 0; i < img.length; i++){
            let src = img[i].src
            img[i].addEventListener('mouseenter', (e) =>{
                event.target.src = event.target.dataset.img
            })
            img[i].addEventListener('mouseout', (e) => {
                event.target.src = src
            })
        }
    }

    ourCompany()



    // блок рассчитать стоимость
    let calcItem = document.querySelectorAll('.calc-item')
        const onlyNum = function(){
            this.value = this.value.replace(/\D/g, '')
        }
        const onlyLetter = function(){
            this.value = this.value.replace(/[^А-Яа-яЁё\-( )]/g,'');
        }
        const email = function(){
            this.value = this.value.replace(/\w+@\w+\.\w{2,3}/)  
        }
        const phoneNum = function(){
            this.value = this.value.replace(/\+?[78]([-()]*\d){10}/g)
        }

        for(let i = 0; i < calcItem.length; i++){
            calcItem[i].addEventListener('input', onlyNum)
        };
    
        document.getElementById('form2-name').addEventListener('input', onlyLetter)
        document.getElementById('form2-message').addEventListener('input', onlyLetter)
        document.getElementById('form2-email').addEventListener('input', email)
        document.getElementById('form2-phone').addEventListener('input', phoneNum)


    // const string = `boss@yandex.ru
    // +79954106737 
    // 89371056613
    // 8(999)123-4356`
    // const email = string.match(/\w+@\w+\.\w{2,3}/) 
    // const mobile = string.match(/\+?[78]([-()]*\d){10}/g)
    // console.log(email)
    // console.log(mobile)



    // калькулятор
    const calc = (price = 100) =>{

            const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');

        const countSum = () =>{
            let total = 0,
                countValue = 1,
                dayValue = 1;

            const typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;


            
                if(calcCount.value > 1){
                    countValue += (calcCount.value - 1) / 10;
                }    

                if(calcDay.value && calcDay.value < 5){
                    dayValue *= 2
                } else if(calcDay.value && calcDay.value < 10){
                    dayValue *= 1.5
                }


            if(typeValue && squareValue){
                total = price * typeValue * squareValue * countValue * dayValue
            }
            
            

            totalValue.textContent = total
        }

        
        calcBlock.addEventListener('change', (event) =>{
            const target = event.target;

            if(target.matches('.calc-type') || target.matches('.calc-square') ||target.matches('.calc-day') || target.matches('.calc-count')){
                countSum()
            }
        });
    }
    calc(100);


    // send-ajax-form

    const sendForm = () =>{
        const errorMessage = 'Что то пошло не так...',
            loadMessage = 'Загрузка...',
            successMassage = 'Спасибо! Мы скоро с вами свяжемся!';

        const form = document.getElementById('form1');

        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 3rem;';
        form.appendChild(statusMessage)
        
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            form.appendChild(statusMessage);

            const request = new XMLHttpRequest();

            request.addEventListener('readystatechange', () =>{
                statusMessage.textContent = loadMessage;
                if(request.readyState !== 4){
                    return;
                }
                if(request.status === 200){
                    statusMessage.textContent = successMassage
                } else{
                    statusMessage.textContent = errorMessage;
                }
            });

            request.open('POST', './server.php');
            request.setRequestHeader('Content-Type', 'application/json');
            const formData = new FormData(form);
            let body = {};

            // for(let value of formData.entries()){
            //     body[value[0]] = value[1]
            // };

            formData.forEach((val, key) =>{
                body[key] = val
            })

            request.send(JSON.stringify(body));
        });
    };

    sendForm();
});
