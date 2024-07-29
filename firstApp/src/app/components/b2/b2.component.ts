import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-b2',
  standalone: true,
  // providers: [CounterService],
  imports: [],
  templateUrl: './b2.component.html',
  styleUrl: './b2.component.css',
})
export class B2Component {
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
