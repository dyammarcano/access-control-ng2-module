import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-accounts',
  encapsulation: ViewEncapsulation.None,
  template: require('./department.html'),
  styles: [require('./department.scss')],
})
export class AccountsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
