import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  scrollInto(element) {
    console.log('ekement', element);
    const e1 = document.getElementById(element);
    e1.scrollIntoView({behavior: 'smooth'});
  }
}
