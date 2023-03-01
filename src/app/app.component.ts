// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'basics';
// }
import { Component } from '@angular/core';
@Component({
  selector: `app-root`,
  // template: `<p>Hello world!</p>`,
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.css`],
  // styles: [``]
})
export class AppComponent {
  name = 'Yoz';
  imgURL = `https://picsum.photos/id/237/500/500`;

  getName() {
    return this.name;
  }

  changeImage(e: KeyboardEvent) {
    this.imgURL = (e.target as HTMLInputElement).value;
  }
}
