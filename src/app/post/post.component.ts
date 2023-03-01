import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  // Parent must use 'img' the alias name of postImg of PostComponent
  @Input('img') postImg = '';
  @Output() imgSelected = new EventEmitter<string>();
}
