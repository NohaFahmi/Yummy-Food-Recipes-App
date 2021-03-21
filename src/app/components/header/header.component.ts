import { Component, OnInit, OnDestroy } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { RecipesService } from './../../services/recipes.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) {
  }
  results;
  subscriber;
  keywords: string = ""
  valid = true

  isValid(): Boolean {
    let pattern = /^[A-Za-z]/i
    return pattern.test(this.keywords)
  }
  handleSearch = () => {
    // console.log(this.keywords)
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
    }
  }
  ngOnInit(): void {
    // console.log(this.router.url)
  }

  faSearch = faSearch;

}
