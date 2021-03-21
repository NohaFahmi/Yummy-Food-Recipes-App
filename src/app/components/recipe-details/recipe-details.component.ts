import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faHeart, faClock, faUser, faConciergeBell } from '@fortawesome/free-solid-svg-icons';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipesService) { }
  private id;
  public recipe;
  public imgURL = ''
  // public detailedRecipe;
  public ingredients = []
  public instructions = []
  subscriber;
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id
    let results = JSON.parse(sessionStorage.getItem("results"))
    // console.log(results)
    let recipe = results.filter(r => r.id == this.id)
    this.recipe = recipe[0]
    // this.recipe.analyzedInstructions[0].steps.map((s) => {
    //   console.log(s.ingredients)
    //   this.ingredients = [...this.ingredients, ...s.ingredients]
    // })
    this.subscriber = this.recipeService.getRecipeById(this.id)
      .subscribe((data: any) => {
        // console.log("DATA", data)
        this.ingredients = data.extendedIngredients
        this.instructions = data.analyzedInstructions[0].steps
        // console.log(this.ingredients)
        // console.log(this.instructions)
      })



    // console.log(this.recipeService.filtered, this.recipeService.data)
    // this.recipe = this.recipeService.filtered[0]
    // console.log(this.recipe)

  }
  ngOnDestroy(): void {
    this.subscriber.unsubscribe()
  }
  faClock = faClock
  faUser = faUser
  faConciergeBell = faConciergeBell
}
