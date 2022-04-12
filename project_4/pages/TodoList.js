import styles from '../styles/TodoList.module.css'

import TodoListItem from "./TodoListItem";

export default function TodoList({ list }) {
  if (list === null){
    return (<p className={`badge ${styles.corAzul}`}>Você ainda não tem tarefas</p>)
  }
  return list.length == 0 ? (
    <p className={`badge ${styles.corAzul}`}>Você ainda não tem tarefas</p>
  ) : (
    <ul className="list-group">
      {list.map((todo, index) => {
        return <TodoListItem todo={todo} index={index} key={index} />;
      })}
    </ul>
  );
}