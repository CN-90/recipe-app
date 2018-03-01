import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from '../models/recipe.model';
import 'rxjs/add/operator/map';
import { Observer } from 'rxjs'

@Injectable()
export class ServerService {

  constructor(
    private http: Http,
    private recipeService: RecipeService
  ) { }

  saveRecipes(){
    return this.http.put('https://recipeapp-f9ef2.firebaseio.com/recipes.json', this.recipeService.getRecipes())
  }

  getRecipes(){
    return this.http.get('https://recipeapp-f9ef2.firebaseio.com/recipes.json').map((response: Response) => {
      const recipes: Recipe[] = response.json(); 
      for(let recipe of recipes){
        if(!recipe['ingredients']){
          console.log(recipe)
          recipe['ingredients'] = [];
        }
      }
      return recipes
    }).subscribe((recipes: Recipe[]) => {
       this.recipeService.setRecipes(recipes);
    })
  }
}
