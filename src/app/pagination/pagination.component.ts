import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipes';

// définition de la pagination qui sera émit par le component à son parent
class Paginate {
  start: number;
  limit: number;
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() recipes: Recipe[];
  @Output() changePage: EventEmitter<Paginate> = new EventEmitter();;

  pages: number[] = []; // numéro des pages
  itemsPerpage: number = 5; // fixer le nombre de recettes par page
  totalItems: number = 0;
  numberPages: number = 0;
  currentPage: number;

  constructor(private rS: RecipesService) {
    this.setParameters(this.rS.count()); // calcul des paramètres pour la pagination
  }

  ngOnInit() {
    for (let i = 1; i < this.numberPages + 1; i++) {
      this.pages.push(i);
    }
  }

  // non utilisé tout ce qui arrive du parent peut être récupérer ici
  ngOnChanges() {

  }

  /**
   * setParameters : définir les paramètres de la pagination
   * 
   * @param num 
   */
  setParameters(num: number): void {
    this.totalItems = num;
    this.numberPages = Math.ceil(this.totalItems / this.itemsPerpage);
    this.currentPage = 1;
  }

  next() {
    if (this.currentPage >= this.numberPages) {
      this.currentPage = 1;
    } else {
      this.currentPage++;
    }
    this.changePage.emit(this.paginate(this.currentPage)); // émettre la page courante
  }

  previous() {
    if (this.currentPage == 1) {
      this.currentPage = this.numberPages;
    } else {
      this.currentPage--;
    }
    this.changePage.emit(this.paginate(this.currentPage));
  }

  selectedPage(page: number) {
    this.currentPage = page;
    this.changePage.emit(this.paginate(this.currentPage));
  }

  paginate(page: number): Paginate {
    let paginate = new Paginate;

    paginate.start = (page - 1) * this.itemsPerpage;
    paginate.limit = this.itemsPerpage;

    return paginate;
  }
}