export default class TodoService {
  constructor(window) {
    this.STORAGE_ITEM = "todoListItem";
    this._window = window;
    this._storage = window.localStorage;
  }

  getList() {
    return this._storage.getItem(this.STORAGE_ITEM);
  }

  save(list) {
    return this._storage.setItem(this.STORAGE_ITEM, JSON.stringify(list));
  }

  updateTodo(todo) {
    const todoList = JSON.parse(this._storage.getItem(this.STORAGE_ITEM));

    const updatedTodoList = todoList.map((item) => {
      if (item.id == todo.id) {
        return todo;
      }
      return item;
    });

    this.save(updatedTodoList);
  }
}