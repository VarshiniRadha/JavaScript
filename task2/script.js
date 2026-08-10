/*Task 1 Variables – Student Details
Create variables for studentName, age, course, and mark.Use let, const, and var at least once.
Print all details using console.log().*/
console.log("Task 1")
var studentName= "Varshini"
let studentAge= 24
const course= "Information Technology"
var studentMark= 89
console.log(`Student name is ${studentName}`);
console.log(`Student age is ${studentAge}`);
console.log(`Course : ${course}`);
console.log(`Mark : ${studentMark}`);


/*Task 2 User Input
Use prompt() to get:Name, Age
Display the name in the console.Display the age using alert().*/
console.log("Task 2");
var myName= prompt("Enter you name:")
var myAge= prompt("Enter your age:")
console.log(`My name is ${myName}`)
//console.log(`My age is ${myAge}`)
alert("My age is "+myAge)


/*Task 3 Data Types
Create one variable for each:String,Number,Boolean,Undefined,Null
Print the value and its typeof*/
console.log("Task 3");
var string1= "Stackly"
var number1= 123
var boolean1= true
var undefined1;
var null1= null;
console.log(`${string1} ${typeof(string1)}`)
console.log(`${number1} ${typeof(number1)}`)
console.log(`${boolean1} ${typeof(boolean1)}`)
console.log(`${undefined1} ${typeof(undefined1)}`)
console.log(`${null1} ${typeof(null1)}`)

/*Task 4 Array – Shopping List
Create an array containing 6 products:"Shirt", "Pant", "Shoes", "Watch", "Bag", "Cap"
Print:First product,Third product,Last product, Complete array*/
console.log("Task 4");
let shoppingList=["Shirt", "Pant", "Shoes", "Watch", "Bag", "Cap"]
console.log(`First item : ${shoppingList[0]}`)
console.log(`Third item : ${shoppingList[2]}`)
console.log(`Last item : ${shoppingList[shoppingList.length-1]}`)
for(let i=0;i<shoppingList.length;i++)
{
    console.log(`Items in the cart : ${shoppingList[i]}`)
}
console.log(`Items in the cart: ${shoppingList}`)

/*Task 5 Object – Employee Details
Create an object containing:name,age,role,salary
Print each property separately.*/
console.log("Task 5");
let details={
    Ename: "Varshini",
    Eage: 24,
    Erole: "Developer",
    Esalary: 40000
};
console.log(`Employee name: ${details.Ename}`)
console.log(`Employee age: ${details.Eage}`)
console.log(`Employee role: ${details.Erole}`)
console.log(`Employee salary: ${details.Esalary}`)

/*Task 6 Arithmetic Operator – Bill Calculator
Given: Product price = 500, Quantity = 3
Calculate and print:Total price,Discount of ₹100,Final amount,Use +, -, *, and /.*/
console.log("Task 6");
let Product_price = 500
let Quantity = 3
let discount=100
let tot= Product_price*Quantity
console.log(`Total price = ${tot}`);
console.log(`After Discount = ${tot-discount}`);
console.log(`Final amount = ${tot-discount}`);

/* For Division
let discountPerProduct=discount/Quantity
console.log(discountPerProduct);

For Addition
let deliverFee=50
console.log((tot-discount)+deliverFee)
*/

/*Task 7 Comparison Operators
Print the results.*/
console.log("Task 7");
console.log(25 > 20)         //true because 25 is greater to 20
console.log(15 < 10)         //false because 10 smaller to 15
console.log(50 == "50")      //true because values are same
console.log(50 === "50")     //false because values are same but data type is different
console.log(100 != "100")    //false because values are same but code shows not so it is false
console.log(100 !== "100")   //true because data type is different and with not condition it is true


/* Task 8 Logical Operators
Find the output of these without running them first:*/
console.log("Task 8");

console.log(10 > 5 && 20 > 15 || 5 > 10);
//          true   &&  true   || false  
//                true        || false  = true

console.log(10 < 5 || 20 >= 20 && 5 == "5");
//          false  ||  true   || true 
//                true        || true  = true

