import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'na-content-top',
  template: `
  <ng-container>
    <na-breadcrumb></na-breadcrumb>
    <ng-content></ng-content>
  </ng-container>
  `,
  styles: [`
    :host{
      display: flex;
      align-items: center;
      height: 64px;
      margin: 0 24px -24px 24px;
    }
  `],
})
export class NaContentTopComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
