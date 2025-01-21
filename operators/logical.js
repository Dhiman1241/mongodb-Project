// ! =========== Logical Operators ===========
/*
    These Operators compare that conditions logically to provide some results.
    >>> $and:
        It will check all conditions are true or not.
        if true it will return the documents else not.
        Syntax: { $and: [ {c1} , {c2} , ... ] }

    >>> $or:
        It will any of the conditions are true or not.
        if true it will return the documents else not.
        Syntax: { $or: [{c1} , {c2} , {c3} , ...] }

    >>> $not:
        It will inverts the condition
        Syntax: {field : {$not: c1}}
        Syntax: {field : {$not: {op: val}}}
        Ex: {deptno : {$not: {eq: 10}}} // not in deptno10

    >>> $nor:
        Macthes documentss that do not satisfy any of the conditions.
        It is a combination of NOT + OR operators
        Syntax: {$nor: [{c1} , {c2} , {c3} , ...]}
*/

// === $and ===
// & WAQTD the details of employees who are working in deptno 10 as a clerk.
db.emp.find({ deptno: 10, job: "clerk" }); // Implicit AND
db.emp.find({ $and: [{ deptno: 10 }, { job: "clerk" }] }); // Explicit AND

// & WAQTD the details of employees who are working in dept no 30 as salesman and reporting to 7698.
db.emp.find({ $and: [{ deptno: 30 }, { job: "salesman" }, { mgr: 7698 }] });

// & WAQTD the deatils of employees who are working in deptno 10 and 20.
db.emp.find({ $and: [{ deptno: 10 }, { deptno: 20 }] }); // no results

// === $or ====
// & WAQTD the deatils of employees who are either working in deptno 10 or deptno 20.
db.emp.find({ $or: [{ deptno: 10 }, { deptno: 20 }] });
db.emp.find({ deptno: { $in: [10, 20] } }); // as the field is same we can use $in.

// & WAQTD the deatils of employees who are either working in deptno 10 or working as clerk
db.emp.find({ $or: [{ deptno: 10 }, { job: "clerk" }] });
// here we should not use $in as the fields are different

// & WAQTD the details of the employees who are reporting to 7788 or 7698.
db.emp.find({ $or: [{ mgr: 7788 }, { mgr: 7698 }] });

// === $not ===
// & WAQTD the details of employees who are not working as clerk.
db.emp.find({ job: { $not: { $eq: "clerk" } } });

// & WAQTD the details of employees who are not working in deptno 20 or clerk.
db.emp.find({ deptno: { $not: { $eq: 20 } }, job: { $not: { $eq: "clerk" } } });

// === $nor ====
// & WAQTD the details of employees expect deptno 10 and 20
db.emp.find({ $nor: [{ deptno: 10 }, { deptno: 20 }] });

// & WAQTD the details of employees expect deptno 10 and clerks
db.emp.find({ $nor: [{ deptno: 10 }, { job: "clerk" }] });
db.emp.find({ $or: [{ deptno: 10 }, { job: "clerk" }] });

// ! ==== Task =====
// === $and ===
// ? Q) WAQTD ename , job , deptno for all the employees who are working as clerk in dept no 10.
db.emp.find({$and: [{job: "clerk"}, {deptno: 10}]},{ename: 1, job:1, deptno: 1,_id: 0});

// ? Q) WAQTD ename , job , deptno for all the employees who are working as clerk in dept no 20.
db.emp.find({$and: [{job: "clerk"}, {deptno: 20}]},{ename: 1, job:1, deptno: 1,_id: 0});

// ? Q) WAQTD ename , job , deptno for all the employees who are working as salesman in dept no 30.
db.emp.find({$and: [{job: "salesman"}, {deptno: 30}]},{ename: 1, job:1, deptno: 1,_id: 0});

// ? Q) WAQTD the details of the employees who are earning comm and salary should be greater than or equal to 1500.
db.emp.find({$and : [{comm: {$gte: 1500}}, {sal: {$gte: 1500}}]});
// ? Q) WAQTD the details of the employees who joined after may 1981 and earning more than 1000.
db.emp.find({$and: [{hiredate: {$gt: "31-may-1981"}}, {sal: {$gt: 1000}}]});
// ? Q) WAQTD the details of the employees who are reporting to 7839 and belongs to dept no 10.
db.emp.find({$and: [{mgr: 7839}, {deptno: 10}]});
// ? Q) WAQTD the details of all the employees in dept no 20 earning more than or equal to 3000.
db.emp.find({$and: [{sal: {$gte: 3000}}, {deptno: 10}]});

// ? Q) WAQTD the name , sal and job of all the employees who are earning more than 2500 as manager.
db.emp.find({$and: [{sal: {$gt: 2500}}, {job: manager}]},{ename: 1, sal: 1, job: 1},{});

// ? Q) WAQTD name and deptno of all the employees expect deptno 10,30.
db.emp.find({deptno: {$nin: [10,30]}},{ename: 1, deptno: 1});

