import { NgModule } from "@angular/core";

import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { SharedModule } from "../shared.module";
import { AppRouterModule } from "../app-router.module";
import { ShoppingListService } from "../services/shopping-list.service";
import { RecipeService } from "../services/recipe.service";
import { ServerService } from "../services/server.service";
import { AuthService } from "../auth/auth.service";
import { AuthGuard } from "../auth/auth-guard.service";

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    SharedModule,
    AppRouterModule
  ],
  exports: [
    AppRouterModule, 
    HeaderComponent
  ],
  providers: [
    ShoppingListService, 
    RecipeService, 
    ServerService, 
    AuthService, 
    AuthGuard
  ]
})

export class CoreModule {}