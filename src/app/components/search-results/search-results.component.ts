import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { RecipesService } from './../../services/recipes.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  query;
  subscriber;
  recipesList = []
  keywords: string = ""
  valid = true
  faSearch = faSearch;

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipesService, private router: Router) {
    // console.log(activatedRoute.snapshot)
  }
  getResults = (keywords) => {
    this.subscriber = this.recipeService.searchRecipes(keywords)
      .subscribe((data: any) => {
        console.log("DATA", data)
        // this.recipeService.data = data.results
        sessionStorage.setItem("results", JSON.stringify(data.results))
        this.recipesList = data.results
      })
  }
  isValid(): Boolean {
    let pattern = /^[A-Za-z]/i
    return pattern.test(this.keywords)
  }
  handleSearch = () => {
    if (this.keywords === "") {
      // console.log("error", this.keywords)
      this.valid = false
    } else if (!this.isValid()) {
      this.valid = false
      // console.log("error", this.keywords)
    } else {
      // console.log(this.keywords)
      this.valid = true
      this.router.navigate(['results'], {
        queryParams: { q: this.keywords },
      });
      this.query = this.keywords
      this.getResults(this.keywords)
    }
  }
  goToDetails = (id) => {
    this.router.navigate([`recipe-details/${id}`]);
    this.recipeService.getRecipeInfoById(id, this.recipesList)
    // this.recipeService.data = this.recipesList
  }

  ngOnInit(): void {
    this.query = this.activatedRoute.snapshot.queryParams.q
    this.getResults(this.query)
  }
  ngOnDestroy(): void {
    this.subscriber.unsubscribe()
  }
  item = {
    id: "1",
    title: "chicken with Rice",
    image: "/assets/images/food.jpg",
    cuisines: ["American"],
    diets: [],
    readyInMinutes: 30
  }
}
