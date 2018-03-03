import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import 'rxjs/add/operator/map';
import { Observer } from 'rxjs'
import { RecipeService } from './recipe.service';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class ServerService {

  constructor(
    private http: Http,
    private recipeService: RecipeService,
    private authService: AuthService
  ) { }

  saveRecipes(){
    const token = this.authService.getToken()
    return this.http.put('https://recipeapp-f9ef2.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes())
  }

  getRecipes(){
    const token = this.authService.getToken()

    return this.http.get('https://recipeapp-f9ef2.firebaseio.com/recipes.json?auth=' + token).map((response: Response) => {
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
