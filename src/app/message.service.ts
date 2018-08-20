import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  count: number = 0;
  constructor() { }

  notice(): string {
    return `Nombre de clique(s) : ${++this.count} `;
  }
}
