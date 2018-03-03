import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { NoRecipeComponent } from './components/recipes/no-recipe/no-recipe.component';
import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';
import { SignupComponent } from './auth/signup/signup.component';


export const appRoutes: Routes = [
  {path: '', redirectTo: 'recipes', pathMatch: 'full' },
  {path: 'recipes', component: RecipesComponent, children: [
    { path: "", component: NoRecipeComponent },
    { path: 'new', component: RecipeEditComponent},
    { path: ':id', component: RecipeDetailComponent},
    { path: ':id/edit', component: RecipeEditComponent},
  ] },
  {path: 'shopping', component: ShoppingListComponent },
  {path: 'signup', component: SignupComponent },
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