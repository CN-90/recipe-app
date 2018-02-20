import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { NoRecipeComponent } from './components/recipes/no-recipe/no-recipe.component';


const appRoutes: Routes = [
  {path: '', redirectTo: 'recipes', pathMatch: 'full' },
  {path: 'recipes', component: RecipesComponent, children: [
    { path: "", component: NoRecipeComponent },
    { path: ':id', component: RecipeDetailComponent, data: {recipe: this.recipe} },
  ] },
  {path: 'shopping', component: ShoppingListComponent },
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