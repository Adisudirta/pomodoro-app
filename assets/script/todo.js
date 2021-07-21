const form = document.getElementsByTagName('form')[0];
const inputPlace = document.querySelector('#input_place');
const container = document.querySelector('#list_container');

//cegah kondisi default ketika submit form
form.addEventListener('submit', function(e){
    e.preventDefault();
    createTodo(inputPlace.value);
});

//buat todo list
function createTodo(text){
    const liTodo = document.createElement('li');
    const closeButton = document.createElement('button');
    closeButton.innerHTML = 'X';
    closeButton.classList.add('close');
    const textTodo = document.createTextNode(text);

    liTodo.appendChild(textTodo);
    textTodo.after(closeButton);
    container.appendChild(liTodo);
}

//saring element yang ditargetkan
container.addEventListener('click', function(e){
    if( e.target.className == 'close' ){
        deleteTodo(e.target);
    }
});

//hapus todo list
function deleteTodo(elmnt){ 
    elmnt.parentElement.parentElement.removeChild(elmnt.parentElement);
}