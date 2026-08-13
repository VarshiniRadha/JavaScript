/* Task 1 — Employee Eligibility (Topics: variables, prompt, comparison, logical operators, if-else.)
Use prompt() to get: Employee name,Age,Experience,Salary
Rules: Age >= 21,Experience >= 1 year,Salary >= 20,000
If all are true, print:Employee is eligible
Otherwise, print the exact reason why they are not eligible.*/

console.log("Task 1")
var employeeName = prompt("Enter your name");
var employeeAge = prompt("Enter your age");
var employeeExp = prompt("Enter your Experience")
var employeeSalary = prompt("Enter your Salary");
if(employeeAge >= 21)
{
    if(employeeExp >= 1)
    {
        if(employeeSalary >= 20000)
        {
            console.log(`Employee is eligible`)
            document.writeln(`Employee is eligible`)
        }
        else{
            console.log(`Employee is not eligible because your salary ${employeeSalary} but must be 20000 and above `)
        }
    }
    else{
        console.log(`Employee is not eligible because your experience ${employeeExp} but must be 1 year and above `)
    }
}
else{
    console.log(`Employee is not eligible because your age ${employeeAge} but must be 21 and above `)
}



/* Task 2 — ATM Withdrawal (Topics: operators, if-else, logical operators.)
Create an ATM program.Current balance = 10000.Ask the user:Enter withdrawal amount:
Rules:Amount must be greater than 0,Amount must be <= balance, Withdrawal amount should be a multiple of 100
Example:
Balance: ₹10000
Withdraw: ₹2500

Output:
Withdrawal successful
Remaining balance: ₹7500 */

console.log("Task 2")
var currentBalance = 10000
var withdrewAmt = prompt("Enter withdrawal amount between 0 to 10,000:")
if(withdrewAmt > 0 && withdrewAmt <= currentBalance && withdrewAmt%100 == 0)
{
    console.log(`Withdrawal successful`);
    console.log(`Remaining balance: ₹${currentBalance-withdrewAmt}`);
}
else{
    console.log("Invalid entry");
}


/* Task 3 — Login System with 3 Attempts 
(Topics: while, if-else, break, variables. Your notes already use a similar OTP-attempt pattern.)
Create:
correctUsername = "admin"
correctPassword = "12345"
Ask the user for username and password.Give the user maximum 3 attempts.
Example:
Attempt 1 → wrong
Attempt 2 → wrong
Attempt 3 → correct

Output:
Login successful
If all 3 attempts fail: Account locked */

console.log("Task 3")
var correctUsername = "admin"
var correctPassword = "12345"
var attempt=1
while(attempt <= 3)
{
    alert("Login System")
    var userName = prompt("Enter the username:");
    var password = prompt("Enter the password:");
    if(correctUsername==userName && correctPassword==password){
        console.log(`Attempt ${attempt} → correct`);   
        console.log(`Login successful`)
        break;
    }
    else{
        console.log(`Attempt ${attempt} → wrong`);
    }
    attempt++
}
if(attempt > 3)
{
    console.log(`Account locked`);
    
}


/* Task 4 — Student Grade System (Topics: variables, arithmetic operators, conditions.)
Ask for marks of 5 subjects.
Calculate: Total, Average, Grade
Rules: 90-100 → A, 80-89  → B, 70-79  → C, 60-69  → D, Below 60 → F
Example:
Math = 80
English = 75
Science = 90
Social = 85
Computer = 95

Total = 425
Average = 85
Grade = B */

console.log("Task 4")
var math = prompt("Enter your Math mark")
var english = prompt("Enter your English mark")
var science = prompt("Enter your Science mark")
var social = prompt("Enter your Social mark")
var computer = prompt("Enter your Computer mark")
console.log(`Math = ${math}`)
console.log(`English = ${english}`)
console.log(`Science = ${science}`)
console.log(`Social = ${social}`)
console.log(`Computer = ${computer}`)
var tot= Number(math)+ Number(english)+ Number(science)+ Number(social)+ Number(computer)
var average = tot/5
console.log(`Your Total : ${tot}`);
console.log(`Your Average : ${average}`);
if(average>=90 && average<=100)
{
    console.log("A Grade");
    alert("A grade")
}
else if(average>=80 && average<=89)
{
    console.log("B Grade");
    alert("B grade")
}
else if(average>=70 && average<=79)
{
    console.log("C Grade");
    alert("C grade")
}
else if(average>=60 && average<=69)
{
    console.log("D grade");
    alert("D grade")
}
else
{
    if(average < 60){
        console.log("Fail");
        alert("Fail")
    }
   
}


