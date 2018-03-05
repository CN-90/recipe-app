import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";

const shoppingRoutes: Routes = [
  { path: 'shopping', component: ShoppingListComponent }
]

@NgModule({
  declarations: [
    ShoppingEditComponent,
    ShoppingListComponent
  ],
  imports: [    
    RouterModule.forChild(shoppingRoutes),
    CommonModule,
    FormsModule,
  ],
  exports: [
    RouterModule
  ]
})

export class ShoppingListModule {

}
