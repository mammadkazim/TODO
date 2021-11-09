(function(){

    function createAppTitle (title) {
    let appTitle = document.createElement('h2');
    appTitle.innerHTML = title;
    return appTitle;
};

    function createTodoForm(){
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');
        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = 'write the name of the new task here';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.innerHTML = 'add a new task';
                                
        form.append(input);
        form.append(buttonWrapper);
        buttonWrapper.append(button);


        return{
            form,
            input,
            button,
        };

    };

    function createTodoList(){
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    };

    function createTodoApps(container, title){
    let todoAppTitle = createAppTitle(title);
    let todoForm = createTodoForm();
    let todoList = createTodoList();

    container.append(todoAppTitle);
    container.append(todoForm.form);
    container.append(todoList);
    container.style.margin = '30px 70px';

    function createTodoItem(name){
        let item = document.createElement('li');
        let buttonsWrapper = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');
    
        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        item.textContent = name;
        buttonsWrapper.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', 'btn-success');
        deleteButton.classList.add('btn', 'btn-danger');
        doneButton.textContent = 'done';
        deleteButton.textContent = 'delete';
    
        buttonsWrapper.append(doneButton);
        buttonsWrapper.append(deleteButton);
        item.append(buttonsWrapper);
    
        return{
            item,
            doneButton,
            deleteButton,
        }
    };
    todoForm.form.addEventListener('submit', function (e){
        e.preventDefault();
        if (!todoForm.input.value){
            return;
        };

        let todoItem = createTodoItem(todoForm.input.value);
        todoItem.doneButton.addEventListener('click', function(){
            todoItem.item.classList.toggle('list-group-item-success');
        });
        todoItem.deleteButton.addEventListener('click', function(){
           if (confirm('delete?')){
               todoItem.item.remove();
           };
        });
        todoList.append(todoItem.item);
        todoForm.input.value = '';
    });
};
window.createTodoApps = createTodoApps;

}) ();

function saveToLocal(){
    let storedInput = localStorage.getItem('textinput');
    if(input){
    form.textContent = storedInput;
    };
    input.addEventListener('input', letter => {
        form.textContent = letter.target.value
    });
    function saveToLocalStorage() {
        localStorage.setItem('input', form.textContent);
    }
    button.addEventListener('click',saveToLocalStorage);
            };
    saveToLocal ();