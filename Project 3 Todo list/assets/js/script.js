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
  const task = getItem('#task');
  const ul = getItem('#list');
  
  //only add an item if the user wrote something
  if (task.value){
    console.log('hello');
     const listItem = document.createElement('li');
     listItem.classList.add('list-group');
    //Create an item as the commented html markut above
    const div = document.createElement('div');
    div.classList.add("form-check");

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.classList.add("form-check-input" );

    const label = document.createElement('label');
    label.classList.add('form-check-label');

    const taskDescription = document.createTextNode(task.value);
    label.appendChild(taskDescription);

    //The order matters! The first child is an input and the second a label!
    div.appendChild(input);
    div.appendChild(label);

    listItem.appendChild(div);

    ul.appendChild(listItem);
    
    //Clean the taks description
    task.value = '';
  }
 
}

function isEnterKeyPressed(keyCode){
  return keyCode === 'Enter';
}

function getItem(item){
  return document.querySelector(item);
}

