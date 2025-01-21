// ===== Documents =====

// ?create: ----> insert(), insertOne(), insertMany()
// ?read: 
// ?update: 
// ?delete: 

// ! ============= Create =============

// ? >>> insert():
// It will create new document(s) in the collection
// Syntax: db.collectionName.insert(doc);
// Syntax: db.collectionName.insert([doc1, doc2, doc3]);

// for single doc

db.emp.insert({
    empno: 7369,
    ename: "smith",
    job: "clerk",
    mgr: 7902,
    hiredate: new Date("1980-12-17"),
    sal: 800,
    comm: null,
    deptno: 20,
})

// DeprecationWarning: Collection.insert() is deprecated. Use insertOne, insertMany, or bulkWrite.
// {
//     acknowledged: true,
//     insertedIds: { '0': ObjectId('677f5c093db47290302b68b0') }
//   }


// for multiple docs

db.emp.insert([
    {
        empno: 7499,
        ename: "allen",
        job: "salesman",
        mgr: 7698,
        hiredate: new Date("1981-02-21"),
        sal: 1600,
        comm: 300,
        deptno: 30,
    },
    {
        empno: 7521,
        ename: "ward",
        job: "salesman",
        mgr: 7698,
        hiredate: new Date("1981-02-22"),
        sal: 1250,
        comm: 500,
        deptno: 30,
    },
   ])

// ? >>> insertOne()

db.emp.insertOne(
    {
        empno: 7566,
        ename: "jones",
        job: "manager",
        mgr: 7839,
        hiredate: new Date("1981-04-02"),
        sal: 2975,
        comm: null,
        deptno: 20,
    }
)

// ? >>> insertMany()

db.emp.insertMany([
    {
        empno: 7654,
        ename: "Martin",
        job: "salesman",
        mgr: 7698,
        hiredate: new Date("1981-09-28"),
        sal: 1250,
        comm: 1400,
        deptno: 30,
      },
    {
      empno: 7698,
      ename: "blake",
      job: "manager",
      mgr: 7839,
      hiredate: new Date("1981-05-01"),
      sal: 2850,
      comm: null,
      deptno: 30,
    },
    {
      empno: 7782,
      ename: "clark",
      job: "manager",
      mgr: 7839,
      hiredate: new Date("1981-06-09"),
      sal: 2450,
      comm: null,
      deptno: 10,
    },
    {
      empno: 7788,
      ename: "scott",
      job: "analyst",
      mgr: 7566,
      hiredate: new Date("1987-04-19"),
      sal: 3000,
      comm: null,
      deptno: 20,
    },
    {
        empno: 7839,
        ename: "king",
        job: "president",
        mgr: null,
        hiredate: new Date("1981-11-17"),
        sal: 5000,
        comm: null,
        deptno: 10,
      },
    {
        empno: 7844,
        ename: "Turner",
        job: "salesman",
        mgr: 7698,
        hiredate: new Date("1981-09-08"),
        sal: 1500,
        comm: 0,
        deptno: 30,
      },
    {
        empno: 7876,
        ename: "Adams",
        job: "clerk",
        mgr: 7788,
        hiredate: new Date("1987-05-23"),
        sal: 1100,
        comm: null,
        deptno: 20,
      },
    {
        empno: 7900,
        ename: "James",
        job: "clerk",
        mgr: 7698,
        hiredate: new Date("1981-12-03"),
        sal: 950,
        comm: 0,
        deptno: 30,
      },
    {
        empno: 7902,
        ename: "Ford",
        job: "analyst",
        mgr: 7566,
        hiredate: new Date("1981-12-03"),
        sal: 3000,
        comm: 0,
        deptno: 20,
      },
    {
        empno: 7934,
        ename: "Miller",
        job: "clerk",
        mgr: 7782,
        hiredate: new Date("1982-01-23"),
        sal: 1300,
        comm: 0,
        deptno: 10,
      },
  ]);

// ! ============= Read =============


// ? >>> find()

/*
It will help us to read the data.
Syntax: db.collection.find({filter}, {projection}, {options});
filter: will pass the filtering condition to the data --> equal to the sql where clause
projection: --> will display the data --> equal to select clause in sql
option: to pass additional options

*/

// & WAQTD the details employees in emp collection
// SQL: select * from emp;
// mongodb: db.emp.find();

// & WAQTD the details departments in dept collection
// SQL: select * from dept;
// mongodb: db.dept.find();

// WAQTD ename, sal, job of all the employees
// SQL:

/*
select ename, sal, job
from emp;
*/

// mongodb:

// db.emp.find({}, {ename: 1, sal: 1, job: 1, _id: 0}, {});

// WAQTD empno, deptno of all the employees

// SQL: 

// select empno, deptno 
// from emp;

// mongodb:

