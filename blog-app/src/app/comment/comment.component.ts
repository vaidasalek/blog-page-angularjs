import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

	comment = "Angular";
	
	postComment = [];
	
	post () {
		this.postComment.push(this.comment);
		this.comment = "";
	}
	
   constructor() { }

   ngOnInit(): void {
  }

}
