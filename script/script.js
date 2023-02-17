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
            dotParent = document.querySelector('.portfolio-dots')

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

        const startSlide = (time) =>{
            setInterval(autoPlaySlide, time);
        }

        const stopSlide = () =>{

        }
        startSlide(1500);
    }
    slider();


});