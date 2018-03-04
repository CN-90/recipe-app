import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';


export const appRoutes: Routes = [
  {path: '', redirectTo: 'recipes', pathMatch: 'full' },
  {path: 'shopping', component: ShoppingListComponent },
  {path: 'signup', component: SignupComponent },
  {path: 'signin', component: SigninComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRouterModule {
}