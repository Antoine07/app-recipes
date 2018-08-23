import { Component, OnInit } from '@angular/core';
import { Comment } from '../comments';
import { CommentsService } from '../comments.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Comment[] = [];
  title_component: string;

  constructor(private route: ActivatedRoute, private cS: CommentsService) { }

  ngOnInit() {
    this.comments = this.cS.getComments();
    this.title_component = this.route.snapshot.data.title_component;
  }

}
