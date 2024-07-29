import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user.profile/user.profile.component';
import { CommonModule } from '@angular/common';
import { User } from '../models/User';
import { JokesComponent } from './components/jokes/jokes.component';
import { AComponent } from './components/a/a.component';
import { B1Component } from './components/b1/b1.component';
import { B2Component } from './components/b2/b2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserProfileComponent,
    CommonModule,
    JokesComponent,
    AComponent,
    B1Component,
    B2Component,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'firstApp';

  users: any = [
    {
      name: 'satyam',
      salary: 60000,
      isSingle: true,
    },
    // {
    //   name: 'shivam',
    //   salary: 60000,
    //   isSingle: true,
    // },
    // {
    //   name: 'shu',
    //   salary: 60000,
    //   isSingle: true,
    // },
  ];

  dataReacived(user: User) {
    console.log(user);
    const index = this.users.indexOf(user);
    this.users[index].salary = 80000;
    console.log(index);
  }

  clear() {
    this.users = [];
  }
}
