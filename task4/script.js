/*🟢Level 1 — Variables & Operators
1. Salary Calculator
let salary = 30000;
let bonus = 5000;
let tax = 2000;
Calculate and print:
Final Salary: 33000  */

console.log("Task 1")
let salary = 30000;
let bonus = 5000;
let tax = 2000;
totalSalary = salary + bonus - tax
console.log(`Final Salary: ${totalSalary}`);


/*2. Predict the Output
let a = 10;
let b = a++;
let c = ++a;
console.log(a);
console.log(b);
console.log(c); */

console.log("Task 2")
let a = 10;             //value of aa=null
let b = a++;            //value of b=10  , a=10+1
let c = ++a;            //value of a=11+1 ,b=10   , c=12
console.log(a); 
console.log(b); 
console.log(c);

/*3. Logical Operators
Without running the code, predict the output:
console.log(10 > 5 && 20 < 10 || 5 === "5");
console.log(10 < 5 || 20 >= 20 && 5 == "5");
console.log(!(10 > 5)); */

console.log("Task 3")
console.log(10 > 5 && 20 < 10 || 5 === "5");
//          true   && false   ||   false
//              false         ||   false     =  false

console.log(10 < 5 || 20 >= 20 && 5 == "5");
//          false  ||   true   &&  true
//          false  ||         true           =  true

console.log(!(10 > 5));  //false

/*🟡 Level 2 — Conditions
4. ATM Withdrawal
Create:
let balance = 10000;
let withdrawal = 2500;
Rules:
•	Withdrawal must be greater than 0
•	Withdrawal cannot exceed balance
•	Withdrawal must be a multiple of 100
•	Otherwise show appropriate error
•	If successful, print remaining balance
This is directly related to the ATM example in your notes.  */

console.log("Task 4");
let balance = 10000;
let withdrawal = 2500;
if(withdrawal > 0)
{
    if(!(withdrawal > balance))
    {
         if(withdrawal%100 === 0)
    {
        console.log(`Remaining Balance : ${balance-withdrawal}`);
    }
    else{
        console.log("Withdrew amount is not a multiple of 100");
    }
    }
    else{
        console.log("Withdrew amount is grater than balance");
    }
   
}
else{
    console.log("Withdrew exceeded the minimum limit");
}

/*5. Student Grade
let mark = 78;
Create an if / else if / else program:
90-100 → A
80-89  → B
70-79  → C
60-69  → D
Below 60 → Fail  */

console.log("Task 5");
let mark = 78;
if(mark>=90 && mark<=100)
{
    console.log("A Grade");
    alert("A grade")
}
else if(mark>=80 && mark<=89)
{
    console.log("B Grade");
    alert("B grade")
}
else if(mark>=70 && mark<=79)
{
    console.log("C Grade");
    alert("C grade")
}
else if(mark>=60 && mark<=69)
{
    console.log("D grade");
    alert("D grade")
}
else
{
   console.log("Fail");
   alert("Fail")
}


/*6. Nested Login
Create:
let username = "admin";
let password = "1234";
let otp = 5555;
Rules:
1.	Check username
2.	If correct, check password
3.	If correct, check OTP
4.	Print "Login successful" only when all three are correct.  */
/*
console.log("Task 6");
let username = "admin";
let password = "1234";
let otp = 5555;
let loginName = prompt("Enter your name: ")
let loginPassword = prompt("Enter your password")
let loginOtp = Number(prompt("Enter you otp"))
if(username === loginName && password === loginPassword && otp === loginOtp)
{
    console.log("Login successful");
}
else{
    console.log("Invalid data entered")
}


/*🟠 Level 3 — Loops
7. Number Pattern
Using a for loop:
1
2
3
4
5
6
7
8
9
10   */

console.log("Task 7")
for(let i=1; i<=10; i++)
{
    console.log(i);
}

/* 8. Multiplication Table
let num = 7;
Expected:
7 x 1 = 7
7 x 2 = 14
...
7 x 10 = 70   */

console.log("Task 8");
let num = 7
for(let i=1; i<=10; i++)
{
    console.log(`${num} x ${i} = ${num*i}`);
}


/*9. Reverse Countdown
Using while:
10
9
8
7
6
5
4
3
2
1
0  */

console.log("Task 9");
let i = 10;
while(i>=0)
{
    console.log(i);
    i--
}


