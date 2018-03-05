import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RecipeService } from './services/recipe.service'; 
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingListService } from './services/shopping-list.service';
import { RouterModule } from '@angular/router';
import { AppRouterModule } from './app-router.module';
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { ServerService } from './services/server.service';

import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
// import { RecipeModule } from './components/recipes/recipe.module';
import { SharedModule } from './shared.module';
import { ShoppingListModule } from './components/shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // RecipeModule,
    AppRouterModule,
    SharedModule,
    ShoppingListModule,
    AuthModule
  ],
  providers: [ShoppingListService, RecipeService, ServerService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
