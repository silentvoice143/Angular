import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  count: number = 0;

  constructor() {}

  getCounter() {
    return this.count;
  }

  setCounter(counterSetter: any) {
    this.count = this.count + counterSetter();
  }
}