console.log(15 === "15" || 10 > 5 && 8 < 3);
//            false     ||  true  && false  
//                false ||           false  = false (because && is executed first before ||)

console.log(20 >= 20 && 5 !== "5" || 10 < 5);
//            true   &&  true   || false  
//                true           || false  = true

console.log(25 < 20 || 30 == "30" && 10 >= 10);
//          false   ||  true      && true  
//                true            && true  = true


/*Task 9 Ternary Operator – Login
let passwordCorrect = true;
Using a ternary operator, print:
"Login successful"
if true, otherwise:
"Invalid password" */
console.log("Task 9");
let passwordCorrect = true;
passwordCorrect==true ? console.log("Login successful") : console.log("Invalid password")


/*Task 10 Type Casting – Marks
You have:
let mark1 = "80";
let mark2 = "70";
Convert both values into numbers and calculate the total.
Expected: 150 */
console.log("Task 10");
let mark1 = "80";
let mark2 = "70";
console.log("Total is :"+ (Number(mark1)+ Number(mark2)))


/*Task 11. Voting Eligibility
Create:
let age = 20;
Using if...else, print: "You can vote"
if age is 18 or above; otherwise:"You cannot vote" */
console.log("Task 11");
let age = 20;
if(age>=18)
{
    console.log(`You can vote`)
}
else{
    console.log(`You cannot vote`)
}



/* Task 12 Student Grade
Create a mark variable.
Using if...else if...else:
90–100 → A Grade
75–89 → B Grade
50–74 → C Grade
Below 50 → Fail
Above 100 or below 0 → Invalid Mark */
console.log("Task 12");
let mark=prompt("Enter your mark")
if(mark>=90 && mark<=100)
{
    console.log("A Grade");
    alert("A grade")
}
else if(mark>=75 && mark<=89)
{
    console.log("B Grade");
    alert("B grade")
}
else if(mark>=50 && mark<=74)
{
    console.log("C Grade");
    alert("C grade")
}
else if(mark>=1 && mark<=49)
{
    console.log("Fail");
    alert("Fail")
}
else
{
   console.log("Invalid Mark");
   alert("Invalid Mark")
}


/*Task 13 Time Greeting
Create:
let time = 15;
Using if...else if, display:
1–6 → Early Morning
7–12 → Good Morning
13–15 → Good Afternoon
16–19 → Good Evening
20–24 → Good Night
Otherwise → Invalid Time
This directly follows the time-condition practice in your code.*/
console.log("Task 13");
let time = 15;
if(time>=1 && time<=6)
{
    console.log("Early Morning")
}
else if(time>=7 && time<=12)
{
    console.log("Good Morning")
}
else if(time>=13 && time<=15)
{
    console.log("Good Afternoon")
}
else if(time>=16 && time<=19)
{
    console.log("Good Evening")
}
else if(time>=20 && time<=24)
{
    console.log("Good Night")
}
else
{
    console.log("Invalid Time");
    
}


/*Task 14 Nested If – Job Eligibility
Take:age,height,weight
A candidate is eligible only if:
Age ≥ 21
Height ≥ 170 cm
Weight ≥ 70 kg
Use nested if statements and display the appropriate reason if the candidate is not eligible.*/
console.log("Task 14");
var candidateAge = prompt("Enter the Candiadate Age")
var candidateHeight = prompt("Enter the Candiadate Height")
var candidateWeight = prompt("Enter the Candiadate Weight")
if(candidateAge>=21){
    if(candidateHeight>=170)
    {
        if(candidateWeight>=70)
        {
            console.log(`Congrats! You are eligible`)
            alert(`Congrats! You are eligible`)
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

/*Task 15 Switch – Traffic Light
Create:
let trafficLight = "green";
Using switch, display:
red → "Stop the vehicle"
yellow → "Get ready"
green → "Go"
Anything else → "Invalid traffic light" */
console.log("Task 15");
let trafficLight = "green";
switch (trafficLight) {
    case "red":
        console.log("Stop the vehicle")
        break;
    case "yellow":
        console.log("Get ready")
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid traffic light")
        break;
}


