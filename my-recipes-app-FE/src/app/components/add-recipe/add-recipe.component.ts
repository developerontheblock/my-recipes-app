import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  recipe = {
    title: '',
    description: '',
    ingredients: '',
    cookingTime: '',
    difficulty: '',
    favoriteFlag: '',
    published: false
  };
  submitted = false;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  saveRecipe(): void {
    const data = {
      title: this.recipe.title,
      description: this.recipe.description,
      ingredients: this.recipe.ingredients,
      cookingTime: this.recipe.cookingTime,
      difficulty: this.recipe.difficulty,
      favoriteFlag: this.recipe.favoriteFlag
    };

    this.recipeService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newRecipe(): void {
    this.submitted = false;
    this.recipe = {
      title: '',
      description: '',
      ingredients: '',
      cookingTime: '',
      difficulty: '',
      favoriteFlag: '',
      published: false
    };
  }
}
