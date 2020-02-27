import {Ingredient} from '../shared/ingredient.modal';
import { EventEmitter } from '@angular/core';



export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples',10),
        new Ingredient('Bananas', 24)
      ];

    getIngredient(){
        return this.ingredients.slice();   //via slice()  --> the copy of it returning

    }
    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
        
    }
    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
        

    }
}