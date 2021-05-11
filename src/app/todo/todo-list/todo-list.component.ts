import { Component, OnInit } from '@angular/core';

export interface ITodo {
  id: number;
  title: string;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  private idCounter = 1;
  todos: ITodo[] = [];
  doneTodos: ITodo[] = [];

  todoInput: string = '';

  addTodo() {
    this.todos.unshift({
      title: this.todoInput,
      id: this.idCounter++,
    });
    this.todoInput = '';
  }

  checkTodo(todo: ITodo) {
    this.deleteTodo(todo);
    this.doneTodos.push(todo);
  }

  uncheckTodo(todo: ITodo) {
    const indexTodo = this.doneTodos.indexOf(todo);
    if (indexTodo !== -1) {
      this.doneTodos.splice(indexTodo, 1);
      this.todos.push(todo);
    }
  }

  deleteTodo(todo: ITodo) {
    console.log(todo);
    const indexTodo = this.todos.indexOf(todo);
    console.log(indexTodo);
    if (indexTodo !== -1) {
      this.todos.splice(indexTodo, 1);
    }
  }

  constructor() {}

  ngOnInit(): void {
  }

}
