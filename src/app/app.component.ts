import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Master';

  myArray: string[];

  constructor() { this.myArray=["Jeffrey is a decent teacher","This is going pretty well thus far","Hopefully I don't fuck this up too bad"]}

  private _test() { console.log("Hello, world!") }
}