/* 10. OTP System
Create:
let correctOTP = 1234;
Allow the user maximum 3 attempts using while.
If correct:
OTP verified
Otherwise after 3 attempts:
Account blocked
This builds directly on your OTP loop example.   */
/*
console.log("Task 10");
let correctOTP = 1234;
let attempt = 1
while(attempt <= 3)
{
    var OTP = Number(prompt("Enter the OTP"))
    if(correctOTP === OTP)
    {
        //console.log(`attempt ${attempt} -> correct`);
        console.log("OTP verified"); 
        break;
    }
    else{
       // console.log(`attempt ${attempt} -> wrong`)
    }
    attempt++
}
if(attempt>3)
{
    console.log("Account blocked");
}


/*🔵 Level 4 — Arrays & Objects
11. Array Search
let fruits = ["apple", "banana", "orange", "grapes", "mango"];
Using a loop, print every fruit.
Then print:
First fruit: apple
Last fruit: mango   */

console.log("Task 11");
let fruits = ["apple", "banana", "orange", "grapes", "mango"];
for(let i=0; i<= fruits.length-1; i++)
{
    console.log(fruits[i])
}
console.log("First fruit:",fruits[0])
console.log("Last fruit:",fruits[fruits.length-1])


/*12. Object Details
Create:
let employee = {
    name: "Arun",
    empId: "STK-101",
    role: "Developer",
    salary: 45000
};
Print each property using for...in.
Your notes use for...in for object traversal.  */

console.log("Task 12");
let employee = {
    name: "Arun",
    empId: "STK-101",
    role: "Developer",
    salary: 45000
};
for(c in employee)
{
    console.log(employee[c]);
}


/*🔥 Level 5 — Functions
13. Calculator Function
Create:
function calculator(a, b, operator) {
    // your code
}
It should support:
+
-
*
/
%
Example:
calculator(20, 5, "+");
calculator(20, 5, "*");   */

console.log("Task 13")
function calculator(a, b, operator) {
    if(operator == "+")
    {
        return a+b
    }
    if(operator == "-")
    {
        return a-b
    }
    if(operator == "*")
    {
        return a*b
    }
    if(operator == "/")
    {
        return a/b
    }
    if(operator == "%")
    {
        return a%b
    }
}
console.log("+ :",calculator(20,5,"+"))
console.log("- :",calculator(20,5,"-"))
console.log("* :",calculator(20,5,"*"))
console.log("/ :",calculator(20,5,"/"))
console.log("% :",calculator(20,5,"%"))

/*14. Employee Salary
Create:
function salaryDetails(salary, bonus) {
    // return final salary
}
Example:
salaryDetails(40000, 5000);
Expected:
45000   */

console.log("Task 14")
function salaryDetails(salary, bonus) {
    return salary+bonus
}
console.log(salaryDetails(40000,5000));

/* 15. Function With Default Parameter
Create a function:
function employee(name, role = "Trainee") {
    // print name and role
}
Test:
employee("Arun");
employee("Kamal", "Developer");    */

console.log("Task 15")
function employee1(name, role = "Trainee"){
    console.log("Name :",name)
    console.log("Role :",role)
}
employee1("Arun");
employee1("Kamal", "Developer");

/*🚀 Level 6 — Advanced Functions
16. Callback Task
Create:
function calculate(a, b, callback) {
    // perform addition
    // then call callback
}
Create separate functions:
add()
sub()
mul()
Then pass them as callbacks.
This practices the callback/HOF concept from your notes.  */

console.log("Task 16")
function add(a,b)
{
    console.log(a+b)
}
function sub(a,b)
{
    console.log(a-b)
}
function mul(a,b)
{
    console.log(a*b)
}
function div(a,b)
{
    console.log(a/b)
}
function mod(a,b)
{
    console.log(a**b)
}
function calculate(a, b, callback) {
    callback(a,b)
}
add(10,20,add)
sub(10,20,sub)
mul(12,20,mul)
div(10,20,div)
mod(10,20,mod)

/*17. Generator Task
Create a generator that gives:
₹100 Cashback
10% Discount
₹500 Cashback
20% Discount
Better Luck Next Time
Use .next().value to retrieve each reward.  */

console.log("Task 17");
function* reward(){
    yield "₹100 Cashback"
    yield "10% Discount"
    yield "₹500 Cashback"
    yield "20% Discount"
    yield "Better Luck Next Time"
}
let gernerator = reward()
console.log(gernerator.next().value);
console.log(gernerator.next().value);
console.log(gernerator.next().value);
console.log(gernerator.next().value);
console.log(gernerator.next().value);
//console.log(gernerator.next())
if(gernerator.next().done)
{
    console.log("Completed")
}

