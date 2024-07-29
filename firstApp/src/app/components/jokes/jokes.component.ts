import { Component } from '@angular/core';
import { JokesService } from '../../services/jokes.service';

@Component({
  selector: 'app-jokes',
  standalone: true,
  imports: [],
  templateUrl: './jokes.component.html',
  styleUrl: './jokes.component.css',
})
export class JokesComponent {
  joke!: 'loading....';
  constructor(private JokeService: JokesService) {}
  ngOnInit(): void {
    this.getaJoke();
  }

  getaJoke() {
    // this.JokeService.getJokes().subscribe(
    //   (data: any) => {
    //     console.log(data);
    //     this.joke = data.value;
    //   },
    //   (err) => {
    //     console.log('Error', err);
    //   }
    // );
    this.JokeService.getJokes().subscribe({
      next: (data: any) => (this.joke = data.value),
      error: (err) => console.log('error', err),
    });
  }
}
