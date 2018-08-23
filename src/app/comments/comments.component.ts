import { Component, OnInit } from '@angular/core';
import { Comment } from '../comments';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments : Comment[] = [];

  constructor(private cS : CommentsService) { }

  ngOnInit() {
    this.comments = this.cS.getComments();
  }

}
