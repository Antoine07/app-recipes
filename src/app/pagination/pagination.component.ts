import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipes';

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

  @Input() recipes : Recipe[];
  @Output() changePage: EventEmitter<Paginate> = new EventEmitter();;

  pages: number[] = [];

  itemsPerpage: number = 5;
  totalItems: number = 0;
  numberPages: number = 0;
  currentPage: number;

  constructor(private rS: RecipesService) {
   this.total(this.rS.count());
  }

  ngOnInit() {
    for (let i = 1; i < this.numberPages + 1; i++) {
      this.pages.push(i);
    }
  }

  ngOnChanges(){
    
  }

  total(num : number):void{
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
    this.changePage.emit(this.paginate(this.currentPage));
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

    paginate.start = (this.currentPage - 1) * this.itemsPerpage;
    paginate.limit = this.itemsPerpage;

    return paginate;
  }
}