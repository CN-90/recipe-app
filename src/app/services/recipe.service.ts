import { Injectable } from '@angular/core';
import { Recipe } from './../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  // recipeSelected = new Subject<Recipe>()
  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Terriyaki', "Sweet, delicious terriyaki chicken.",
    'http://del.h-cdn.co/assets/17/26/980x490/landscape-1498598755-teriyaki-chicken.jpg',
  [new Ingredient('Chicken Breasts', 6)]),
  new Recipe('Terriyaki', "Sweet, delicious terriyaki chicken.",
    'http://del.h-cdn.co/assets/17/26/980x490/landscape-1498598755-teriyaki-chicken.jpg',
  [new Ingredient('Terriyaki Sauce', 1), new Ingredient('Chicken Breast', 8)]),
    // new Recipe('Dank Nuggets', "Be careful not to OD!", 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/9/12/1/FN_Picky-Eaters-Chicken-Nuggets_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383770571120.jpeg')
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addToIngredients(ingredients);
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  editRecipe(index: number, recipe: Recipe){
    this.recipes[index] = recipe;
    this.recipeChanged.next(this.recipes.slice())
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice())
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }

}
