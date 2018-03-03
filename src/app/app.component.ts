import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentNavigation: string  = 'recipes'

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDP9GLQ9UrwtE423Y9R56vSN6_iVjV7P3s",
      authDomain: "recipeapp-f9ef2.firebaseapp.com",
    })
  }

  checkNavigation(event: string){
    this.currentNavigation = event;
  }
}
