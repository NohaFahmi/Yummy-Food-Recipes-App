import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-categories',
  templateUrl: './food-categories.component.html',
  styleUrls: ['./food-categories.component.css']
})
export class FoodCategoriesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  images = [
    { path: "assets/images/cuisines/american.jpg", name: "american" },
    { path: "assets/images/cuisines/italian.jpg", name: "italian" },
    { path: "assets/images/cuisines/chinese.jpg", name: "chinese" },
    { path: "assets/images/cuisines/french.jpg", name: "french" },
    { path: "assets/images/cuisines/middleEast.jpg", name: "middle east" },
  ]
  goToCategory = (img) => {
    this.router.navigate([`recipes/${img.name}`]);
  }
}