// === $or ===
// ? Q) WAQTD ename, job, deptno for all the employees who are working as clerk or working dept no 10.
db.emp.find({$or: [{job: "clerk"}, {deptno: 10}]},{ename: 1, job:1, deptno: 1,_id: 0});


// ? Q) WAQTD ename, job, deptno for all the employees who are working as clerk or working dept no 20.
db.emp.find({$or: [{job: "clerk"}, {deptno: 20}]},{ename: 1, job:1, deptno: 1,_id: 0});

// ? Q) WAQTD ename, job, deptno for all the employees who are working as salesman or working dept no 30.
db.emp.find({$or: [{job: "salesman"}, {deptno: 30}]},{ename: 1, job:1, deptno: 1,_id: 0});

// ? Q) WAQTD the details of the employees who are earning more than 3000 or comm more than 1000.
db.emp.find({$or: [{sal: {$gt: 3000}},{comm: {$gt: 1000}}]});
// ? Q) WAQTD the details of the employees who joined after may 1981 or earning more than 2000.
db.emp.find({$or: [{hiredate: {$gt: "31-may-1981"}}, {sal: {$gt: 2000}}]});

// ? Q) WAQTD the details of the employees who are reporting to 7839 or 7788.
db.emp.find({mgr: {$in: [7839,7788]}});
// ? Q) WAQTD the details of all the employees in dept no 20 or earning more than or equal to 3000.
db.emp.find({$or: [{deptno: 20},{sal: {$gte: 3000}}]});
// ? Q) WAQTD the details of the employees who are earning less than 1000 or more than 3000.
db.emp.find({$or: [{sal: {$lt: 1000}},{sal: {$gt: 3000}}]});

// ? Q) WAQTD name and deptno of all the employees working in deptno 10 or 20.
db.emp.find({deptno: {$in: [10,20]}},{ename: 1, deptno: 1});
// ? Q) WAQTD name , job of all the employees whose designation is manager or analyst.
db.emp.find({job: {$in: ["manager","analyst"]}},{ename: 1, job: 1});

// ? Q) WAQTD the name , job , deptno of all the employees who is working as manager , analyst , president.
db.emp.find({job: {$in: ["manager","analyst","president"]}},{ename: 1, job: 1,deptno: 1},{});

// === $not ===
// ? Q) WAQTD the details of the employees who are not earning more than 2000.
db.emp({sal: {$not: {$gt: 2000}}});

// ? Q) WAQTD the details of the employees who are not earning comm.
db.emp.find({comm: {$not: "null"}});
// ? Q) WAQTD the details of the employees who are not reporting to 7788 and 7839.
db.emp.find({mgr: {$not: {$in: [7788, 7839]}}});
// ? Q) WAQTD the details of the employees who are not reporting to deptno 10.
db.emp.find({deptno: {$not: {$eq: 10}}});
// ? Q) WAQTD the details of the employees who are not working as manager.
db.emp.find({job: {$not: {$eq: "manager"}}});
// ? Q) WAQTD the details of the employees who are not working as president.
db.emp.find({job: {$not: {$eq: "president"}}});
// ? Q) WAQTD  name and deptno of all the employees except 10.
db.emp.find({deptno: {$not: {$eq: 10}}},{ename: 1, deptno: 1},{});

// === $nor ===
// ? Q) WAQTD ename , job , deptno for all the employees who are neither working as clerk nor in dept no 10.
db.emp.find({$nor: [{job: "clerk"},{deptno: 10}]},{ename: 1, job: 1, deptno: 1},{});

// ? Q) WAQTD ename , job , deptno for all the employees who are neither working as clerk nor in dept no 20.
db.emp.find({$nor: [{job: "clerk"},{deptno: 20}]},{ename: 1, job: 1, deptno: 1},{});

// ? Q) WAQTD ename , job , deptno for all the employees who are neither working as salesman nor in dept no 30.
db.emp.find({$nor: [{job: "salesman"},{deptno: 30}]},{ename: 1, job: 1, deptno: 1},{});

// ? Q) WAQTD the details of the employees who are not earning comm and salary should not be greater than or equal to 1500.
db.emp.find({$nor: [{comm: {$gte: 1500}},{sal: {$gte: 1500}}]});
// ? Q) WAQTD the details of the employees who are not joined after may 1981 and not earning more than 1000.
db.emp.find({$nor: [{hiredate: {$gt: "31-may-1981"}}, {sal: {$gt: 1000}}]});
// ? Q) WAQTD the details of the employees who are not reporting to 7839 and not belonging to dept no 10.
db.emp.find({$nor: [{mgr: 7839},{deptno: 10}]});
// ? Q) WAQTD the details of all the employees not in dept no 20 and earning not more than or equal to 3000.
db.emp.find({$nor: [{deptno: 20},{sal: {$gte : 3000}}]},{},{});
// ? Q) WAQTD name and deptno of all the employees expect deptno 10,30.
db.emp.find({$nor: [{deptno: {$in : [10,30]}}]},{ename: 1, deptno: 1, _id: 0},{});