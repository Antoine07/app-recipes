import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() recipe : Recipe;

  constructor() { }

  // méthode appelée à l'initialisation du template après constructor
  ngOnInit() {}

  // à l'initialisation et dès qu'un input rentre
  ngOnChanges(){
    console.log(this.recipe); 
  }

}
  