// db.emp.find({}, {empno: 1, deptno: 1, _id:0}, {});

// WAQTD the employees details who are earning 1250

// SQL: 
// select * from emp where sal = 1250;

// mongodb: 

// db.emp.find({sal: 1250}, {},{});

// WAQTD the employees details who are working as manager

// SQL: 
// select * from emp where job = 'manager';

// mongodb: 

// db.emp.find({job: 'manager'}, {},{});

// ! ======== Task =======

//? WAQTD the details of the employees who are in the dept no 20

// SQL: select * from emp where deptno = 20;

// mongodb:

// db.emp.find({deptno: 20}, {}, {});


// ? WAQTD the details of the employees who are in the dept no 10

// SQL: select * from emp where deptno = 10;

// mongodb:

// db.emp.find({deptno: 10}, {}, {});

// ? WAQTD the details of the employees who are in the dept no 30

// SQL: select * from emp where deptno = 30;

// mongodb:

// db.emp.find({deptno: 30}, {}, {});

// ? WAQTD the details of the employees who are working as a clerk

// SQL: select * from emp where job = 'clerk';

// mongodb:

// db.emp.find({job: 'clerk'}, {}, {});

// ? WAQTD the details of the employees who are working as a analyst

// SQL: select * from emp where job = 'analyst';

// mongodb:

// db.emp.find({job: 'analyst'}, {}, {});

// ? WAQTD the details of the employees who are working as a salesman

// SQL: select * from emp where job = 'salesman';

// mongodb:

// db.emp.find({job: 'salesman'}, {}, {});

// ? WAQTD the details of the employees whose name is  Scott

// SQL: select * from emp where ename = 'scott';

// mongodb:

// db.emp.find({ename: 'scott'}, {}, {});

// ? WAQTD the details of the employees whose name is  Turner

// SQL: select * from emp where ename = 'turner';

// mongodb:

// db.emp.find({ename: 'turner'}, {}, {});

// ? WAQTD the details of the employees who are working as a clerk in deptno 20

// SQL: select * from emp where job = 'clerk' AND deptno = 20;

// mongodb:

// db.emp.find({job: 'clerk', deptno: 20}, {}, {});

// ? WAQTD the details of the employees who are working as a manager in deptno 10

// SQL: select * from emp where job = 'manager' AND deptno = 10;

// mongodb:

// db.emp.find({job: 'manager', deptno: 10}, {}, {});

// ? WAQTD the details of the employees who are working as a salesman in deptno 30

// SQL: select * from emp where job = 'salesman' AND deptno = 10;

// mongodb:

// db.emp.find({job: 'salesman', deptno: 30}, {}, {});

// ? WAQTD the details of the employees who are earning 3000 as a analyst

// SQL: select * from emp where job = 'analyst' AND sal = 3000;

// mongodb:

// db.emp.find({job: 'analyst', sal: 3000}, {}, {});

// ? WAQTD the details of the employees who are reporting to 7698

// SQL: select * from emp where mgr = 7698;

// mongodb:

// db.emp.find({mgr: 7698}, {}, {});

// ? WAQTD the details of the employees who are reporting to 7698

// SQL: select * from emp where mgr = 7698;

// mongodb:

// db.emp.find({mgr: 7698}, {}, {});

// ? WAQTD the details of the employees who are reporting to 7566

// SQL: select * from emp where mgr = 7566;

// mongodb:

// db.emp.find({mgr: 7566}, {}, {});

// ? WAQTD the details of the employees who are earning comm of 500 exactly

// SQL: select * from emp where comm = 500;

// mongodb:

// db.emp.find({comm: 500}, {}, {});

// ? WAQTD the manager number of martin

// SQL: select mgr from emp where ename = "martin";

// mongodb:

// db.emp.find({ename: "martin"}, {mgr: 1, _id: 0}, {});

// ? WAQTD the fords name, job and hire date

// SQL: select ename,job,hiredate from emp where ename = "martin";

// mongodb:

// db.emp.find({ename: "ford"}, {ename: 1, job: 1 ,hiredate: 1, _id: 0}, {});


// ? WAQTD the jones name, emplyoyee number and his manager number along with dept no

// SQL: select ename,empno,mgr from emp where ename = "jones";

// mongodb:

// db.emp.find({ename: "jones"}, {ename: 1, empno: 1 ,mgr: 1, deptno: 1, _id: 0}, {});

// !  ??? >>>> FindOne()

/*
It will help us to read the data.
It will return only the first matching data.
Syntax: db.collection.find({filter}, {projection}, {options});
filter: will pass the filtering condition to the data --> equal to the sql where clause
projection: --> will display the data --> equal to select clause in sql
option: to pass additional options

*/

// ? WAQTD the first matching job as a manager

//  mongodb: db.emp.findOne({job: "manager"}, {}, {})

