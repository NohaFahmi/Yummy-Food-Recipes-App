import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) {

  }
  public data: any;
  public filtered: any;
  private apiKey = "acc735d768424c2b8ebc8c39b9e2b564"
  private Base = "https://api.spoonacular.com/recipes/"
  private BaseURL = `${this.Base}complexSearch?apiKey=${this.apiKey}`

  // fillIngredients=true
  private paramsURL = 'cuisine=Italian,Chinese,American,French,Middle Eastern&instructionsRequired=true&addRecipeInformation=true&limitLicense=true&number=6'
  searchRecipes = (keywords) => {
    return this.http.get(`${this.BaseURL}&query=${keywords}&${this.paramsURL}`
      // , {
      //   observe: "response",
      //   responseType: 'json',
      // }

    )
  }
  getRecipeInfoById = (id, list) => {
    // console.log(id, list.filter(r => r.id === id), "DAta", this.data)
    this.filtered = list.filter(r => r.id === id)
    return list.filter(r => r.id === id)
  }
  getRecipeById = (id) => {
    return this.http.get(`${this.Base}${id}/information?apiKey=${this.apiKey}&includeNutrition=false`)
  }
  getRecipesByCuisine = (name) => {
    return this.http.get(`${this.BaseURL}&cuisine=${name}&&instructionsRequired=true&addRecipeInformation=true&limitLicense=true&number=6`)
  }

}
