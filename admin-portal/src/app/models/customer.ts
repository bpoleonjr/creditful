export class Customer {
  customer_number!: number;
  first_name!: string;
  last_name!: string;
  date_birth!: Date;
  ssn!: string;
  email!: string;
  primary_address!: Address;
  mobile_phone_number!: string;
  join_date!: Date;
}

export class Address {
  address_line_1!: string;
  city!: string;
  state!: string;
  zip_code!: number;
}