import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  myArray:string[];

  constructor(){
    this.myArray = ["test","test2","hello"];
  }

  private _test() {
    console.log("Hello, world!")
  }

}