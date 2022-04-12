import {useState, useEffect} from  'react';
import updateTodo from './services/TodoService';

export default function TodoListItem({ todo, index }) {
  const [checked, setChecked] = useState(todo.checked);

  const handleClick = (e) => {
    const check = e.target.checked;

    setChecked(check);
    const newTodo = todo;

    updateTodo({
      id: newTodo.id,
      title: newTodo.title,
      checked: check
    });
  };

  return (
    <li className="list-group-item">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id={`checkbox-todo-` + index}
          onChange={handleClick}
          defaultChecked={checked}
        />
        <label className={`form-check-label ${checked ? 'todo-done' : ''}`}
              htmlFor={`checkbox-todo-` + index}>
          {todo.title}
        </label>
      </div>
    </li>
  );
}