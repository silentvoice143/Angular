import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user.profile/user.profile.component';
import { CommonModule } from '@angular/common';
import { User } from '../models/User';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserProfileComponent, CommonModule],
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
    {
      name: 'shivam',
      salary: 60000,
      isSingle: true,
    },
    {
      name: 'shu',
      salary: 60000,
      isSingle: true,
    },
  ];

  dataReacived(user: User) {
    console.log(user);
    const index = this.users.indexOf(user);
    console.log(index);
  }
}
