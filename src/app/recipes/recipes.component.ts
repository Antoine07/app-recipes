import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MessageService } from '../message.service';
import { RecipesService } from '../recipes.service';

import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentsService } from '../comments.service';
import { Comment } from '../comments';

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

  comment: Comment = new Comment('', '');

  recipes: Recipe[] = []; // les données 
  showRecipe: Recipe | null; // afficher une recette
  alignement: string = 'right';
  // gestion des notices pour l'affichage du message
  notice: string;
  title_component: string;

  constructor(
    private mS: MessageService,
    private rS: RecipesService,
    private route: ActivatedRoute, // injecter le module
    private cS: CommentsService,
    private router: Router // router 
  ) { }

  ngOnInit() {
    this.showRecipe = null;
    this.rS.paginate(0, 5).subscribe(
      recipes => this.recipes = recipes,
      error => console.error(error),
      () => console.log('Terminé !')
    );
    this.title_component = this.route.snapshot.data.title_component; // récupérez le titre 
  }

  onSelect(recipe: Recipe): void {
    recipe.toggleState();
    this.rS.getRecipe(recipe.id).subscribe(recipe => this.showRecipe = recipe);
    this.notice = this.mS.notice(); // notice
    let timer = setInterval(() => {
      recipe.toggleState();
      clearInterval(timer);
    }, 1000);
  }

  onSearch($event) {
    this.recipes = $event;
  }

  onSubmit(form: NgForm) {
    let id = this.cS.comments.length + 1;
    this.comment.content = form.value['content'];
    this.comment.title = form.value['title'];;
    this.comment.id = id;
    this.cS.addCommment(this.comment);

    this.router.navigate(['/comments']);
  }

  changePage($event) {
    this.rS.paginate($event.start, $event.limit).subscribe(
      recipes => this.recipes = recipes,
      error => console.error(`Chagement de page dans la pagination ${error} `)
    );
  }

}