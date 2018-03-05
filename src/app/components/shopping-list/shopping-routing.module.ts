import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list.component";

const shoppingRoutes: Routes = [
  {path: 'shopping', component: ShoppingListComponent },
  

]

@NgModule({
  imports: [],
})

export class ShoppingRoutingModule {}