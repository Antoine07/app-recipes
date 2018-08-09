import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes';
import { MockRecipes } from './../mock-recipes';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  // définit l'animation pour le template 
  animations: [
    // recipeState cabler dans le template sur les li
    trigger('recipeState', [
      state('inactive', style({
        backgroundColor: '#fff',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#e3f2fd',
        transform: 'scale(1.05)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[] = MockRecipes; // les données 
  showRecipe: Recipe | null; // afficher une recette
  constructor() { }

  ngOnInit() {
    this.showRecipe = null; // à l'initialisation du template après le constructor
  }

  // si on sélectionne une recette on change le state de la recette et on 
  // assigne la valeur recipe à showRecipe pour l'afficher dans la sidebar
  onSelect(recipe: Recipe): void {
    recipe.toggleState();
    let timer = null ;
    this.showRecipe = recipe; 

    console.log(this.showRecipe);

    // timer pour remettre le state initiale
    timer = setInterval(() => {
      recipe.toggleState();
      clearInterval(timer);
    }, 1000);

  }

}
