import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
// import { HomeComponent } from './components/home/home.component';
// import { HeaderComponent } from './components/header/header.component';
// import { FoodCategoriesComponent } from './components/food-categories/food-categories.component';
// // import { NZ_I18N } from 'ng-zorro-antd/i18n';
// import { en_US } from 'ng-zorro-antd/i18n';
// import { registerLocaleData } from '@angular/common';
// import en from '@angular/common/locales/en';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { RecipesService } from './services/recipes.service';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { StyleTagDirective } from './directives/style-tag.directive';
import { RecipeComponent } from './components/recipe/recipe.component';
import { CategoryRecipesComponent } from './components/category-recipes/category-recipes.component';

// registerLocaleData(en);

// const routes: Routes = [
// ]
@NgModule({
  declarations: [
    AppComponent,
    SearchResultsComponent,
    RecipeDetailsComponent,
    CategoryRecipesComponent,
    StyleTagDirective,
    RecipeComponent

    /**
     * Main building blocks in angular..
     * 1- components
     * 2- Directives
     * 3- Pipes
     */

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    AppRoutingModule,
    FontAwesomeModule,
    IvyCarouselModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatDividerModule,
    MatTabsModule,
    MatStepperModule
  ],
  exports: [
  ],
  providers: [
    // 4- services
    // {provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true},
    RecipesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
