import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../components/home/home.component';
import { HeaderComponent } from '../components/header/header.component';
import { FoodCategoriesComponent } from '../components/food-categories/food-categories.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IvyCarouselModule } from 'angular-responsive-carousel';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FoodCategoriesComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule,
    IvyCarouselModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
