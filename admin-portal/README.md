# AdminPortal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.1.

### Project purpose
This assessment was created to evaluate your front-end development skills, as well as your creativity and attention to detail.

Create an application to view all customers of a company and to add new ones. This application will be used by employees of the company and will use a Mock API with randomly generated data.

- You are required to use Bootstrap. You can optionally use any combination of JavaScript, TypeScript, jQuery, Angular, React, or Vue.
- All API calls should be done from the client, not server-side.
- It should work in both mobile and desktop browsers.
- You are free to use any colors, animations, etc. that you think would be aesthetically pleasing and beneficial to the application’s purpose.
- **Mock API**
  - Get All Customers (GET)
    - URL: [https://my.api.mockaroo.com/customers.json?key=e95894a0 \[my.api.mockaroo.com\]](https://urldefense.com/v3/__https:/my.api.mockaroo.com/customers.json?key=e95894a0__;!!L71h-XYNnzc!zkAzOzHhln7qQj284ecCMf31UoKb9GBzdi6vACKER838U70ZOuoHoKWoXDHwrAhp$)
    - This always returns a **random** list of 100 customers.
    - You can pass an optional size parameter to limit the number of results.
      - Example: [https://my.api.mockaroo.com/customers.json?key=e95894a0&size=5 \[my.api.mockaroo.com\]](https://urldefense.com/v3/__https:/my.api.mockaroo.com/customers.json?key=e95894a0&size=5__;!!L71h-XYNnzc!zkAzOzHhln7qQj284ecCMf31UoKb9GBzdi6vACKER838U70ZOuoHoKWoXAI_XosO$)
  - Create Customer (POST)
    - URL: [https://my.api.mockaroo.com/customers.json?key=e95894a0 \[my.api.mockaroo.com\]](https://urldefense.com/v3/__https:/my.api.mockaroo.com/customers.json?key=e95894a0__;!!L71h-XYNnzc!zkAzOzHhln7qQj284ecCMf31UoKb9GBzdi6vACKER838U70ZOuoHoKWoXDHwrAhp$)
    - This always returns a 201 status.
    - This is not a real API so no customer is actually created. You can always assume the request was successful. If you are persisting the data client-side, you can add this new customer manually.
- **All Customers View**
  - Display the information below for all customers.
    - Customer number (five digit random number)
    - First Name
    - Last Name
    - Date of Birth
    - Last 4 of SSN
    - Age (calculated from Date of Birth)
  - For each customer, the user should be able to view some additional information (listed below) in a popover or similar view.
    - Email address
    - Primary address
    - Mobile phone number
    - Join date (when they became customers of the company)
- **Create New Customer View**
  - Create a link to display a form that will allow the user to create a new customer with the information below. Once the user clicks “Submit,” they will see the “All Customers“ view again.
    - Customer number (five digit random number)
    - First Name
    - Last Name
    - Date of Birth
    - SSN
    - Email address
    - Primary address
    - Mobile phone number
- You can make any required assumptions if something was not specified in this document. We also encourage you to be creative and make changes to any UI specifications above if you believe you have a better solution.
- Please use GitHub to share your code files and you can choose your preferred method (GitHub, your portfolio site, etc.) to host the application so that we can test it.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Author
Boyce Poleon, Jr. [website](https://boyce.pro)
