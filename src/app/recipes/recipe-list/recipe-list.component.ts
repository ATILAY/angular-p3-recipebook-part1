import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.modal';
import { RecipeService } from '../recipe.service';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  // recipes: Recipe[] = [
  //   new Recipe('name', 'desc', 'https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21-600x900.jpg')
  //   , new Recipe('Another name', 'another desc', 'https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21-600x900.jpg')
  // ];
  recipes: Recipe[];


  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipe();
  }
  // onRecipeSelected(recipe: Recipe){
  //   this.recipeWasSelected.emit(recipe);

  // }

}
