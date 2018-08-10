import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes';
import { MockRecipes } from './../mock-recipes';
import {trigger,state,style,animate,transition} from '@angular/animations';
import { MessageService } from '../message.service';

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
  alignement: string = 'right';
  // gestion des notices pour l'affichage du message
  notice: string;

  constructor(private mS: MessageService) { }

  ngOnInit() {this.showRecipe = null;}

  onSelect(recipe: Recipe): void {
    recipe.toggleState();
    this.showRecipe = recipe;
    this.notice = this.mS.notice(); // notice
    let timer = setInterval(() => {
      recipe.toggleState(); 
      clearInterval(timer);
    }, 1000);
  }
}
