import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipesListComponent} from './components/recipes-list/recipes-list.component';
import {RecipeDetailsComponent} from './components/recipe-details/recipe-details.component';
import {AddRecipeComponent} from './components/add-recipe/add-recipe.component';

const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesListComponent },
  { path: 'recipes/:id', component: RecipeDetailsComponent },
  { path: 'add', component: AddRecipeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
