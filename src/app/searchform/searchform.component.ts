import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// formulaire
import { NgForm } from '@angular/forms';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipes';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {

  submitted: boolean = false;
  @Output() results: EventEmitter<Recipe[]> = new EventEmitter(); // en sortie

  constructor(private rS: RecipesService) { }

  ngOnInit() {
  }


  onSubmit(form: NgForm) {
    this.submitted = true;
    this.results.emit(this.rS.search(form.value['word']));
  }

}
