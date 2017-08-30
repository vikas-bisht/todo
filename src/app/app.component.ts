import { Component, OnInit } from '@angular/core';

import { todo } from './todo'
import { todoservice } from './todo.service';

@Component({
  selector:'todo',
  template : `
    <h1>Todo</h1>
    <p></p>
    <ul>
      <li *ngFor= "let w of mywork">
      {{w.id}} &nbsp; {{ w.name }}
      </li>
      </ul>
    `,
    providers: [todoservice]
})

export class AppComponent implements OnInit{
  mywork : todo[];
  constructor(private todoservice: todoservice){}

  getwork(): void{
    this.todoservice.getwork().then(mywork=>this.mywork=mywork);
  }
  ngOnInit():void{
    this.getwork();
  }
}
