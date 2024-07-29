import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JokesService {
  // http: HttpClient;
  // constructor(http: HttpClient) {
  //   this.http = http;
  // }
  // private http=inject(HttpClient)
  // ====alternative====
  constructor(private http: HttpClient) {}

  getJokes() {
    return this.http.get(
      'https://api.chucknorris.io/jokes/random?category=dev'
    );
    // .subscribe((data) => {
    //   console.log(data);
    // });
  }
}
