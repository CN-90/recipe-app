import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()

export class AuthService {
  token: string;
  constructor(
    private router: Router  
  ){}

  signupUser(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch((err) => console.log(err));
  }

  signinUser(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        (response) => {
          firebase.auth().currentUser.getToken()
            .then(
              (token:string) => { 
                this.token = token
                this.router.navigate(['/'])
              }
            )
        }
      ).catch(
        err => console.log(err)
      )
      
  }

  getToken(){
    firebase.auth().currentUser.getToken() 
      .then(
        (token:string) =>  this.token = token
      )
    return this.token;
  }

  isAuthenticated(){
    return this.token != null;
  }

  logout(){
    firebase.auth().signOut();
    this.token = null;
  }
}