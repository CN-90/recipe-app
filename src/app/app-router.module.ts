import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { NoRecipeComponent } from './components/recipes/no-recipe/no-recipe.component';
import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';


export const appRoutes: Routes = [
  {path: '', redirectTo: 'recipes', pathMatch: 'full' },
  {path: 'recipes', component: RecipesComponent, children: [
    { path: "", component: NoRecipeComponent },
    { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
    { path: ':id', component: RecipeDetailComponent},
    { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]},
  ] },
  {path: 'shopping', component: ShoppingListComponent },
  {path: 'signup', component: SignupComponent },
  {path: 'signin', component: SigninComponent },
]

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes)
  ],
  exports: [
    // RouterModule
  ]
})

export class AppRouterModule {
}