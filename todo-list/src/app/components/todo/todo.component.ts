import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  localItem: string | null;
  constructor() {
    // this.localItem = localStorage.getItem('todos');
    // if (this.localItem) this.todos = [];
    if (typeof window !== 'undefined') {
      this.localItem = localStorage.getItem('todos');
    } else {
      this.localItem = null;
    }

    if (this.localItem) {
      this.todos = JSON.parse(this.localItem);
    } else {
      this.todos = [];
    }
    // this.todos = [];
  }

  deleteTodo(todo: any) {
    console.log(todo);
    const newtodo = this.todos?.filter((item) => item !== todo);
    console.log(newtodo);
    this.todos = newtodo;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    this.todos?.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  checkboxTodo(todo: Todo) {
    console.log(todo, 'emitted');
    const todoIndex = this.todos?.indexOf(todo);
    if (todoIndex > -1) {
      this.todos[todoIndex].active = !this.todos[todoIndex].active;
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }

  ngOnInit(): void {}
}
