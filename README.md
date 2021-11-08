# nj-request-scope-example
Example usage of nj-request-scope package.
Every controller/facade/service class in the application has implemented a constructor with console logging information about creating the class instance.

## Prerequisites

* node >= 9.11.2
* npm >= 6.14.13

## Application run

1. Checkout nj-request-scope-example GitHub repository
2. Run the command line and change the working directory to the checked out repository
3. Run ```npm i```
4. Run ```npm start```
5. Open [http://localhost:3000/](http://localhost:3000/) in a web browser
6. Navigate to example endpoints:
    * [http://localhost:3000/requestProvider?testQueryStringToModify](http://localhost:3000/requestProvider?testQueryStringToModify)
    * [http://localhost:3000/requestScope](http://localhost:3000/requestScope)
7. Inspect console output for object creation information (or better for lack of such information ;) 
