import { Routes, RouterModule }  from '@angular/router';

import { Accounts } from './accounts.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Accounts
  }
];

export const routing = RouterModule.forChild(routes);
