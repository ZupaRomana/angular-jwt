import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './containers/customers/customers.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [CustomersComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MatButtonModule
  ]
})
export class CustomersModule { }
