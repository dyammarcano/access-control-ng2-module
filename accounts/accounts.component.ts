import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-accounts',
  encapsulation: ViewEncapsulation.None,
  template: require('./accounts.html'),
  styles: [require('./accounts.scss')],
})
export class AccountsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
