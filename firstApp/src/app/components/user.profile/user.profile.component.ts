import {
  booleanAttribute,
  Component,
  EventEmitter,
  Input,
  numberAttribute,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../models/User';

function formatUser(name: string) {
  return 'Hi' + name;
}
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user.profile.component.html',
  styleUrl: './user.profile.component.css',
})
export class UserProfileComponent {
  @Input({ alias: 'username' }) name: string = '';
  @Input({ transform: numberAttribute }) salary!: number;
  @Input({ transform: booleanAttribute }) isSingle!: boolean;
  @Input() user!: User;
  @Output() myEmitter = new EventEmitter<User>();

  onClick(user: User) {
    this.myEmitter.emit(user);
  }
}
