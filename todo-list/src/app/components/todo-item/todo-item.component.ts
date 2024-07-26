import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  mark?: boolean;

  @Input() todo?: Todo;
  @Input() i?: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  onCheckboxClick(todo: Todo | undefined) {
    console.log(todo);
    if (todo) {
      this.todoCheckbox?.emit(todo);
    }
  }

  onClick(todo: Todo | undefined) {
    if (todo) {
      this.todoDelete?.emit(todo);
    }
    console.log('on click has been triggered');
  }
}
