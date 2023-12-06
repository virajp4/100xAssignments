/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }
  add(todo) {
    this.todos.push({ index: this.todos.length, todoTitle: todo });
  }
  remove(index) {
    if (!(index >= this.todos.length)) {
      this.todos = this.todos.filter((todo) => todo.index !== index);
    }
  }
  update(index, updatedTodo) {
    if (!(index >= this.todos.length)) {
      this.todos[index].todoTitle = updatedTodo;
    }
  }
  getAll() {
    let todos = this.todos.map((todo, index) => this.get(index));
    return todos;
  }
  get(index) {
    if (this.todos[index]) {
      return this.todos[index].todoTitle;
    }
    return null
  }
  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
