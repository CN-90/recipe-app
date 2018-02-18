import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { RecipeService } from './recipe.service';


@Injectable()
export class ShoppingListService implements OnInit {
  ingredientsChanged = new EventEmitter<Ingredient[]>()
  ingredients: Ingredient[] = [
    new Ingredient('Lettuce', 31)
  ]

  constructor() {
   }

   ngOnInit(){
   }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

  addToIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
