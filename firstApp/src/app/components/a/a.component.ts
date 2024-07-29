import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css',
})
export class AComponent {
  constructor(private CountService: CounterService) {}

  getCount() {
    return this.CountService.getCounter();
  }
  incCounter(value: number) {
    this.CountService.setCounter(() => {
      return value;
    });
  }
}
