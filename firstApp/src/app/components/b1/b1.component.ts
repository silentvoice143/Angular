import { Component } from '@angular/core';
import { B2Component } from '../b2/b2.component';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-b1',
  standalone: true,
  providers: [CounterService],
  imports: [B2Component],
  templateUrl: './b1.component.html',
  styleUrl: './b1.component.css',
})
export class B1Component {
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
