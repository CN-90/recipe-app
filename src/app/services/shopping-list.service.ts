import { Injectable, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { RecipeService } from './recipe.service';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class ShoppingListService implements OnInit {
  ingredientsChanged = new Subject<Ingredient[]>()
  editIngredient = new Subject<number>();
  ingredients: Ingredient[] = [
    new Ingredient('Lettuce', 31)
  ]

  constructor() {}

   ngOnInit(){}

  getIngredients(){
    return this.ingredients.slice();
  }

  
  getIngredient(id: number){
    return this.ingredients[id];
  }
  
  removeIngredient(id: number){
    this.ingredients.splice(id, 1);
    this.ingredientsChanged.next(this.ingredients.slice())
  }
  
  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice())
  }
  
  addToIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  
  updateIngredient(index: number, updatedIngredient: Ingredient){
    this.ingredients[index] = updatedIngredient;
    this.ingredientsChanged.next(this.ingredients.slice())    
  }
}
