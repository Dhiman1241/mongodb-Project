// ! ===== projection =====
// Projection is a process display the results as per our need
// Syntax: db.collection.find({filter}, {projection}, {options});
// Syntax: db.collection.findOne({filter}, {projection}, {options});

// Filter -----> it will filter the documents based on condition
        //   -----> it is similar to WHERE clause.

// projection ----> by using we can decide what to display.
//            -----> it is similar to select clause.
//            ------> to display we have to use boolean(0 and 1)


// options ----> options will provide the additional data for projecting
        //    -----> Ex: sorting , limiting the records.

// ~ as we performed CRUD commands enter scott data one again.

// &WAQTD all the employees details

// mongodb: 
db.emp.find({},{},{});

// &WAQTD all the employees details who are working as clerk
db.emp.findMany({job: 'clerk'});

// &WAQTD all the employees details who are working as salesman
db.emp.findMany({job: 'salesman'});

// &WAQTD all the employees details who are working as manager
db.emp.findMany({job: 'manager'});

// &WAQTD all the employees details who are working in 20
db.emp.findMany({deptno: 20});

// &WAQTD all the employees details who are earning in 1500
db.emp.findMany({sal: 1500});

// &WAQTD all the employees details whose name is smith
db.emp.findMany({ename: 'smith'});

// &WAQTD all the employees details who are reporting to 7698
db.emp.findMany({mgr: 7698});

// &WAQTD all the employees details who are reporting to 7788
db.emp.findMany({mgr: 7788});

// &WAQTD all the employees details who are reporting to 7788 and working as clerk
db.emp.findMany({mgr: 7788, job:'clerk'});

// &WAQTD all the employees details who are reporting to 7788 and working as analyst
db.emp.findMany({mgr: 7788, job:'analyst'});

// &WAQTD all the employees details who are reporting to 7902 and working as analyst
db.emp.findMany({mgr: 7902, job:'analyst'});

// &WAQTD all the employees details who are earning 1300 as clerk in dept no 10
db.emp.findMany({sal: 1300, job: 'clerk', deptno: 10});

// &WAQTD all the employees details who are earning 1300 as clerk in dept no 20
db.emp.findMany({sal: 1300, job: 'clerk', deptno: 20});


/* !
>>> limit: 
To limit the result to a specific number of documents.
As option Syntax: db.collection.find({},{},{limit: number});
As method syntax: db.collection.find({},{},{}).limit();

>>> max:
Filters documents where the fields value is less than the specified value
As option Syntax: db.collection.find({}, {}, {max: number});
As method Syntax: db.collection.find({}, {}, {}).max(number);

>>> min 
filters documnets where the fields value is greater than or equal to the specified value.
As option syntax: db.collection.find({}, {}, {min: number});
As method syntax: db.collection.find({}, {}, {}).min(number);

>>> skip
Useful for pagination by skipping over a certain number of documents.
As option syntax: db.collection.find({},{},{skip: number})
As method syntax: db.collection.find({},{},{}).skip(number);

>>> sort
To sort the query results in ascending and descending order
As option syntax: db.collection.find({}, {},{sort: {field: value}}); //value = 1 or -1
As method syntax: db.collection.find({}, {}, {}).sort({field: value}); // value = 1 or -1
*/

// ? Limit: 
// & WAQTD the details of first 5 employees.
db.emp.find({},{},{}).limit(5);

// & WAQTD the details of first 8 employees.
db.emp.find({}, {}, {}).limit(8);

// & WAQTD the details of first 2 clerks.
db.emp.find({job: 'clerks'},{},{}).limit(2);

// & WAQTD the details of first 2 employees of deptno 10
db.emp.find({deptno: 10},{},{limit: 2});

// & WAQTD the details of first manager
db.emp.find({job: 'manager'},{},{limit: 1});

// & WAQTD the details of first salesman in deptno 30
db.emp.find({job: 'salesman', deptno: 30},{},{limit: 1});

