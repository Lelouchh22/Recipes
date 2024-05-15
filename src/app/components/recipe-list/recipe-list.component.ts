import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from 'src/app/services/spoonacular.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  ricette: any[] = [];


  constructor(public spoonacularService: SpoonacularService) {

  }

  ngOnInit(): void {
    this.spoonacularService.ricette$.subscribe(ricette => {
      this.ricette = ricette;
    })
  }

}
