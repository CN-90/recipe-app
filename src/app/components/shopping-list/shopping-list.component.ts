import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Dank Weed', 420),
    new Ingredient('Mushrooms', 5),
  ];
  constructor() { }

  ngOnInit() {
  }

  addToIngredients(ingredient: Ingredient){
    let newIngredient = new Ingredient(ingredient.name, ingredient.amount)
    this.ingredients.push(newIngredient);
  }

}
