/*🟢 Level 1 — Basics
Task 1: Student Details
•	Create variables for name, age, department, and cgpa.
•	Print them using console.log().
•	Use both normal concatenation and template literals.  */

console.log("Task 1")
var Sname = "Varshini"
var Sage = 24
var Sdept = "IT"
var SCGPA = 8.93
console.log("Name : ",Sname)
console.log("Age : ",Sage)
console.log("Department : ",Sdept)
console.log("CGPA : ",SCGPA)
console.log(`Name : ${Sname}`);
console.log(`Age : ${Sage}`);
console.log(`Department : ${Sdept}`);
console.log(`CGPA : ${SCGPA}`);


/*Task 2: Simple Calculator
Create variables a = 20 and b = 10.
Print:Addition, Subtraction, Multiplication, Division, Modulus, Power  */

console.log("Task 2");
var a=20, b=10
console.log("Addition : ",a+b);
console.log("Subtraction : ",a-b);
console.log("Multiplication : ",a*b);
console.log("Division : ",a/b);
console.log("Modulus : ",a%b);
console.log("Power : ",a**b);


/*Task 3: Age Checker
Take age using prompt().
18 or above → Eligible to vote
Below 18 → Not eligible  */

console.log("Task 3");
let age = Number(prompt("Enter your age for voting process"))
if(age >= 18)
{
    alert("Eligible to vote")
    console.log("Eligible to vote")
}
else{
    alert("Not eligible")
    console.log("Not eligible");
}


/*🟡 Level 2 — Conditions
Task 4: Student Grade
Take marks using prompt().
90–100 → A
80–89  → B
70–79  → C
60–69  → D
Below 60 → Fail
Use if / else if / else.  */

console.log("Task 4");
let mark = Number(prompt("Enter your mark"))
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


/* Task 5: Login System
Create:
correctUsername = "admin"
correctPassword = "1234"
Ask the user for username and password.
Expected:
Both correct → Login successful
Username wrong → Invalid username
Password wrong → Invalid password
Both wrong → Invalid credentials   */

console.log("Task 5");
let username = "admin";
let password = "1234";
let loginName = prompt("Enter your name for login: ")
let loginPassword = prompt("Enter your password for login")
if(username === loginName && password === loginPassword )
{
    console.log("Login successful");
}
else if(username !== loginName && password === loginPassword )
{
    console.log("Invalid username");
}
else if(username === loginName && password !== loginPassword )
{
    console.log("Invalid password");
}
else{
    console.log("Invalid credentials ")
}


/*Task 6: ATM Withdrawal
Create:
balance = 10000
Ask the user for withdrawal amount.
Check:
•	Amount must be greater than 0
•	Amount cannot exceed balance
•	Amount must be a multiple of ₹100
•	If valid, subtract it from balance
This is directly related to the ATM logic in your notes.  */

console.log("Task 6");
let balance = 10000;
let withdrawal = Number(prompt("Enter the amount to withdrew"))
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

/*🟡 Level 3 — Loops
Task 7: Multiplication Table
Take a number from the user.
For example:
Input: 7

7 x 1 = 7
7 x 2 = 14
...
7 x 10 = 70
Use a for loop.  */

console.log("Task 7");
let num = 7
for(let i=1; i<=10; i++)
{
    console.log(`${num} x ${i} = ${num*i}`);
}

/*Task 8: Reverse Number
Input:
12345
Output:
54321
Use a loop.  */

console.log("Task 8");
let revNumber = [1,2,3,4,5]
for(let i=4; i>=0; i--)
{
    console.log(revNumber[i])
}
//let reverseValue = revNumber.reverse()
//console.log(reverseValue);

/*Task 9: OTP System
Create:
correctOTP = 1234
Give the user maximum 3 attempts.
Correct → OTP verified
Wrong → Try again
3 wrong attempts → Account blocked
This builds directly on the OTP while-loop example in your notes.   */

console.log("Task 9");
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
       console.log(`Try again`)
    }
    attempt++
}
if(attempt>3)
{
    console.log("Account blocked");
}


/* 🟠 Level 4 — Functions
Task 10: Salary Calculator
Create:
calculateSalary(basicSalary, bonus)
Return:
basicSalary + bonus
Example:
calculateSalary(30000, 5000) → 35000  */

