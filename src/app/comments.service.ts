import { Injectable } from '@angular/core';

import { MockComments } from './mock-comments';
import { Comment } from './comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  comments: Comment[] = MockComments; // récupération des données d'exemple

  constructor() { }

  getComments(): Comment[] {
    return this.comments;
  }

  getComment(id: number): Comment {
    return this.comments[id];
  }

  // ajouter un commentaire
  addCommment(comment: Comment): void {
    this.comments.push(comment);
  }
}