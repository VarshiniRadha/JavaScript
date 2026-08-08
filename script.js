/*Task 1 - Student Details
const for college name
let for student name
var for student age */
console.log("Task-1")
const collegeName= "Karpagam"
let studentName= "Varshini"
var studentAge= 24
console.log("College Name:"+collegeName)
console.log("Student Name:"+studentName)
console.log("Student Age:"+studentAge)



/*Task 2 - Mobile Price
Create a variable price = 25000. Change the price to 27000. Print the updated price.*/
console.log("Task-2")
var price= 25000
price= 27000
console.log("Updated price= "+price)
document.writeln("Updated price= "+price)



/*Task 3 - Company Name
Create a const variable called company. Try to change its value.Observe the error. */
console.log("Task-3")
const company= "Stackly"
// company= "St"            //gives error as TypeError: Assignment to constant variable
// const company= "Sta"     //gives error as already declared
console.log("Company Name: "+ company);



/*Task 4 - Console Practice
Print the following using different console methods.
"Login Successful" using log, "Password is Weak" using warn, "Network Error" using error */
console.log("Task-4")
console.log("Login Successful")
console.warn("Password is weak");
console.error("Network Error");



/*Task 5 - Data Types
Create variables for:
Your Name, Your Age, Are you a developer? (true/false), An uninitialized variable*/
console.log("Task-5")
var name= "Varshini"
var age= 24
var isDeveloper= true
var value
console.log("Name: "+name)
console.log("Age: " +age)
console.log("Developer?: "+isDeveloper)
console.log("Value: "+ value);



/*Task 6 - Shopping Cart Array
Create an array named cart.Store:Laptop,Mouse, Keyboard, Headset, Monitor Print 1st,3rd and last*/
console.log("Task-6")
let Cart= ["Laptop","Mouse","Keyboard","Headset","Monitor"]
console.log("1st item in cart: "+Cart[0])
console.log("3rd item in cart: "+Cart[2])
console.log("last item in cart: "+Cart[Cart.length-1]);



/*Task 7 - Favorite Movies
Create an array with 6 movie names. print 2nd,5th and last*/
console.log("Task-7")
var movies=["RRR","Soorarai_Pottru","Ayan","Ayalaan","Jailer","Amaran"]
console.log("Second movie: "+movies[1])
console.log("Fifth movie: "+movies[4])
console.log("Last movie: "+movies[movies.length-1]);



/*Task 8 - Employee Object
Create an object.Properties:name,age,department,skills (array),salary
print: Employee name,Department,First skill,Salary*/
console.log("Task-8")
var employeeName= "Varshini"
var employeeAge= 24
var employeeDept= "Developer"
var skills= ["SQL","Automation","cloud computing"]
var salary= 10000
console.log ("Employee Name: "+employeeName) 
console.log ("Employee Age: "+employeeAge)
console.log ("Employee Department: "+employeeDept)
console.log ("First skill: "+ skills[0])
console.log ("Employee Salary: "+salary)



/*Task 9 - Product Details
Create an object.Properties:productName,brand,price,colors (array)
Print:Brand,Price,Second color*/
console.log("Task-9")
let product={
    productName: "iphone",
    productBrand: "Apple",
    productPrice: 90000,
    productColours: ["white","lightgreen","black"]
};
console.log ("Product Name: "+product.productName) 
console.log ("Product Price: "+product.productPrice)
console.log ("Second colour: "+ product.productColours[1])



/*Task 10 - Arithmetic Calculator
Take two numbers.Perform:Addition,Subtraction,Multiplication,Division,Modulus,Exponent*/
console.log("Task-10")
var num1=10
var num2=50
console.log("Addition of 10 and 50: "+ (num1+num2)) 
console.log("Subtraction of 10 and 50: "+ (num1-num2))
console.log("Multiplication of 10 and 50: "+ (num1*num2))
console.log("Division of 10 and 50: "+ (num1/num2))
console.log("Modulus of 10 and 50: "+ (num1%num2))
console.log("Exponent of 10 and 50: "+ (num1^2))



/*Task 11 - Increment Practice
let a = 5;Perform:a++  ++a   a--  --a */
console.log("Task-11")
let a=5
console.log("a++: "+(a++))    //before a=5  print 5  a+1=6
console.log("++a: "+(++a))   //before a=6  a+1=7    print 7
console.log("a--: "+(a--))    //before a=7  print 7  a-1=6
console.log("--a: "+(--a))   //before a=6  a-1=5    print 5



