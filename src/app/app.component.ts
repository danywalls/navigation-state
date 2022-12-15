import { Component, VERSION } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(private r: ActivatedRoute) {
    this.r.fragment.subscribe((tag) => {
      const ele = document.querySelector('#' + tag);
      if (ele) {
        ele.scrollIntoView();
      }
    });
  }
}
