import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {
  customers: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let endpoint = 'customers';
    this.http.get<Customer[]>(`${environment.api_url}/${endpoint}.json?key=${environment.api_key}`)
      .pipe(tap(data => console.log(data)))
      .subscribe(data => this.customers = data);
  }

}
