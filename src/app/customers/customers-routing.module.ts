import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './containers/customers/customers.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class CustomersRoutingModule { }