// products data
// & WAQTD the title and price of all products.
db.products.find({},{title: 1, price: 1,_id: 0},{});
// & WAQTD the first 7 products.
db.products.find({},{},{limit: 7});
// & WAQTD the first 10 products title , price , rating.
db.products.find({},{title: 1, price: 1, rating: 1, _id: 0},{limit: 10});
// & WAQTD the first 15 products title , category , rating.
db.products.find({},{title: 1,category: 1,rating: 1},{limit: 15});
// & WAQTD the first 15 products title , rate .
db.products.find({}, { title: 1, "rating.rate": 1 }, {});
// & WAQTD the first 5 products title , rate , price.
db.products.find({},{title: 1, "rating.rate": 1, price: 1},{limit: 5});

// users data
// & WAQTD the details of first 3 users
db.users.find({},{},{limit: 3});
// & WAQTD the details of first 5 users along with username and email
db.users.find({},{username: 1, email: 1},{limit: 5});
// & WAQTD the details of first 1 users along with name and address
db.users.find({},{name: 1, address: 1},{limit: 1});
// & WAQTD the details of first 4 users along with id and geolocation
db.users.find({},{id: 1, "address.geolocation": 1},{limit: 4});
// & WAQTD the details of first 8 users along with id and zipcode
db.users.find({},{id: 1, "address.zipcode": 1},{limit: 8});
// & WAQTD the details of first 7 users along with user name , phone and city.
db.users.find({},{username: 1, phone: 1, "address.city": 1},{limit: 7});
// & WAQTD the details of all users first name
db.users.find({},{"name.firstname": 1},{});
// & WAQTD the details of all users last name
db.users.find({},{"name.lastname": 1},{});

/*
// ? Max:
// emp data
// & WAQTD the employees name and salary who are earning less than 1000.
 
// & WAQTD the employees name and salary who are earning less than 1500.

// & WAQTD the employees name and salary who are earning less than 5000.

// & WAQTD the employees name, salary and sql  who are earning comm less than 800.



// products data
// & WAQTD the title and price of products where the price is less than 120.
// & WAQTD the title and price of products where the price is less than 150.
// & WAQTD the title and price of products where the price is less than 180.
// & WAQTD the title and price of products where the id is less than 5.
// & WAQTD the title and price of products where rate less than 3.
// & WAQTD the title and price of products where rate less than 4.
// & WAQTD the title and price of products where count is less than 120.
// & WAQTD the title and price of products where count is less than 140.
// & WAQTD the title and price of products where count is less than 150.

// ? Min:
// emp data
// & WAQTD the employees name and salary who are earning more than 1000.
// & WAQTD the employees name and salary who are earning more than 1500.
// & WAQTD the employees name and salary who are earning more than 5000.
// & WAQTD the employees name and salary who are earning more than 1000 and less than 3000.
// & WAQTD the employees name and salary who are earning more than 2000 and less than 4000.
// & WAQTD the employees name, salary and sql  who are earning comm more than 800.

// products data
// & WAQTD the title and price of products where the price is more than 120.
// & WAQTD the title and price of products where the price is more than 150.
// & WAQTD the title and price of products where the price is more than 180.
// & WAQTD the title and price of products where the price is between 150 and 200.
// & WAQTD the title and price of products where the id is more than 5.
// & WAQTD the title and price of products where the id is between 5 and 7.
// & WAQTD the title and price of products where rate more than 3.
// & WAQTD the title and price of products where rate more than 4.
// & WAQTD the title and price of products where rate between 2 and 4.
// & WAQTD the title and price of products where count is more than 120.
// & WAQTD the title and price of products where count is more than 140.
// & WAQTD the title and price of products where count is more than 150.
// & WAQTD the title and price of products where count is between 100 to 150.

*/
// ? Skip:
// emp data
// & WAQTD the details of employees other than first 4
db.emp.find({},{},{skip: 4});
// & WAQTD the details of employees other than first 5
db.emp.find({},{},{skip: 5});
// & WAQTD the details of employees other than first 2
db.emp.find({},{},{skip: 2});
// & WAQTD the details of employees who earning salary as 3000 apart from the first employee
db.emp.find({sal: 3000},{},{skip: 1});
// & WAQTD the details of deptno 10 employees aaprt from first 2 employees
db.emp.find({deptno: 10},{},{skip: 2});
// & WAQTD the details of exact 3rd salesman
db.emp.find({job: 'salesman'},{},{skip: 3});
// & WAQTD the details of exact 3rd clerk
db.emp.find({job: 'clerk'},{},{skip: 2, limit: 1});
// & WAQTD the details of exact 3rd manager
db.emp.find({job: 'manager'},{},{skip: 2, limit: 1});

