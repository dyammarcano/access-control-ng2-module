import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { NgaModule } from '../../../theme/nga.module';

import { Accounts } from './crud.component';
import { routing }       from './crud.routing';


@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    routing
  ],
  declarations: [
    Accounts
  ]
})
export default class AccountsModule {}
