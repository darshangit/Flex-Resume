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
  gitProjCounter = 0;

  selectedElement: string = null;

  techElementSelected: boolean;
  expierienceElementSelected: boolean;
  githubProjectsSelected: boolean;
  passionSelected: boolean;
  endSelected: boolean;

  scrollInto = element => {
    this.selectedElement = element;

    this.techElementSelected = this.techElementSelected
      ? true
      : this.selectedElement === 'techClass';

    this.expierienceElementSelected = this.expierienceElementSelected
      ? true
      : this.selectedElement === 'expClass';

    this.githubProjectsSelected = this.githubProjectsSelected
      ? true
      : this.selectedElement === 'gitProjClass';

    this.passionSelected = this.passionSelected
      ? true
      : this.selectedElement === 'passionsClass';

    this.endSelected = this.endSelected
      ? true
      : this.selectedElement === 'endClass';

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

      if (element === 'gitProjClass') {
        this.gitContributionsIncrementor();
      }
    });
  }

  gitProjectsIncrementor = () => {
    const source = interval(70);
    const takeWh = source.pipe(takeWhile(() => this.counter <= 55));
    takeWh.subscribe(() => (this.counter = this.counter + 1));
  }

  experienceCounterIncrementor = () => {
    const source = interval(650);
    const takeWh = source.pipe(takeWhile(() => this.experienceCounter < 7));
    takeWh.subscribe(
      () => (this.experienceCounter = this.experienceCounter + 1)
    );
  }

  gitContributionsIncrementor = () => {
    const source = interval(70);
    const takeWh = source.pipe(takeWhile(() => this.gitProjCounter < 400));
    takeWh.subscribe(() => (this.gitProjCounter = this.gitProjCounter + 10));
  }
}
