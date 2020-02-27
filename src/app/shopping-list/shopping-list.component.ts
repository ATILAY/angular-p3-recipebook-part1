import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.modal';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
  //ShoppingListService  is provided at app.module.ts
})
export class ShoppingListComponent implements OnInit {
  // ingredients: Ingredient[] = [
  //   new Ingredient('Apples',10),
  //   new Ingredient('Bananas', 24)
  // ];
  ingredients: Ingredient[];

  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredient();
    this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[])=>{
        this.ingredients = ingredients;
      }
    );

  }
  // onIngredientAdded(ingredient: Ingredient){
  //   this.ingredients.push(ingredient);
    

  // }

}
