import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { RecipeRoutingModule } from "./recipe-routing.module";

import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesComponent } from "./recipes.component";
import { NoRecipeComponent } from "./no-recipe/no-recipe.component";
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';

@NgModule({
  declarations: [
    RecipesComponent,
    NoRecipeComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipeRoutingModule,
    SharedModule
  ]
})

export class RecipeModule {
  
}