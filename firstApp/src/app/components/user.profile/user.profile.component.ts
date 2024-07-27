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
import { CommonModule } from '@angular/common';
import { CountrycodePipe } from '../../pipes/countrycode.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';

function formatUser(name: string) {
  return 'Hi' + name;
}
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule, CountrycodePipe, HighlightDirective],
  templateUrl: './user.profile.component.html',
  styleUrl: './user.profile.component.css',
})
export class UserProfileComponent {
  @Input({ alias: 'username' }) name: string = '';
  @Input({ transform: numberAttribute }) salary!: number;
  @Input({ transform: booleanAttribute }) isSingle!: boolean;
  @Input() user!: User;
  @Output() myEmitter = new EventEmitter<User>();
  // phno: number = 1234567;
  borderColor = 'blue';

  onClick(user: User) {
    this.myEmitter.emit(user);
  }
}
