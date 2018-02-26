import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { ShoppingListService } from './../../../services/shopping-list.service';
import { Ingredient } from '../../../models/ingredient.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  editMode: boolean = false;
  editedItemIndex: number;
  subscription: Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(){
    this.subscription = this.slService.editIngredient
      .subscribe((index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        let ingredient = this.slService.getIngredient(index);
        this.slForm.setValue({
          name: ingredient.name,
          amount: ingredient.amount
        })
      })
  }

  onSubmit(myForm: NgForm){
    let newIngredient = new Ingredient(myForm.value.name, myForm.value.amount)
    if(this.editMode){
      this.editMode = false;
      this.slService.updateIngredient(this.editedItemIndex, newIngredient)
    } else {
      this.slService.addIngredient(newIngredient)
    }
    myForm.reset();
  }

  clearForm(){
    this.slForm.reset();
    this.editMode = false;
  }

  removeIngredient(){
    this.slService.removeIngredient(this.editedItemIndex)
    this.editMode = false;
    this.slForm.reset();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
