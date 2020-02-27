import {Recipe} from './recipe.modal';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.modal';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {
    recipeSelected = new  EventEmitter<Recipe>();
    

    private recipes: Recipe[] = [
        new Recipe('name', 'desc', 'https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21-600x900.jpg', [
            new Ingredient('meat',1),
            new Ingredient('french fries', 10)
        ])
        , new Recipe('Another name', 'another desc', 'https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21-600x900.jpg', [
            new Ingredient('Buns', 4),
            new Ingredient('meat', 1)
        ])
      ];
      constructor(private slService: ShoppingListService){}
    getRecipe(){
        return this.recipes.slice();

    }
    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
        

    }

}
