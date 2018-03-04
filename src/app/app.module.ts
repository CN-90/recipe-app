import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RecipeService } from './services/recipe.service'; 
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './components/shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListService } from './services/shopping-list.service';
import { RouterModule } from '@angular/router';
import { AppRouterModule } from './app-router.module';
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { ServerService } from './services/server.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { RecipeModule } from './components/recipes/recipe.module';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RecipeModule,
    AppRouterModule,
    SharedModule
  ],
  providers: [ShoppingListService, RecipeService, ServerService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
