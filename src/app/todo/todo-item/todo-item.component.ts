import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { ITodo } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: ITodo;
  @Input() status: string = 'pending';
  @Output() action = new EventEmitter();
  @Output() checkAction = new EventEmitter();

  iconName: string = "delete";

  handleTodo(): void {
    this.action.emit(this.todo);
  }

  handleCheck(): void {
    this.checkAction.emit(this.todo);
  }

  constructor() {}

  ngOnInit(): void {
    if (this.status == "done") {
      this.iconName = "uncheck";
    }
  }

}
