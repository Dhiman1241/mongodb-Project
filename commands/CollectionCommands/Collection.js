// ! ====== Collections ======

/*
 As we have multiple tables in scott databases
 here also we will have mutiple collections in a database

 As a table having multiple rows in sql
 here we will have a multiple documents in a collection
*/

// ? >>>  show tables |  show collections
// To list all the collections in a database.

// ? createCollection():

// It will create the collection in a database. similar creating table in database
// Syntax: db.createCollection("collectionName")

// Ex:
db.createCollection("emp");
db.createCollection("dept");
db.createCollection("qspiders students");


// ? getCollection()

// It will points to the collection 
// Syntax: db.getCollection("collectionName");
// Ex:
db.getCollection("emp");
db.getCollection("dept");
db.getCollection("qspiders students");

// ? renameCollection()

// It will rename the collectionname with new name
// Syntax: db.oldName.renameCollection("newName")

// EX:
db.emp.renameCollection("employees")
db.dept.renameCollection("department")
db.getCollection("qspiders students").renameCollection("qspidersData") //Explicit way

// ? db.collectionName.drop()

// It will delete the collection
// syntax: db.collectionName.drop()

// Ex:
db.employess.drop()
db.department.drop()
db.getCollection("qspiders data").drop();