/* Task 5 — Number Pattern (Challenge: Do each one using a different loop.)
Using a for loop:
1
2
3
4
5
Then create:
5
4
3
2
1
Then:
1 2 3 4 5  */

console.log("Task 5")
var i,l=5,d=1
//for loop
console.log("Using for loop");
for(i=1; i<=5; i++)
{
    console.log(i)
}
//while loop
console.log("Using while loop");
while(l>=1)
{
    console.log(l)
    l--
}
//do while loop
console.log("Using do while loop");
do{
    document.writeln(d);                   // don't know how to print in the same line in console
    d++;
}while(d>1 && d<=5)


/* Task 6 — Shopping Cart (Topics: arrays, loops, arithmetic.)
Create an array:
let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];
Create prices:
let prices = [50000, 1000, 2000, 15000];

Using a loop, display:
Laptop - ₹50000
Mouse - ₹1000
Keyboard - ₹2000
Monitor - ₹15000
Then calculate:
Total = ₹68000   */


console.log("Task 6");
let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];
let prices = [50000, 1000, 2000, 15000];
var total=0
for( var i=0;i<=products.length;i++)
{
    console.log(`${products[i]} - ₹${prices[i]}`);
}
for (let c of prices)
{
   total+= c
}
console.log("Total : ₹"+total);



/* Task 7 — Employee Object (Your notes cover objects and for...in.)
Create:
let employee = {
    name: "Arun",
    empId: "STK-101",
    role: "Software Engineer",
    salary: 45000
};
Using for...in, print:
name : Arun
empId : STK-101
role : Software Engineer
salary : 45000

Then create a function:
calculateBonus()
If salary >= 40000:
Bonus = 5000
Otherwise:
Bonus = 3000   */

console.log("Task 7");
let employee = {
    name: "Arun",
    empId: "STK-101",
    role: "Software Engineer",
    salary: 45000
};
for( let c in employee){
    console.log(`${c} : ${employee[c]}`);
}
function calculateBonus(salary)
{
    if(employee.salary >= 40000)
    {
        console.log(`Bonus = 5000`); 
    }
    else{
        console.log(`Bonus = 3000`); 
    }
}
calculateBonus(employee.salary)



/* Task 8 — Bank Account Functions
(Challenge: Don't use global variables unnecessarily. Pass values through parameters and return results. 
This practices the parameter/argument/return concepts in your notes.)
Create these functions:
deposit()
withdraw()
checkBalance()
Starting balance:
₹10,000
Example:
deposit(5000)
withdraw(2000)
checkBalance()

Expected:
Deposited: ₹5000
Withdrawn: ₹2000
Current Balance: ₹13000  */

console.log("Task 8");
let balance = 10000
let depositAmt = prompt("Enter the amount to be deposited")
let withdrawAmt = prompt("Enter the amount to be withdraw")

/*let checkBalance = function (total,given,taken) {
    return (total+given)-taken
}
console.log(`Current Balance ${checkBalance(balance,Number(depositAmt),Number(withdrawAmt))}`); 
*/
function deposit(amount)
{
    balance += amount 
    console.log(`Deposited ${depositAmt}`);
}
function withdraw(amount)
{
    balance -= amount 
    console.log(`Withdrawn ${withdrawAmt}`);
}
function checkBalance()
{
    console.log(`Current Balance ${balance}`);
}
deposit(Number(depositAmt))
withdraw(Number(withdrawAmt))
checkBalance()


/* Task 9 — Callback Calculator
Create:
add()
sub()
mul()
div()
Then create a higher-order function:
calculate(callback, a, b)
Example:
calculate(add, 20, 10);
calculate(sub, 20, 10);
calculate(mul, 20, 10);
calculate(div, 20, 10);

Expected:
30
10
200
2      */

console.log("Task 9");

function add(num1,num2)
{
    console.log("Addition : "+(num1+num2));
}
function sub(num1,num2)
{
    console.log("Subtraction : "+(num1-num2));
}
function mul(num1,num2)
{
    console.log("Multiplication : "+num1*num2);
}
function div(num1,num2)
{
    console.log("Division : "+num1/num2);
}
function calculate (callback, a, b)
{
    callback(a , b)
}
calculate(add, 20, 10);
calculate(sub, 20, 10);
calculate(mul, 20, 10);
calculate(div, 20, 10);
