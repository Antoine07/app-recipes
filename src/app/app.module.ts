import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';

// animation
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

// form pour la méthode search
import { SearchformComponent } from './searchform/searchform.component';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeDetailsComponent,
    SearchformComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    // importer le module dans les imports => rendre dispo le module dans l'app
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }