import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs';

import { Customer } from 'src/app/interfaces/customer';
import { ExtCustomer } from 'src/app/interfaces/ext-customer';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {
  dataSource: any = [];
  states: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //this.http.get<ExtCustomer[]>(`${environment.api_url}/customers.json?key=${environment.api_key}&size=3`)
    this.http.get<ExtCustomer[]>(`assets\\customers.json`)
      .pipe(
        tap(data => console.log(data)),
        map((ext_customers: ExtCustomer[]) => {
          return ext_customers.map(extCustomer => ({
            customer_number: extCustomer.customer_number,
            first_name: extCustomer.first_name,
            last_name: extCustomer.last_name,
            date_birth: new Date(Date.parse(extCustomer.date_birth)),
            age: Math.floor((Math.abs(Date.now() - new Date(Date.parse(extCustomer.date_birth)).getTime()) / (1000 * 3600 * 24))/365.25),
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
}
