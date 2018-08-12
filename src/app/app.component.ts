import { Component } from '@angular/core';

import { interval, of } from 'rxjs';
import { takeWhile, mapTo, delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  counter = 0;
  experienceCounter = 0;

  selectedElement: string = null;
  techElementSelected: boolean;
  expierienceElementSelected: boolean;

  scrollInto = element => {
    this.selectedElement = element;
    this.techElementSelected = this.techElementSelected
      ? true
      : this.selectedElement === 'techClass';
    this.expierienceElementSelected = this.expierienceElementSelected
      ? true
      : this.selectedElement === 'expClass';

    const incomingElementObservable = of(1);
    const observablePiping = incomingElementObservable.pipe(delay(100));

    observablePiping.subscribe(val => {
      const e1 = document.getElementById(element);
      e1.scrollIntoView({ behavior: 'smooth' });

      if (element === 'techClass') {
        this.gitProjectsIncrementor();
      }

      if (element === 'expClass') {
        this.experienceCounterIncrementor();
      }
    });
  }

  gitProjectsIncrementor = () => {
    this.counter = 0;
    const source = interval(70);
    const takeWh = source.pipe(takeWhile(() => this.counter <= 55));
    takeWh.subscribe(() => (this.counter = this.counter + 1));
  }

  experienceCounterIncrementor = () => {
    this.experienceCounter = 0;
    const source = interval(250);
    const takeWh = source.pipe(takeWhile(() => this.experienceCounter < 7));
    takeWh.subscribe(
      () => (this.experienceCounter = this.experienceCounter + 1)
    );
  }

}
