import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: any;
  currentRecipe = null;
  currentIndex = -1;
  title = '';

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.retrieveRecipes();
  }

  retrieveRecipes(): void {
    this.recipeService.getAll()
      .subscribe(
        data => {
          this.recipes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveRecipes();
    this.currentRecipe = null;
    this.currentIndex = -1;
  }

  setActiveRecipe(recipe, index): void {
    this.currentRecipe = recipe;
    this.currentIndex = index;
  }

  removeAllRecipes(): void {
    this.recipeService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveRecipes();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.recipeService.findByTitle(this.title)
      .subscribe(
        data => {
          this.recipes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
