import { Component, OnInit, OnDestroy} from '@angular/core';
import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../../../services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = []
  subscription: Subscription;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.subscription = this.recipeService.recipeChanged.subscribe((recipes) => this.recipes = recipes)
  }

  newRecipe(){
    this.router.navigate(["new"], { relativeTo: this.route })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
