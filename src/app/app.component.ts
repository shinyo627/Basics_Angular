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
  imageURL = `https://picsum.photos/id/237/500/500`;

  getName() {
    return this.name;
  }
}
