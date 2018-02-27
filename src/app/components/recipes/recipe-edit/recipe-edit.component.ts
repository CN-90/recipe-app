import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { RecipeService } from '../../../services/recipe.service';
import { Recipe } from '../../../models/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  isEdit: boolean = false;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.isEdit = params['id'] != null;
        this.initForm();
      })
  }

  private initForm(){
    let recipeName = "";
    let recipeImage = "";
    let recipeDescription = ""
    let recipeIngredients = new FormArray([])
   
    if(this.isEdit){
      let recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImage = recipe.imagePath;
      recipeDescription = recipe.description;
      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required, 
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImage, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients
    })
  }

  onSubmit(){
    if(this.isEdit){
      // since this.recipeForm.value has all the same properties of a recipe it will be considered a recipe.
      this.recipeService.editRecipe(this.id, this.recipeForm.value)
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.router.navigate(["../"], {relativeTo: this.route})
  }

  addIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required, 
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    )
  }

  deleteIngredient(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

}
