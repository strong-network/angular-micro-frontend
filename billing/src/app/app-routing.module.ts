import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './billing/billing/billing.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'billing',
    pathMatch: 'full'
  },
  {
    path: 'billing',
    loadChildren: () => import('./billing/billing.module').then(m =>
 m.BillingModule)
    },
 ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
