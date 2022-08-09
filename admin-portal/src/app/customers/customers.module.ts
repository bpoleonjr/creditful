import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { CustomersComponent } from './customers.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';

import { CustomersRoutingModule } from './customers-routing.module';

import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';

@NgModule({
  declarations: [
    CustomersComponent,
    ListCustomersComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    DxDataGridModule
  ]
})
export class CustomersModule { }
