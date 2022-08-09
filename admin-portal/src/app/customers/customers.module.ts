import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { CustomersComponent } from './customers.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';

import { CustomersRoutingModule } from './customers-routing.module';

import { DxDataGridModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    CustomersComponent,
    CreateCustomerComponent,
    ListCustomersComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    DxDataGridModule
  ]
})
export class CustomersModule { }
