import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { CommentDetailsComponent } from './comment-details/comment-details.component';
import { RecipesComponent } from './recipes/recipes.component';

// les définitions des routes
const recipesRoutes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
    data: { title_component: 'Recipes' }
  },
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  },
  {
    path: 'comments',
    component: CommentsComponent,
    data: { title_component: 'tous les commentaires' }
  },
  {
    path: 'comment/:id',
    component: CommentDetailsComponent,
    data: { title_component: 'Un commentaire en particulier' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(recipesRoutes)],
  exports: [RouterModule] // exporter le module important pour y accéder dans l'application 
})
export class RecipesRoutingModule { }