// ? WAQTD the name ,job , sal of the employee who earns 3000.

//  mongodb: db.emp.findOne({sal: 3000}, {_id: 0, ename: 1, job: 1, sal: 1}, {})
//  mongodb: db.emp.findOne({sal: 3000}, {_id: false, ename: 1, job: 1, sal: true}, {})

// ? >>> count() method

//  It will count that no of results shortlisted

// & WAQ to count no of employees are present in emp collection.
db.emp.find({}, {}, {}).count();

// & WAQ to count no of managers are present in emp collection.
db.emp.find({job: 'manager'}, {}, {}).count();

// & WAQ to count no of clerks are present in emp collection.
db.emp.find({job: 'clerk'}, {}, {}).count();

// & WAQ to count no of analysts are present in emp collection.
db.emp.find({job: 'analyst'}, {}, {}).count();

// & WAQ to count no of salesman are present in emp collection.
db.emp.find({job: 'salesman'}, {}, {}).count();


// & WAQ to count no of employee belongs to dept 10.
db.emp.find({dept: 10}, {}, {}).count();
// & WAQ to count no of employee belongs to dept 20.
db.emp.find({dept: 20}, {}, {}).count();
// & WAQ to count no of employee belongs to dept 30.
db.emp.find({dept: 30}, {}, {}).count();
// & WAQ to count no of employees reporting to 7698.
db.emp.find({mgr: 7698}, {}, {}).count();
// & WAQ to count no of employees reporting to 7839.
db.emp.find({mgr: 7839}, {}, {}).count();


// ? >>> Pretty() method

// It will display in a pretty view format.
db.emp.find({}, {}, {});
db.emp.find({}, {}, {}).pretty();
// in older version of mongodb we have to use it for better view
// now its not required.

// ? >>> limit() method
// It will limit for the no of results.

// & WAQTD the first 5 employee details 
db.emp.find().limmit(5);

// & WAQTD the first 2 employee details 
db.emp.find().limmit(2);

// & WAQTD the first 2 employee details who belongs to dept no 10
db.emp.find({deptno: 10},{},{}).limit(2);
// & WAQTD the first 2 employee details who belongs to dept no 20
db.emp.find({deptno: 20},{},{}).limit(2);
// & WAQTD the first 2 employee details who belongs to dept no 30
db.emp.find({deptno: 30},{},{}).limit(2);
// & WAQTD the first 2 employee details who are working as a salesman.
db.emp.find({job: 'salesman'},{},{}).limit(2);
// & WAQTD the first 2 employee details who are working as a clerk.
db.emp.find({job: 'clerk'},{},{}).limit(2);

// ? >>> skip() method
// It will skip the documents

// & WAQTD the details of 2 working employee as a manager.
db.emp.findOne({job: 'manager'}, {}, {}).skip(1); // ! wrong
db.emp.find({job: 'manager'}, {}, {}).skip(1).limit(1); 

// & WAQTD the details of the employees excluding first 2 employees
db.emp.find();
db.emp.find.skip(2);

// & all managers execpt first manager
db.emp.find({job: 'manager'}, {}, {}).skip(1);

// & WAQTD the details of 3 working employee as a clerk
db.emp.findOne({job: 'clerk'}, {},{}).skip(2);

// ! =========== Update ============

// ? update: 
/*
It will update only the document / documents
It requires atomic operators ($set : )
Syntax: db.collection.update({filter}, {update}, {options})

*/

// & WAQT update the clerk salary as 1200
db.emp.update({job: 'clerk'}, { $set : {sal: 1000}}, {}); // to update single document
db.emp.update({job: 'clerk'}, { $set : {sal: 1200}}, {multi: false}); // to update single document
db.emp.update({job: 'clerk'}, { $set : {sal: 1200}}, {multi: true}); // to update multiple document

// & WAQT update the king's manager as "Varun"
db.emp.update({ename: 'king'}, {$set: {mgr: "varun"}},{}); //single docs
db.emp.update({ename: 'king'}, {$set: {mgr: "varun"}},{multi: true}); //multiple docs

// & WAQT update the modi salary as 5000
// upsert is a combination of insert and update
// update + insert =====> up + insert ====> upsert
db.emp.update({ename: "modi"}, {$set : {sal: 5000}}, {}); //{acknowledged: true, insertedId: null, matchedCount: 0, modifiedCount: 0,upsertedCount: 0}
db.emp.update({ename: "modi"}, {$set: {sal: 5000}}, {upsert: true});

// anyway update mehod is deprecated lets move to new method

// ? >>> updateOne():

// It will update only the single document.
// Synntax: db.collection.updateOne({filter}, {update}, {options});
// To update we have to use atomic operators($set)
// multi option is required true.

// ? >>> updateMany();
// It will update all the document.
// Syntax: db.collection.updateMany({filter}, {update}, {options});
// to update we have to use atomic operators. Ex: $set
// multi option is required here

