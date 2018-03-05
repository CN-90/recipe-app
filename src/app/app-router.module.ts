import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';


export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', loadChildren: "./components/recipes/recipe.module#RecipeModule" },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  exports: [
    RouterModule,
  ]
})

export class AppRouterModule {
}