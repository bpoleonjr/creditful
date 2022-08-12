import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, map, tap } from 'rxjs';

import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';

import { Customer } from 'src/app/interfaces/customer';
import { ExtCustomer } from 'src/app/interfaces/ext-customer';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {
  dataSource: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<ExtCustomer[]>(`${environment.api_url}/customers.json?key=${environment.api_key}`)
    //this.http.get<ExtCustomer[]>(`assets\\customers.json`)
      .pipe(
        tap(data => console.log(data)),
        map((ext_customers: ExtCustomer[]) => {
          return ext_customers.map(extCustomer => ({
            customer_number: extCustomer.customer_number,
            first_name: extCustomer.first_name,
            last_name: extCustomer.last_name,
            date_birth: new Date(Date.parse(extCustomer.date_birth)),
            age: Math.floor((Math.abs(Date.now() - new Date(Date.parse(extCustomer.date_birth)).getTime()) / (1000 * 3600 * 24)) / 365.25),
            ssn: extCustomer.ssn,
            last4ofssn: extCustomer.ssn?.slice(7),
            email: extCustomer.email,
            address_line_1: extCustomer.primary_address.address_line_1,
            city: extCustomer.primary_address.city,
            state: extCustomer.primary_address.state,
            zip_code: extCustomer.primary_address.zip_code,
            mobile_phone_number: extCustomer.mobile_phone_number,
            join_date: new Date(Date.parse(extCustomer.join_date))
          } as Customer))
        }))
      .subscribe(data => this.dataSource = data);
  }

  onRowInserting(event: any): void {
    event.data = ({
      customer_number: event.data.customer_number,
      first_name: event.data.first_name,
      last_name: event.data.last_name,
      date_birth: new Date(Date.parse(event.data.date_birth)),
      age: Math.floor((Math.abs(Date.now() - new Date(Date.parse(event.data.date_birth)).getTime()) / (1000 * 3600 * 24)) / 365.25),
      ssn: event.data.ssn,
      last4ofssn: event.data.ssn?.slice(7),
      email: event.data.email,
      address_line_1: event.data.primary_address.address_line_1,
      city: event.data.primary_address.city,
      state: event.data.primary_address.state,
      zip_code: event.data.primary_address.zip_code,
      mobile_phone_number: event.data.mobile_phone_number,
      join_date: new Date(Date.parse(event.data.join_date))
    } as Customer)


    this.http.post<ExtCustomer>(`${environment.api_url}/customers.json?key=${environment.api_key}`, JSON.stringify(event.data))
    //this.http.post<ExtCustomer>(`assets\\customers.json`, JSON.stringify(event.data))
      .subscribe(data => console.log(data));
  }
}
