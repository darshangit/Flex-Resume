import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  counter = 0;

  scrollInto(element) {
    this.counter = 0;
    console.log('ekement', element);
    const e1 = document.getElementById(element);
    e1.scrollIntoView({behavior: 'smooth'});


    const source = interval(70);
    const takeWh = source.pipe(takeWhile(() => this.counter <= 55));
    takeWh.subscribe(val => this.counter = this.counter + 1);
    }
  }

