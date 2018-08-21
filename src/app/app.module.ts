import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// animation
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { SearchformComponent } from './searchform/searchform.component';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination/pagination.component';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentDetailsComponent } from './comment-details/comment-details.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

// routing et navigation
import { RecipesRoutingModule } from './/recipes-routing.module';

// simuler un service HTTP
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

// httpclient
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeDetailsComponent,
    SearchformComponent,
    PaginationComponent,
    SearchResultsComponent,
    CommentsComponent,
    CommentDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RecipesRoutingModule,
    HttpClientModule,
    // définir la base de données en mémoire dans le service simulé HTTP
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, delay : 500  }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

