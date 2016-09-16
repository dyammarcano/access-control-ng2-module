import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { NgaModule } from '../../../theme/nga.module';

import { Accounts } from './accounts.component';
import { routing }       from './accounts.routing';


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