/*💥 Level 7 — Spread / Rest / Destructuring
18. Spread Operator
Given:
let frontend = ["HTML", "CSS", "JavaScript"];
let backend = ["Node", "Express", "MongoDB"];
Create:
fullStack
Expected:
["HTML", "CSS", "JavaScript", "Node", "Express", "MongoDB"]
Your notes specifically use spread to merge arrays and objects.  */

console.log("Task 18");
let frontend = ["HTML", "CSS", "JavaScript"];
let backend = ["Node", "Express", "MongoDB"];
let fullStack=[...frontend,...backend]
console.log(fullStack);
console.log(...fullStack);

/*19. Array Destructuring
Given:
let student = ["Arun", "ECE", 8.5, "Developer"];
Use destructuring to create:
name
department
cgpa
role
Do not use:
student[0]
student[1]    */

console.log("Tak 19");
let student = ["Arun", "ECE", 8.5, "Developer"];
let [name, department, cgpa, role] = student;
console.log("Name :",name);
console.log("Department :",department);
console.log("CGPA :",cgpa);
console.log("Role :",role);

/* 20. Nested Object Destructuring
Given:
let company = {
    name: "Stackly",
    employee: {
        name: "Arun",
        role: "Developer",
        salary: 50000
    }
};
Using nested object destructuring, directly extract:
employeeName
role
salary   */

console.log("Task 20");
let company = {
    name: "Stackly",
    employee: {
        ename: "Arun",
        erole: "Developer",
        esalary: 50000
    }
};
let {
    employee: {
        ename: employeeName,
        erole,
        esalary
    }
} = company;
console.log("Name :",employeeName);
console.log("Role :",erole);
console.log("Salary :",esalary);


/*🏆 Final Challenge — Mini Project
Build a Student Management Console Program using only the concepts in your notes.
Create:
let students = [
    {
        name: "Arun",
        department: "ECE",
        mark: 85
    },
    {
        name: "Kamal",
        department: "CSE",
        mark: 72
    },
    {
        name: "Livin",
        department: "ECE",
        mark: 92
    }
];
Your program should:
1.	Print all students
2.	Print only ECE students
3.	Find students who scored above 80
4.	Calculate total marks
5.	Calculate average
6.	Display highest mark
7.	Display lowest mark
8.	Use for...of
9.	Use functions
10.	Use object destructuring  */

console.log("Task 21");
let students = [
    {
        name: "Arun",
        department: "ECE",
        mark: 85
    },
    {
        name: "Kamal",
        department: "CSE",
        mark: 72
    },
    {
        name: "Livin",
        department: "ECE",
        mark: 92
    }
];

// 1. Print all students
function printAllStudents() {
    console.log("All Students:");
    for (let student of students) {
        let { name, department, mark } = student;
        console.log(name, department, mark);
    }
}

// 2. Print only ECE students
function printECEStudents() {
    console.log("ECE Students:");
    for (let student of students) {
        let { name, department, mark } = student;
        if (department === "ECE") {
            console.log(name, department, mark);
        }
    }
}

// 3. Find students who scored above 80
function studentsAbove80() {
    console.log("Students who scored above 80:");
    for (let student of students) {
        let { name, mark } = student;
        if (mark > 80) {
            console.log(name, mark);
        }
    }
}

// 4. Calculate total marks
function calculateTotal() {
    let total = 0;
    for (let student of students) {
        let { mark } = student;
        total = total + mark;
    }
    return total;
}

// 5. Calculate average
function calculateAverage() {
    let total = calculateTotal();
    return total / students.length;
}

// 6. Display highest mark
function findHighest() {
    let highest = students[0].mark;
    for (let student of students) {
        let { mark } = student;
        if (mark > highest) {
            highest = mark;
        }
    }
    return highest;
}

// 7. Display lowest mark
function findLowest() {
    let lowest = students[0].mark;
    for (let student of students) {
        let { mark } = student;
        if (mark < lowest) {
            lowest = mark;
        }
    }
    return lowest;
}
printAllStudents();
printECEStudents();
studentsAbove80();
console.log("Total Marks:", calculateTotal());
console.log("Average:", calculateAverage());
console.log("Highest Mark:", findHighest());
console.log("Lowest Mark:", findLowest());

