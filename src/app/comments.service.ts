import { Injectable } from '@angular/core';
import { Comment } from './comments';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  comments: Comment[] = []; // récupération des données d'exemple
  commentsUrl = './comments.json';

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