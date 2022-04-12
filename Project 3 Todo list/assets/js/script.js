/*The item we are going to add has the following structure and classes (the classes are from bootstrap) */

{/* 
<li class='list-group'>
<div class="form-check">
<input class="form-check-input" type="checkbox" id="flexCheckDefault">
<label class="form-check-label" for="flexCheckDefault">
  Tarefa 1
</label>
</div> */}


const btn = document.getElementById('btn-list');

// Add a new task when user click the button
btn.addEventListener('click', () => {
  addTodoTask();
});

// Add a new taks when user click enter
window.addEventListener('keydown', (e) => {
  if (isEnterKeyPressed(e.code)){
    addTodoTask();
  }
})

function addTodoTask(){
  
  //only add an item if the user wrote something
  const task = getItem('#task');
  if (task.value){
    addTodo(task.value);
    //Add new task to local storage
    savedTodoList.push({title: task.value, done: false})
    //Clean the taks description
    task.value = '';
   
  }
 
}

function addTodo(value){

  const ul = getItem('#list');
  const listItem = document.createElement('li');
  listItem.classList.add('list-group');
 //Create an item as the commented html markut above
 const div = document.createElement('div');
 div.classList.add("form-check");

 const input = document.createElement('input');
 input.type = 'checkbox';
 input.classList.add("form-check-input" );
 input.onclick = function (){ return findCheckedInputs(this, listItem, label) };

 const label = document.createElement('label');
 label.classList.add('form-check-label');

 const taskDescription = document.createTextNode(value);
 label.appendChild(taskDescription);

 //The order matters! The first child is an input and the second a label!
 div.appendChild(input);
 div.appendChild(label);

 listItem.appendChild(div);

 ul.appendChild(listItem);
 
}

function findCheckedInputs(checkbox, listItem, label){
  //The added items are not saved in memory, because of that we add this function when create the input type checkbox element
  console.log('clicked');

  //Check if input checkbox is checked and remove it after one second
  if (checkbox.checked == true){
    console.log('checked');
    label.style.textDecoration = 'line-through';
    listItem.style.display = 'none';
  }

}


function isEnterKeyPressed(keyCode){
  return keyCode === 'Enter';
}

function getItem(item){
  return document.querySelector(item);
}

//TodoList to be saved
// const localTodoList = [
//   {
//     'title': "Tarefa armazenada",
//     done: true
//   },
//   {
//     'title': "Tarefa armazenada 2",
//     done: false
//   }
// ];

// Use local storage
const storage = window.localStorage;
const savedTodoList = JSON.parse(storage.getItem('todoList'));
console.log(savedTodoList);
savedTodoList.map((todo) => {
    addTodo(todo.title);
})


