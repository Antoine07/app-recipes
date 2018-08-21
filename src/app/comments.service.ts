import { Injectable } from '@angular/core';
import { Comment } from './comments';
import { HttpClient } from '@angular/common/http';
import { MockComments } from './mock-comments'

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  comments: Comment[] = MockComments; // récupération des données d'exemple

  constructor(private http: HttpClient) { }

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