import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toRepeat = []
  currentColor = ""
  console(color, test){
    this.toRepeat.push({color: color.value,text: test.value})
  }
 
}
