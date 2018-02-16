import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentNavigation: string  = 'recipes'

  checkNavigation(event: string){
    this.currentNavigation = event;
  }
}