// ? Sort:
// emp data
// & WAQTD the name and salary of employees based on sorting their names
db.emp.find({}, { _id: 0, ename: 1, sal: 1 }, { sort: { ename: 1 } }); // ascending
db.emp.find({}, { _id: 0, ename: 1, sal: 1 }, { sort: { ename: -1 } }); // descending

db.emp.find({}, { _id: 0, ename: 1, sal: 1 }, {}).sort({ ename: 1 }); // ascending
db.emp.find({}, { _id: 0, ename: 1, sal: 1 }, {}).sort({ ename: -1 }); // descending

// & WAQTD the names and salaries based on sorting salaries
db.emp.find({}, {ename: 1, sal: 1}, {sort: {ename: 1}});
// & WAQTD the names and salaries based on sorting emp id's
db.emp.find({},{ename: 1, sal: 1},{sort: {id: 1}});
// & WAQTD the names ,salary , comm based on sorting comm
db.emp.find({},{ename: 1, sal: 1, comm: 1},{sort: {comm: 1}});
// & WAQTD the name, hiredate  based on sorting
db.emp.find({},{ename: 1, hiredate: 1},{sort: {hiredate: 1}});
// & WAQTD the details of 4th hired employee.
db.emp.find({},{},{skip: 3, limit: 1});
// & WAQTD the details of 7th hired employee.
db.emp.find({},{},{skip: 6, limit: 1});


// & WAQTD the details of 4th highest slary.
db.emp.find({},{},{});
// & WAQTD the details of 2nd highest slary between the range 1500 to 4000.
db.emp.find({},{},{});
// & WAQTD the details of 2nd lowest slary between the range 1500 to 4000.
// & WAQTD the details of 3rd highest slary between the range 1000 to 5000.
// & WAQTD the details of 3rd lowest slary between the range 1000 to 5000.

// products data:
// & Shortlist the products based on price.
db.products.find({},{},{sort: {price: 1}});
// & Shortlist the products based on title.
db.products.find({},{},{sort: {title: 1}});
// & Shortlist the products based on category.
db.products.find({},{},{sort: {category: 1}});

// ! ================== ALIAS NAME ==================

/*
Alias name is a alternative provided to the column

SQL:
Select COLUMNNAME AS ALIASNAME from TABLE;
SELECT COLUMNNAME ALIASNAME from TABLE;

mongodb:
db.collection.find({}, {sal: 1}, {});  -- to display sal
db.collection.find({},{salary: "$sal"},{}) -- to display sal as salary
*/

// & WAQTD the name and sal of all the employees
db.emp.find({},{_id: 0, ename: 1, sal: 1},{});


// & WAQTD the name and sal and wellwisher name as varun of all the employees
db.emp.find({},{_id: 0, ename: 1, sal: 1, wellwisher: "varun"},{});

// & WAQTD the salary of all the employees as "salary"
db.emp.find({}, {_id: 0, salary: "$sal"}, {});

// & WAQTD ename as employeeName
db.emp.find({}, {employeeName: "$ename"},{});
// & WAQTD hiredate as date_of_join
db.emp.find({},{date_of_join: "$hiredate"},{});
// & WAQTD deptno as department
db.emp.find({},{department: "$deptno"},{});
// & WAQTD mgr as manager
db.emp.find({},{manager: "$mgr"},{});
// & WAQTD comm as commission
db.emp.find({},{commission: "$comm"},{});

