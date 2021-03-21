import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-category-recipes',
  templateUrl: './category-recipes.component.html',
  styleUrls: ['./category-recipes.component.css']
})
export class CategoryRecipesComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipesService, private router: Router) { }
  recipesList = []
  name;
  subscriber;
  goToDetails = (id) => {
    this.router.navigate([`recipe-details/${id}`]);
    this.recipeService.getRecipeInfoById(id, this.recipesList)
  }
  getResults = (category) => {
    this.subscriber = this.recipeService.getRecipesByCuisine(category)
      .subscribe((data: any) => {
        // console.log("DATA", data)
        // this.recipeService.data = data.results
        sessionStorage.setItem("results", JSON.stringify(data.results))
        this.recipesList = data.results
      })
  }
  ngOnInit(): void {
    this.name = this.activatedRoute.snapshot.params.category
    // console.log(this.name)
    this.getResults(this.name)
  }
  ngOnDestroy(): void {
    this.subscriber.unsubscribe()
  }

}
