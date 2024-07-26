# TodoList

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

`--------------------------------------#####################-------------------------------------`

# Angular Basics

# Angular

AngularJS is a JavaScript framework written in JavaScript.

## Why Choose AngularJS?

- Easy to Work With: AngularJS requires only basic knowledge of HTML, CSS, and JavaScript. You don’t need to be an expert; just bring your curiosity and creativity.
- Time-Saving Components: AngularJS allows you to work with reusable components, saving time and reducing unnecessary code. Components are the building blocks of your application.
- Ready-to-Use Templates: AngularJS leverages plain HTML templates, which it compiles and makes ready for use. No complex setup—just write your HTML and let AngularJS do the heavy lifting.
- Directives: AngularJS extends HTML with custom elements and attributes called directives. These enable you to create reusable components and define custom behaviors for your application. Directives make it easier to manipulate the DOM, handle events, and encapsulate complex UI logic within a single component.
- Single Page application.

## Adding bootstrap in Angular

- Install bootstrap first

```
npm i bootstrap jquery
```

- Open angular.json

```
"styles": [
              "src/styles.css",
              +"./node_modules/bootstrap/dist/css/bootstrap.min.css"
          ],
"scripts": [
             +"./node_modules/bootstrap/dist/js/bootstrap.js"
             +"./node_modules/jquery/dist/jquery.js"
          ],
```

# Some important file

**1. index.html**
Entry point of our application

```
<app-root></app-root>
```

This get changed with our html code

**2. app folder**

- **app.component.html:** This file is used to write html code inside it which will render on the screen.
- **app.component.css:** This file is used to write all the css for the app.component.html.
- **app.component.ts:**

```
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',  //it acts as component name
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html', // refers to html page
  styleUrl: './app.component.css' //refers to its styling
})
export class AppComponent {
  title = 'todo-list'; //all logics and variable
}
```

## Creating and adding component in angular

To create a component in angular we have to write command in terminal-

```
ng generate component components/componentname
```

Lets create a component todo path- components/todo/

```
ng generate component components/todo
```

It will create a folder inside the components folder named todo which contains following files.

```
todo---
    ---todo.component.html
    ---todo.component.ts
    ---todo.component.css
```

- **todo.component.ts:**

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo', //this tag is used to put this component anywhere
  standalone: true,
  imports: [], // this array is used to put all the components which are imported
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

}
//TodoComponent name is used to import it in another component
```

- **app.component.ts:** Let's import todo component in app component

```
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';//here imported

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoComponent],//here mentioned
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo-list';
}
```

## Directives

Directives are special marker on a DOM element (such as attribute, element, class, comments) that tell angular to do something with the DOM element.

- Core concept of angular.
- Manipulate th DOM.

- **Passing props and using directives**

```
<div class="list-group" *ngFor="let todo of todos">
  <app-todo-item
    [todo]="todo"
    (todoDelete)="deleteTodo($event)"
  ></app-todo-item>
</div>
```

- `Here *ngFor is directive used to loop the todos array.`
- `[todo]="todo" is used to pass the props.`
- `(todoDelete)="deleteTodo($event)" is a emitter emitted from todo-item-component. Which is passed to deleteTodo function of todo component.`

- **Catching props and using it**

```
<div class="my-3">
  <h3>{{ todo?.title }}</h3>
  <p>{{ todo?.desc }}</p>
  <button class="btn btn-danger" (click)="onClick(todo)">Delete</button>
</div>
```

- Here it is used directly. {{todo?.title}}
- click event is used to trigger onClick function to emit the todo.

```
import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input() todo?: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  onClick(todo: Todo | undefined) {
    if (todo) {
      this.todoDelete?.emit(todo); // emiting the todo
    }
    console.log('on click has been triggered');
  }
}
```

- Here @Input is used to catch the props passed to this component.
- @Output used to create a emitter to pass the todo to parent element to delete it.
