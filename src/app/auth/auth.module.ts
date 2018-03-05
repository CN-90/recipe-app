import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    SignupComponent, 
    SigninComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
  ],
  exports: []
})

export class AuthModule {

}