console.log("Task 10");
var basicSalary = 30000
var bonus = 5000
function calculateSalary(salary, bonus)
{
    return salary+bonus;
}
console.log(calculateSalary(basicSalary, bonus))

/*Task 11: Calculator Function
Create separate functions:
add()
subtract()
multiply()
divide()
Then call them with different values.  */

console.log("Task 11")
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


/* Task 12: Eligibility Function
Create:
checkEligibility(age, height, weight)
Rules:
age >= 21
height >= 170
weight >= 70
If all conditions are satisfied:
Eligible
Otherwise:
Not eligible  */

console.log("Task 12");
var candidateAge = prompt("Enter the Candiadate Age")
var candidateHeight = prompt("Enter the Candiadate Height")
var candidateWeight = prompt("Enter the Candiadate Weight")
function checkEligibility(age, height, weight)
{
    if(candidateAge>=21){
        if(candidateHeight>=170)
        {
            if(candidateWeight>=70)
            {
             console.log(`You are eligible`)
             alert(`You are eligible`)
            }
            else{
                console.log(`Sorry You are not eligible because your weight ${candidateWeight} is less than 70`);
                alert(`Sorry You are not eligible because your weight ${candidateWeight} is less than 70`);
            }
        }
        else{
            console.log(`Sorry You are not eligible because your height ${candidateHeight} is less than 170`);
            alert(`Sorry You are not eligible because your height ${candidateHeight} is less than 170`);
        }
    }
    else{
        console.log(`Sorry You are not eligible because your age ${candidateAge} is less than 21`);
        alert(`Sorry You are not eligible because your age ${candidateAge} is less than 21`);
    }
}
checkEligibility(candidateAge, candidateHeight, candidateWeight)


/*🔴 Level 5 — Array Practice
Your notes cover methods such as push, pop, shift, unshift, splice, concat, slice, flat, includes, indexOf, sort, and reverse.
Task 13: Shopping Cart
let cart = ["Laptop", "Mouse", "Keyboard"];
Perform:
1.	Add "Monitor"
2.	Remove "Mouse"
3.	Add "Headset" at the beginning
4.	Remove the last item
5.	Print final cart
Use only array methods.   */

console.log("Task 13");
let cart = ["Laptop", "Mouse", "Keyboard"];
cart.push("Monitor")
cart.splice(1, 1); 
cart.unshift("Headset")
cart.pop()
console.log(`Items in the cart are`);
console.log(cart);
for (var i=0;i<=cart.length-1;i++)
{
    console.log(cart[i]);
    
}

/* Task 14: Find Maximum
let numbers = [10, 45, 23, 89, 12, 67];
Find the largest number. */

console.log("Task 14");
let numbers = [10, 45, 23, 89, 12, 67];
let sortValue = numbers.sort()
console.log("Largest value in the array is ",sortValue[sortValue.length-1]);

/* Task 15: Remove Duplicate Values
Input:
[1, 2, 3, 2, 4, 1, 5]
Output:
[1, 2, 3, 4, 5]  */

console.log("Task 15");
let numberswithD = [1, 2, 3, 2, 4, 1, 5, 3]
let removeDuplicate = numberswithD.filter((c, i, t) => {
    return numberswithD.indexOf(c) === i;
})
console.log(removeDuplicate);


/* 🔥 Level 6 — Higher-Order Functions
Your notes specifically cover forEach, map, filter, find, reduce, some, and every.
Task 16: Employee Salary Filter
let employees = [
  {name: "Arun", salary: 30000},
  {name: "Bala", salary: 50000},
  {name: "Kumar", salary: 25000},
  {name: "Ravi", salary: 70000}
];
Using filter():
Find employees whose salary >= 40000   */

console.log("Task 16");
var employees = [
  {name: "Arun", salary: 30000},
  {name: "Bala", salary: 50000},
  {name: "Kumar", salary: 25000},
  {name: "Ravi", salary: 70000}
];
let salaryBased = employees.filter((c, i, t) => {
    return c.salary >=40000
})
console.log(salaryBased);
for(var i=0; i<= salaryBased.length-1; i++)
{
    console.log(salaryBased[i]);
}

/* Task 17: Increase Salary
Using map():
salary < 40000 → increase by 5000
salary >= 40000 → increase by 10000  */

