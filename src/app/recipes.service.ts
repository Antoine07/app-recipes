import { Injectable } from '@angular/core';
import { Recipe } from './recipes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  // définition de l'url en fonction de laconstante recipes dans in-memory-data.service
  private recipesUrl = 'api/recipes';
  private countRecipesUrl = 'api/count'; // compter le nombre de recipes

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
    const url = `${this.recipesUrl}/${id}`;

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

    let Recipes: Recipe[] = [];

    return this.http.get<Recipe[]>(this.recipesUrl).pipe(
      map(recipes => {

        recipes.map(recipe => recipe.toggleState = () => {
          recipe.state = recipe.state === 'active' ? 'inactive' : 'active';
        });

        for (let i = start; i < end + start; i++) {
          Recipes.push(recipes[i]);
        }

        return Recipes;
      })
    );
  }
}