import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AuthGuard } from "../../auth/auth-guard.service";
import { RecipesComponent } from "./recipes.component";
import { NoRecipeComponent } from "./no-recipe/no-recipe.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";


const recipeRoutes: Routes = [
  {path: 'recipes', component: RecipesComponent, children: [
    { path: "", component: NoRecipeComponent },
    { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
    { path: ':id', component: RecipeDetailComponent},
    { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]},
  ] },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(recipeRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class RecipeRoutingModule {}
