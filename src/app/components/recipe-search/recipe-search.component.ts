import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpoonacularService } from 'src/app/services/spoonacular.service';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.scss']
})
export class RecipeSearchComponent implements OnInit {
  query: string='';

  constructor(
    private spoonacularService:SpoonacularService,
    private router:Router
  ){}

  ricercaRicette(){
    this.spoonacularService.ricercaRicetta(this.query);
    this.router.navigate(['/recipes']);
  }
  ngOnInit(): void {

  }

}
