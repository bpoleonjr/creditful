export interface Customer {
  customer_number: number;
  first_name: string;
  last_name: string;
  date_birth: Date;
  age?: number;
  ssn: string;
  last4ofssn?: string;
  email: string;
  address_line_1: string;
  city: string;
  state: string;
  zip_code: number;
  mobile_phone_number: string;
  join_date?: Date;
}