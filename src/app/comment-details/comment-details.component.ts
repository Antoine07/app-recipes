import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../comments';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  comment: Comment;
  title_component : string ;
  constructor(private route: ActivatedRoute, private cS : CommentsService) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id') - 1;
    this.comment = this.cS.getComment(id);

    this.title_component = this.route.snapshot.data.title_component;
  }

}