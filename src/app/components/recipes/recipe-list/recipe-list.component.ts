import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe('Dank Chicken Nuggets', "Be careful not to OD!", 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/9/12/1/FN_Picky-Eaters-Chicken-Nuggets_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383770571120.jpeg'),
    new Recipe('Dank Nuggets', "Be careful not to OD!", 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/9/12/1/FN_Picky-Eaters-Chicken-Nuggets_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383770571120.jpeg')
  ];

  onRecipeSelected(recipe){
    this.selectedRecipe.emit(recipe);
  }

  constructor() { }

  ngOnInit() {
  }

}