console.log("Task 17");
let newSalary = employees.map((c,i,t)=>{
    if(c.salary <40000)
    {
        return { name:c.name, salary:c.salary + 5000}
    }
    else if(c.salary >= 40000)
    {
        return { name:c.name, salary:c.salary + 10000}
    }
})
console.log(newSalary);
for(var i=0; i<= newSalary.length-1; i++)
{
    console.log(newSalary[i]);
}

/* Task 18: Total Salary
Using reduce():
Find the total salary of all employees. */

console.log("Task 18");
let allSalary = employees.reduce((acc,c,i,t)=>{
    return acc + c.salary
},0)
console.log("Salry of total employees is : ",allSalary);


/* Task 19: Check Employee
Using some():
Is there any employee earning more than ₹100000?
Using every():
Are all employees earning at least ₹20000?  */

console.log("Task 19");
let usingSome = employees.some((c,i,t)=>{
    return c.salary>100000
})
console.log("Whether any employees earning more than ₹100000? ",usingSome);

let usingEvery = employees.every((c,i,t)=>{
    return c.salary >=20000
})
console.log("Whether all employees earning at least ₹20000? ",usingEvery);


/* 🚀 Interview Challenge
Task 20: Employee Management Mini Program
Create an array:
let employeesat = [
  {
    id: 101,
    name: "Arun",
    department: "IT",
    salary: 35000
  },
  {
    id: 102,
    name: "Bala",
    department: "HR",
    salary: 45000
  },
  {
    id: 103,
    name: "Kumar",
    department: "IT",
    salary: 60000
  }
];
Without changing the original data:
1.	Print all employee names using forEach()
2.	Get only IT employees using filter()
3.	Increase every salary by 10% using map()
4.	Find employee with salary ₹45000 using find()
5.	Calculate total salary using reduce()
6.	Check whether anyone earns above ₹50000 using some()
7.	Check whether everyone earns above ₹20000 using every()
8.	Sort employees by salary from highest → lowest
9.	Destructure each employee's name and salary
10.	Use the spread operator to create a new employee list  */

console.log("Task 20");
let employeesat = [
  {
    id: 101,
    name: "Arun",
    department: "IT",
    salary: 35000
  },
  {
    id: 102,
    name: "Bala",
    department: "HR",
    salary: 45000
  },
  {
    id: 103,
    name: "Kumar",
    department: "IT",
    salary: 60000
  }
];
// 1. Print all employee names using forEach()
console.log("1");
employeesat.forEach((c, i, t) => {
    console.log(c.name);
});

// 2. Get only IT employees using filter()
console.log("2");
let itEmployees = employeesat.filter((c, i, t) => {
    return c.department === "IT";
});
console.log(itEmployees);

// 3. Increase every salary by 10% using map()
console.log("3");
let increasedSalary = employeesat.map((c, i, t) => {
    return {
        id: c.id,
        name: c.name,
        department: c.department,
        salary: c.salary + (c.salary * 10 / 100)
    };
});
console.log(increasedSalary);

// 4. Find employee with salary ₹45000 using find()
console.log("4");
let salaryEmployee = employeesat.find((c, i, t) => {
    return c.salary == 45000;
});
console.log(salaryEmployee);

// 5. Calculate total salary using reduce()
console.log("5");
let totalSalary = employeesat.reduce((acc, c, i, t) => {
    return acc + c.salary;
}, 0);
console.log("Total salary is : ", totalSalary);

// 6. Check whether anyone earns above ₹50000 using some()
console.log("6");
let usingSomein = employeesat.some((c, i, t) => {
    return c.salary > 50000;
});
console.log("Whether any employees earning above ₹50000? ", usingSomein);


// 7. Check whether everyone earns above ₹20000 using every()
console.log("7");
let usingEveryin = employeesat.every((c, i, t) => {
    return c.salary > 20000;
});
console.log("Whether all employees earning above ₹20000? ", usingEveryin);


// 8. Sort employees by salary from highest → lowest
console.log("8");
let sortedEmployees = [...employeesat];
let sortSalary = sortedEmployees.sort((a, b) => {
    return b.salary - a.salary;
});
console.log(sortSalary);

// 9. Destructure each employee's name and salary
console.log("9");
employeesat.forEach((c, i, t) => {
    let {name, salary} = c;
    console.log(name, salary);
});

// 10. Use spread operator to create a new employee list
console.log("10");
let newEmployeeList = [...employeesat];
console.log(newEmployeeList);

