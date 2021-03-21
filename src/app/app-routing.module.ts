import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
// import { HomeComponent } from './components/home/home.component';
// import { FoodCategoriesComponent } from './components/food-categories/food-categories.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { CategoryRecipesComponent } from './components/category-recipes/category-recipes.component';

const routes = [
  // { path: "", component: HomeComponent },
  { path: "", loadChildren: () => import("./home/home.module").then(m => m.HomeModule) },
  { path: "results", component: SearchResultsComponent },
  { path: "recipe-details/:id", component: RecipeDetailsComponent },
  { path: "recipes/:category", component: CategoryRecipesComponent }
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
