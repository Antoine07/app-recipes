import { Injectable } from '@angular/core';
import { Recipe } from './recipes';
import { MockRecipes } from './mock-recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipes: Recipe[] = MockRecipes;
  constructor() { }

  getRecipes(): Recipe[] {
    return this.recipes.sort((a, b) => { return a.stars - b.stars; });
  }

  getRecipe(id: number): Recipe | null {
    for (let recipe of this.recipes) {
      if (recipe.id === id) return recipe;
    }

    return null;
  }

  search(word: string): Recipe[] {
    let results: Recipe[] = [];
    let re = new RegExp(word, 'g')

    this.recipes.forEach(recipe => {
      if (recipe.title.match(re)) {
        console.log(recipe.title.match(re));
        results.push(recipe);
      }
    });

    return results;
  }
}