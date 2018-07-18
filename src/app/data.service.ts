import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  cars = [
    'Ford', 'Chevrolet', 'Fiat'
  ];

  myDado() {
    return 'Este é o meu dado';
  }
}
