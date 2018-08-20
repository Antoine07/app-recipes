import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms'; // template-driven
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipes';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {

  submitted: boolean = false; // paramètre parfois utile dans la gestion des formulaires
  @Output() results: EventEmitter<Recipe[]> = new EventEmitter(); // émission des données vers le parent

  constructor(private rS: RecipesService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    this.results.emit(this.rS.search(form.value['word']));
  }
}
