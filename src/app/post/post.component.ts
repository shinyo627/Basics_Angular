import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  // Parent must use 'img' the alias name of postImg of PostComponent
  @Input('img') postImg = '';
  @Output() imgSelected = new EventEmitter<string>();

  constructor() {
    console.log(`constructor() called`, this.postImg);
  }

  ngOnInit() {
    console.log(`ngOnInit() called`, this.postImg);
  }

  // Runs every time the component's property is changed in the component
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ngOnChanges()`);
  }
  // performs update that Angular may misses
  ngDoCheck(): void {
    console.log(`ngDoCheck() called`);
  }

  ngAfterContentChecked() {
    console.log(`ngAfterContentChecked() called`);
  }
  // Runs after content is initialized in a child component
  ngAfterContentInit() {
    console.log(`ngAfterContentInit() called`);
  }

  ngAfterViewChecked() {
    console.log(`ngAfterViewChecked() called`);
  }
  // Runs when children component's template is initialized
  ngAfterViewInit() {
    console.log(`ngAfterViewInit() called`);
  }

  // Runs after component is removed to prevent memory leak
  ngOnDestroy(): void {
    console.log(`ngOnDestroy() called`);
  }
}
