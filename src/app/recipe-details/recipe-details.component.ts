import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() recipe : Recipe;

  constructor(private mS : MessageService) { }

  // méthode appelée à l'initialisation du template après constructor
  ngOnInit() {}

  notice : string ;
  // à l'initialisation et dès qu'un input rentre
  ngOnChanges(){
    this.notice = `nombre de clique(s) ${this.mS.count}`;
  }
}