/*Task 12 - Predict the Output */
console.log("Task-12")
let aa = 10;        // value of aa=null
let b = aa++;       // value of b=10  , aa=10+1
let c = ++b;       // value of a=11   , b=10+1,  c=11
console.log("a: "+aa,", b: "+ b,", c: "+ c)



/*Task 13 - Predict the Output */
console.log("Task-13")
let x = 7;          // value of x=null
let y = --x;        // value of x=7-1 , y=6
let z = y++;        // value of x=6   , y=6+1 , z=6
console.log("x: "+x,", y: "+ y,", z: "+ z);



/*Task 14 - School Object
Create an object.Properties:schoolName,principal,totalStudents,classes (array)
Print:School name,Principal,Last class */
console.log("Task-14")
let school={
    schoolName: "Oxford",
    principal: "Ramya",
    totalStudents: 60,
    classes: ["tamil","english","maths","chemistry","physics","computer science"]
};
console.log("School Name: "+school.schoolName)
console.log("School Principal: "+school.principal)
console.log("Last class: "+school.classes[school.classes.length-1])



/*Task 15 - Grocery List
Create an array with 8 grocery items.Print:First item,Fourth item,Last item */
console.log("Task-15")
const groceryItems=['sugar','tea_powder','milk','curd','rice','biscuit','rusk','tomato']
console.log("1st item : "+groceryItems[0])
console.log("4th item : "+groceryItems[3])
console.log("last item : "+groceryItems[groceryItems.length-1]);


/*Task 16 - User Profile
Create variables:Username,Email,Age,IsPremium. Print each value and datatype.*/
console.log("Task-16")
var userName= "Varshini"
var email= "varshini@123.com"
var profileAge= 24
var IsPremium= true
console.log("Type of the name: "+typeof(userName))
console.log("Type of the email: "+typeof(email))
console.log("Type of the age: "+typeof(profileAge))
console.log("Type of the Premium(Having/not): "+IsPremium,typeof(IsPremium));



/*Task 17 - Variable Rules
Create:one var,one let,one const    Try:Reassign all,Redeclare all */
console.log("Task-17")
var value1       //declaration (allowed)
value1=10        //intialization (allowed)
value1=20        //reuse(i.e using the using the same sapace as var),reinitialization (allowed)
var value1=30    //reDeclaration (here new var space is created) (allowed)

let value2        //(allowed)
value2=10         //(allowed)
value2=20         //(allowed)
//let value2=30   //gives error as already declared

//const value3     //gives error as missing initialization
const value3=10    //(allowed)
//value3=20        //gives error as TypeError: Assignment to constant variable
//const value3=30  //gives error as already declared

console.log("Value of var:"+value1)
console.log("Value of let:"+value2)
console.log("Value of const:"+value3)



/*Task 18 - Marks Calculation
Calculate and print both total and average*/
console.log("Task-18")
let tamil = 85;
let english = 90;
let maths = 95;
let total= tamil+english+maths
let average= total/3
console.log("Total: "+total, "Average: "+average);



/*Task 19 - Company Database
Create an object:Company,Employees (Array),Location,Founded Year,CEO
Print:CEO,Location,First employee*/
console.log("Task-19")
var companyData={
    comapanyName: "Stackly",
    companyEmployees: ["Diya","Raja","Venkat"],
    companyLocation: "Salem",
    companyFoundedYear: 2016,
    companyCEO: "Nishanth"
};
console.log("Company CEO: "+companyData.companyCEO)
console.log("Company Location: "+companyData.companyLocation)
console.log("Company's First Employee: "+companyData.companyEmployees[0])

/*Task 20 - Mini Profile
Create an object where one property is an array.
Example:Name,City,Hobbies (Array),Age. Print:Name,Second hobby,Age*/
console.log("Task-20")
let profile={
    myName: "Varshini",
    myAge: 24,
    myCity: "Coimbatore",
    myHobbies: ["Playing with my pets","Watching TV & web series","Listening songs"],
    myFamilyCount: 5,
    myNumber: 123456789
};
console.log("Name: "+profile.myName)
console.log("My second Hobby: "+profile.myHobbies[1])
console.log("Age: "+profile.myAge)