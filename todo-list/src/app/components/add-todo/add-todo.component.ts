import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css',
})
export class AddTodoComponent {
  title?: string;
  description?: string;

  //creating a emitter to add todo in parent element

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  onSubmit() {
    const todo = {
      sno: 0,
      title: this.title,
      desc: this.description,
      active: true,
    };
    this.todoAdd.emit(todo);
    console.log('submitted', todo);
  }
}
