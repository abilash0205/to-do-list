//! lOGIN OR SIGNUP PAGE TOGGLER
const signUpLink = document.getElementById('signUpLink')
const signInSection = document.getElementById('signin')

const signInLink = document.getElementById('signInLink')
const signUpSection = document.getElementById('signup')

signUpLink.addEventListener('click', (event) => {
    event.preventDefault()
    signInSection.style.display = 'none'
    signUpSection.style.display = 'block'
})

signInLink.addEventListener('click', (event) => {
    event.preventDefault(); 
    signUpSection.style.display = 'none';
    signInSection.style.display = 'block';
});

const createBtn = document.getElementById('create-account')
function createAccount(){
    signUpSection.style.display = 'none';
    signInSection.style.display = 'block';
}

// ! ADDING AND DELETING TASK
function addTask() {
    const taskInput = document.getElementById('task');
    const task = taskInput.value;
    if(task){
    const taskList = document.getElementById('task-list')
    const li = document.createElement('li')
        li.innerHTML = `${task}<button onClick="deleteTask(this)" class="btn-danger px-3 py-2">Delete</button>`
        taskList.appendChild(li)
        taskInput.value = ''
        li.addEventListener('click', () => {
            li.style.textDecoration = 'line-through'
        })
    }
}

function deleteTask(el) {
    el.parentElement.remove()
}


//! FORM VALIDATION
const fun = (function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()