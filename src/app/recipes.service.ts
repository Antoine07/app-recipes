import { Injectable } from '@angular/core';
import { Recipe } from './recipes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  // définition des urls permettant la récupération des données
  private recipesUrl = 'api/recipes';
  // url permettant de récupérer le nombre de recette
  private countRecipesUrl = 'api/count'; 

  changePaginate = new Subject<number>(); // pour mettre à jour la pagination 

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipesUrl).pipe(
      map((recipes) => {
        // ordonner en fonction des stars
        recipes.sort((a, b) => {
          return a.stars - b.stars;
        });
        // ajouter la méthode toggleSStare
        recipes.map(recipe => recipe.toggleState = () => {
          recipe.state = recipe.state === 'active' ? 'inactive' : 'active';
        });

        return recipes;
      })
    );
  }

  getRecipe(id: number): Observable<Recipe> {
    const url = `${this.recipesUrl}/${id}`; // api permet ce genre de requête

    return this.http.get<Recipe>(url).pipe(
      map(recipe => { recipe.toggleState = () => { recipe.state = recipe.state === 'active' ? 'inactive' : 'active'; }; return recipe })
    );
  }

  search(word: string): Observable<Recipe[]> {
    let re = new RegExp(word, 'g');
    let results: Recipe[] = [];

    return this.http.get<Recipe[]>(this.recipesUrl).pipe(
      map(recipes => {
        recipes.map(recipe => {
          if (recipe.title.match(re)) {
            recipe.toggleState = () => { recipe.state = recipe.state === 'active' ? 'inactive' : 'active'; }
            results.push(recipe);
          }
        });

        return results;
      })
    );
  }

  count(): Observable<number> {
    return this.http.get<number>(this.countRecipesUrl);
  }

  /**
   * paginate méthode permettant de gérer la pagination
   * 
   * @param start 
   * @param end 
   */
  paginate(start: number, end: number): Observable<Recipe[]> {

    return this.http.get<Recipe[]>(this.recipesUrl).pipe(
      map(recipes => {
        // on doit ajouter la méthode toggleState à l'objet 
        recipes.map(recipe => recipe.toggleState = () => {
          recipe.state = recipe.state === 'active' ? 'inactive' : 'active';
        });
        // slide pour la pagination on ordonne avant par rapport au stars
        return recipes.sort((a, b) => { return b.stars - a.stars }).slice(start, (end + start));
      })
    );
  }


  sendNumberPage(page: number): void {
    return this.changePaginate.next(page);
  }
}