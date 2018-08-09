import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';

// animation
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    // importer le module dans les imports => rendre dispo le module dans l'app
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }