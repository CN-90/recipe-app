import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../../../services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params['id']
      this.recipe = this.recipeService.getRecipe(this.id);
    })
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }

  deleteRecipe(){
    this.recipeService.deleteRecipe(this.id)
    this.router.navigate(['../'])
  }
}
