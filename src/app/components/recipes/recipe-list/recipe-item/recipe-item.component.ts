import { Recipe } from './../../../../models/recipe.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe;
  @Output() recipeSelected = new EventEmitter<void>()

  onSelected(){
    this.recipeSelected.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
