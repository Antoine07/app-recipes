import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes';
// import { MockRecipes } from './../mock-recipes';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MessageService } from '../message.service';
import { RecipesService } from '../recipes.service';

import { NgForm } from '@angular/forms';

class Comment{
  content : string ;
  constructor(content : string){ this.content = null ;}
}

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

  comment : Comment = new Comment('');

  recipes: Recipe[]; // les données 
  showRecipe: Recipe | null; // afficher une recette
  alignement: string = 'right';
  // gestion des notices pour l'affichage du message
  notice: string;

  constructor(private mS: MessageService, private rS: RecipesService) { }

  ngOnInit() {
    this.showRecipe = null;
    this.recipes = this.rS.getRecipes();
  }

  onSelect(recipe: Recipe): void {
    recipe.toggleState();
    this.showRecipe = this.rS.getRecipe(recipe.id);
    this.notice = this.mS.notice(); // notice
    let timer = setInterval(() => {
      recipe.toggleState();
      clearInterval(timer);
    }, 1000);
  }

  onSearch($event) {
    this.recipes = $event;
  }

  comments : Comment[] = [];

  onSubmit(form :NgForm){
    // console.log(form); // référence au formulaire

    // on récupère le nom du champ comme suit 
    this.comments.push(form.value['content']);
  }

}
