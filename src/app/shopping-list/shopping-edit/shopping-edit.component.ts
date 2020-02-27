import { Component,EventEmitter, OnInit, ElementRef, ViewChild, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.modal';
import { ShoppingListService } from '../shopping-list.service';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput',{static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<{name:string, amount:number}>();
  
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {

  }
  onAddItem(){
    const ingN = this.nameInputRef.nativeElement.value;
    const ingA = this.amountInputRef.nativeElement.value;

    const newIng = new  Ingredient(ingN, ingA);

    // this.ingredientAdded.emit(newIng);
    
    this.slService.addIngredient(newIng);
    

    
  }

}
