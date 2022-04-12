import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

import TodoList from "./TodoList";
import TodoService from "./services/TodoService";

export default function Home() {
  const [todoValue, setTodoValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    if (typeof window !== undefined) {
      const todoService = new TodoService(window);
      const todoListItem = todoService.getList();

      try {
        if (todoList.length == 0) {
          const jsonList = JSON.parse(todoListItem);
          setTodoList(jsonList);
        }
      } catch (e) {
        console.log(`Erro no parse do storage: ${e}`);
        todoService.save([]);
      }
    }
  }, []);

  useEffect(() => {
    if (!todoList){
      return;
    }
    if (todoList.length > 0) {
      const todoService = new TodoService(window);
      todoService.save(todoList);
    }
  }, [todoList]);

  const handleButtonClick = () => {
    if (todoValue) {
      const todo = {
        id: todoList.length + 1,
        title: todoValue,
        checked: false,
      };

      todoList.push(todo);

      setTodoList([...todoList]);
      setTodoValue("");
    }
  };

  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="input-tarefa" className="form-label"></label>
        <input
          type="text"
          className="form-control"
          id="input-tarefa"
          placeholder="Digite sua tarefa"
          onChange={(e) => setTodoValue(e.target.value)}
          value={todoValue}
        />
        <button
          type="submit"
          className="btn btn-primary mt-3"
          onClick={handleButtonClick}
        >
          Adicionar Tarefa
        </button>
      </div>

      <TodoList list={todoList} />
    </div>
  );
}