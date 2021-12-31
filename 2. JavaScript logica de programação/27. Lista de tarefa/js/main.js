const inputUser = document.querySelector('#input-user');
const buttonAdd = document.querySelector('#btn-add');
const resultTarefas = document.querySelector('#lista-tarefa');

buttonAdd.addEventListener('click', () => {
    if (!inputUser.value) return;
    createTask(inputUser.value);
    clearAndFocusInput();
})

inputUser.addEventListener('keypress', (e) => {
    if (e.keyCode === 13){
        if (!inputUser.value) return;
        createTask(inputUser.value);
        clearAndFocusInput();
    }
})

document.addEventListener('click', (e) => {
    const el = e.target;
    if (el.getAttribute('id') === 'delete') {
        el.parentElement.remove();
        saveTask();
    }
})

function createButtonDelete(li){
    li.textContent += ' ';
    const buttonDelete = document.createElement('button')
    buttonDelete.textContent = 'Apagar';
    buttonDelete.setAttribute('id', 'delete');
    li.appendChild(buttonDelete);
}

function createTask(input) {
    const listItem = document.createElement('li');
    listItem.textContent = input;
    resultTarefas.appendChild(listItem);
    createButtonDelete(listItem)
    saveTask();
}

function saveTask() {
    const liTarefas = resultTarefas.querySelectorAll('li');
    const arrayTarefas = [];
    for(let i of liTarefas){
        let tarefaText = i.innerText;
        tarefaText = tarefaText.replace('Apagar', '').trim();
        arrayTarefas.push(tarefaText)
    }

    const tarefaJSON = JSON.stringify(arrayTarefas);
    localStorage.setItem( 'tarefas', tarefaJSON);
}

function addTaskSave() {
    const tasks = localStorage.getItem('tarefas');
    const arrayTarefas = JSON.parse(tasks);
    for (let i of arrayTarefas) {
        createTask(i)
    }
}

addTaskSave();

function clearAndFocusInput(){
    inputUser.value = '';
    inputUser.focus();
}