// & WAQT update the salesmans salary as 1500 and comm as 250
db.emp.updateOne({job: 'salesman'}, {$set: {sal: 1500, comm: 250}}, {});
db.emp.updateMany({job: 'salesman'}, {$set: {sal: 1500, comm: 250}}, {});

// & WAQT update the ename as AKHIL and sal 5000 who are working as a software developer
db.emp.updateOne({job: 'softwaredev'}, {$set: {ename: 'akhil', sal: 5000}}, {});
db.emp.updateMany({job: 'softwaredev'}, {$set: {ename: 'akhil', sal: 5000}}, {});

db.emp.updateOne({job: 'softwaredev'}, {$set: {ename: 'akhil', sal: 5000}}, {upsert: true});

// & WAQT update the ename as Varun and sal 6000 who are working as a merndev.

db.emp.updateOne({job: 'Merndev'}, {ename: 'Varun', sal: 6000}, {upsert: true});

// & WAQT update the allens job as analyst.
db.emp.updateOne({ename: 'allen'}, {$set: {job: 'analyst'}},{});

// & WAQT update the blakes mgr no as 6898.
db.emp.updateOne({ename: 'blake'},{$set : {mgr: 6898}},{upsert: true} );

// & WAQT update comm as 50 for all salesman.
db.emp.updateMany({job: 'salesman'},{$set: {comm: 50}},{upsert: true});

// & WAQT update hiredate of varun to 15 feb 2025
db.emp.updateOne({ename: 'varun'},{$set: {hiredate: new Date("2025-02-15")}},{upsert: true});

// & WAQT update modi's job as PM
db.emp.updateOne({ename: 'modi'},{$set: {job: 'PM'}},{});

// & WAQT update all dept 10 employees mgr to 7788
db.emp.updateMany({deptno: 10},{$set: {mgr: 7788}},{});

// & WAQT update all dept 20 employees mgr to 6898
db.emp.updateMany({deptno: 20},{$set: {mgr: 6898}},{});

// & WAQT update all dept 30 employees mgr to 7858
db.emp.updateMany({deptno: 30},{$set: {mgr: 7858}},{});

// ? >>> replaceOne():

// It will replace the current document with new document.
// It will replace only for the first matching document.
// and we there is no replaceMany()❌
// syntax: db.collection.replaceOne({filter},{replacement},{options});

// & WAQT update the miller document with new document
db.emp.replaceOne({ename: 'miller'},{ename: 'miller', job: 'tester', mgr: 7898},{});

// & WAQT update the electrician document with {ename: 'mohit', job: 'electrician', sal: 5000}
db.emp.replaceOne({job: 'electrician'}, {ename: 'mohit', job: 'electrician', sal: 5000},{upsert: true});

//  to update single doc ------> updateOne
//  to update multi doc ------> updateMany
//  to update doc with new doc ------> replaceOne
//  to update fieldname with newName ------> rename

// ? >>> $rename:
// It will update the key names in a document.
// It will update the field names.
// Syntax: db.collection.updateOne({filter} , {$rename : {oldName : "newName"}}  )
// Syntax: db.collection.updateMany({filter} , {$rename : {oldName : "newName"}}  )

// & WAQT update the empno with employeeno
db.emp.updateOne({}, { $rename: { empno: "employeeno" } });
db.emp.updateMany({}, { $rename: { empno: "employeeno" } });

// & WAQ update all salesman's sal field name as salary.
db.emp.updateMany({ job: "salesman" }, { $rename: { sal: "salary" } });


// ! ========= Delete =========

// ? >>> DeletOne()
// It will delete only the first matching document.
// Syntax: db.collection.deleteOne({filter});

// ? >>> DeleteMany()
// It will delete all the matching documents.
// Syntax: db.collection.deleteMany({filter});

// & WAQT delete jones data.
db.emp.deleteOne({ename: 'jones'});

// & WAQT delete varun data.
db.emp.deleteOne({ename: 'varun'});

// & WAQt delete the employee data who are working as a merndev 
db.emp.deleteMany({job: 'merndev'});

// & WAQt delete all the employees data who are working as a clerk in dept no 30
db.emp.deleteMany({job: 'clerk', deptno: 30});

// & WAQt delete all the employees data who are working as a salesman in dept no 30
db.emp.deleteMany({job: 'salesman', deptno: 30});

// & WAQt delete the employees details who are reporting to 7839
db.emp.deleteMany({mgr: 7839});

// & WAQt delete the employees details who are working as tester.
db.emp.deleteMany({job: 'tester'});

// & WAQt delete the employees details who are earning as 3000.
db.emp.deleteMany({sal: 3000});

// & WAQt delete the employees entire data.
db.emp.deleteMany({});





