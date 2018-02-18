import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe('Terriyaki', "Sweet, delicious terriyaki chicken.",
    'http://del.h-cdn.co/assets/17/26/980x490/landscape-1498598755-teriyaki-chicken.jpg',
  [new Ingredient('Chicken Breasts', 6)]),
  new Recipe('Terriyaki', "Sweet, delicious terriyaki chicken.",
    'http://del.h-cdn.co/assets/17/26/980x490/landscape-1498598755-teriyaki-chicken.jpg',
  [new Ingredient('Terriyaki Sauce', 1)]),
    // new Recipe('Dank Nuggets', "Be careful not to OD!", 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/9/12/1/FN_Picky-Eaters-Chicken-Nuggets_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383770571120.jpeg')
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addToIngredients(ingredients)
  }

}
