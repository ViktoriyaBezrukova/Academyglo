'use strict';
const todoControl = document.querySelector('.todo-control'),
headerInput = document.querySelector('.header-input'),
todoList = document.querySelector('.todo-list'),
todoCompleted = document.querySelector('.todo-completed'),
headerButton = document.querySelector('.header-button'),
// let localTodo = localStorage.getItem('todoData'); 
// let todoData = localTodo ? JSON.parse(localTodo) : [];
todoData = [];

const render = function(){
    localStorage.setItem('todoData', JSON.stringify(todoData))
    let todoDataString = localStorage.getItem("todoData")
    todoList.textContent = ''
    todoCompleted.textContent = ''
    todoData.forEach(function(item){
        
        const li = document.createElement('li')
        li.classList.add('todo-item');
        li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
        '<div class="todo-buttons">' + '<button class="todo-remove"></button>' + '<button class="todo-complete"></button>' + '</div>';
        if(li === ''){
            headerButton.style.display = 'none'
        }else {
            if(item.completed){
            todoCompleted.append(li)
            headerInput.value = ''
        }else{
            todoList.append(li)
            headerInput.value = ''
        }        
    }       

            const btnTodoComplete = li.querySelector('.todo-complete');
            btnTodoComplete.addEventListener('click', function(){
                item.completed = !item.completed
                render();
            })
            function removeLi(){
                li.parentNode.removeChild(li)
            }
            const btnRemove = li.querySelector('.todo-remove')
                btnRemove.addEventListener('click', removeLi)    
    })
    todoData.push(JSON.parse(todoDataString))
};

    todoControl.addEventListener('submit', function(event){   
    event.preventDefault();
    const newTodo = {
        value: headerInput.value,
        completed: false    
    };
    
    todoData.push(newTodo) 
    render();
    
    // localStorage.setItem('todoData', JSON.stringify(todoData))
    // let todoDataString = localStorage.getItem("todoData")
    
    },
);


