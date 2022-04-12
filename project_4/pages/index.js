import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import TodoList from "./TodoList";

export default function Home() {
  const [todoValue, setTodoValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  // Save the task at local storage
  useEffect(() => {
    if (typeof window !== undefined) {
      const todoListItem = localStorage.getItem("todoListItem");

      try{
        console.log(JSON.parse(todoListItem));
      }catch(e){
        window.localStorage.setItem("todoListItem", JSON.stringify([]))
      }
    }
  }, []);

  //Save a list at local storage everytime the user add a new task
  useEffect(() => {
    window.localStorage.setItem('todoListItem', JSON.stringify(todoList));
  }, [todoList]);

  const handleButtonClick = () => {
    setTodoList([...todoList, todoValue]);
    setTodoValue("");
  };

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="input-tarefa"
            placeholder="Digite sua tarefa"
            onChange={(e) => setTodoValue(e.target.value)}
          />
          {/* Disable Adicionar Tarefa if the user has not write anything */}
          {/* {todoValue ? (
            <button
              type="submit"
              className="btn btn-primary mt-3"
              onClick={handleButtonClick}
            >
              Adicionar Tarefa
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-primary mt-3"
              onClick={handleButtonClick}
              disabled
            >
              Adicionar Tarefa
            </button>
          )} */}
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
    </>
  );
}
