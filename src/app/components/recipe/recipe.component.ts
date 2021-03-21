import { Component, OnInit, Input } from '@angular/core';
import { faHeart, faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  details;
  cuisine;
  constructor() { }
  ngOnInit(): void {
    this.details = this.info
    let cuisinesList = ["American", "Italian", "Middle East", "French", "Chinese"]
    this.details.cuisines.map((c) => {
      cuisinesList.map((t) => {
        if (t === c) {
          return this.cuisine = c;
        }
      })
    })
    // console.log(this.cuisine, this.details.cuisines)
  }

  @Input("recipe") info;

  faHeart = faHeart
  faClock = faClock
}
