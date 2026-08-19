let employees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2,
        skills: ["HTML", "CSS", "JavaScript"]
    },
    {
        id: 102,
        name: "Kamal",
        department: "CSE",
        salary: 42000,
        experience: 2.5,
        skills: ["HTML", "CSS", "JavaScript", "SQL"]
    },
    {
        id: 103,
        name: "Arjun",
        department: "IT",
        salary: 70000,
        experience: 3,
        skills: ["HTML", "CSS", "JavaScript","SQL", "ReactJS" ]
    },
    {
        id: 104,
        name: "Varun",
        department: "CST",
        salary: 38000,
        experience: 1.5,
        skills: ["HTML", "CSS"]
    },
    {
        id: 105,
        name: "Vijay",
        department: "CST",
        salary: 40000,
        experience: 2,
        skills: ["HTML", "CSS", "JavaScript"]
    },
    {
        id: 106,
        name: "Vishal",
        department: "IT",
        salary: 120000,
        experience: 3,
        skills: ["HTML", "CSS", "JavaScript", "SQL", "ReactJS", "Anngular"]
    },
    {
        id: 107,
        name: "Raghu",
        department: "CSE",
        salary: 35000,
        experience: 0.5,
        skills: ["HTML", "CSS"]
    },
    {
        id: 108,
        name: "Akash",
        department: "AI&DS",
        salary: 45000,
        experience: 2,
        skills: ["HTML", "CSS", "JavaScript", "SQL"]
    }
];
//1. 
// Display all employees.Use forEach().  
console.log("Names of all the employees are ",);
let displayAll = employees.forEach((c,i,t)=>{
    console.log(c.name)
})


// Find employees whose salary is greater than ₹40,000. Use filter().   
console.log("Employees whose salary greater than ₹40,000");
let salaryAbove = employees.filter((c,i,t)=>{
    return c.salary > 40000;
})
console.log(salaryAbove);


// Find a particular employee. Search employee using id. Use find(). 
console.log("Employee with the id 106 is");
let searchByID = employees.find((c,i,t)=>{
    return c.id === 106 ;
})
console.log(searchByID);


// Calculate the total salary of all employees.Use reduce().  
console.log("Total salary of all employees is");
let salaryOfAll = employees.reduce((acc,c,i,t)=>{
    return acc + c.salary
},0)
console.log(salaryOfAll);


// Check whether at least one employee has salary above ₹1,00,000. Use some(). 
console.log("Employees who are getting sallary above 1,00,000 are");
let salaryAbove1L = employees.some((c,i,t)=>{
    return c.salary > 100000;
})
console.log(salaryAbove1L);


// Check whether every employee has at least 1 year of experience. Use every(). 
console.log("Whether every employee has at least 1 year of experience ");
let aboveExperience = employees.every((c,i,t)=>{
    return c.experience > 1
})
console.log(aboveExperience)


// Sort employees by salary from highest to lowest.
console.log("Sort employees by salary");
let employeesat = [...employees]
let sortBySalary = employeesat.sort((a,b)=>{
    return b.salary - a.salary
})
console.log(sortBySalary)
sortBySalary.forEach((c,i,t)=>{
    console.log(c.name,c.salary)
})



//2. Array manipulation

console.log("Array manipulation");

// Add a new employee using push().
employees.push(
    {
        id: 109,
        name: "Vasuki",
        department: "AI&DS",
        salary: 40000,
        experience: 1,
        skills: ["HTML", "CSS", "JavaScript", "SQL"]
    }
)
console.log(employees);

// Remove the last employee using pop().
employees.pop()
console.log(employees);

// Add an employee at the beginning using unshift().
employees.unshift(
    {
        id: 100,
        name: "Vaishali",
        department: "IT",
        salary: 40000,
        experience: 1,
        skills: ["HTML", "CSS", "JavaScript", "SQL"]
    }
)
console.log(employees);

//Remove the first employee using shift(). 
employees.shift()
console.log(employees);



//3. Use object destructuring to extract:name, department, salary. Use array destructuring for the employee's skills.
console.log("Destructuring");

console.log(`Name Dept Salary`);
for(let i=0;i<=employees.length-1;i++)
{
    let {id, name, department, salary, experience, skills} = employees[i]
    console.log(name,department,salary)
}

console.log("Skill set");
for(let i=0;i<=employees.length-1;i++)
{
    let {skills}= employees[0]
    console.log(skills);
}



//4.Create a new employee array using the spread operator without directly modifying the original array.
console.log("Using spread operator");
let itEmployees = [...employees]
console.log(itEmployees)



//5.Create a function that accepts an employee name and multiple skill values using the rest operator. */
console.log("Using rest operator");
function employeeset(name,...skills){
    return{
        name:name,
        skills:skills
    };
}
console.log(employeeset("Ajay","HTML","CSS"))



//6.Create separate functions for:
console.log("Functions")
let employeesfun = [
  {id: 101, name: "Arun", salary: 30000},
  {id: 102, name: "Bala", salary: 50000},
  {id: 103, name: "Kumar", salary: 25000},
  {id: 104, name: "Ravi", salary: 70000}
];

// Add employee
function addEmployees(id,name,salary)
{
    return{
        id:id,
        name:name,
        salary:salary
    }
}
console.log(addEmployees(105,"Livin",35000))

// Delete employee
function deleteEmployees(id)
{
    let deleted = employeesfun.filter((c,i,t)=>{
       return c.id !== id
})
return deleted
}
console.log(deleteEmployees(105))

// Search employee
function searchEmployees(id)
{
    let search = employeesfun.find((c,i,t)=>{
        return c.id === id
})
return search
}
console.log(searchEmployees(101))

// Calculate total salary
function totalSalary() {
    let total = employeesfun.reduce((acc,c,i,t)=>{
        return acc+c.salary
},0)
return total
}
console.log("Total salary : ",totalSalary())

// Display employees
console.log("Every Employees")
for(let i=0;i<=employeesfun.length-1;i++){
    console.log(employeesfun[i]);
}



//7.Conditional statements

console.log("Salary category");
for (let i=0;i<=employees.length-1;i++)
{
    if(employees[i].salary > 60000)
    {
        console.log(`${employees[i].name}  (${employees[i].salary}) -> Senior`)
    }
    else if(employees[i].salary >= 30001 && employees[i].salary <= 60000)
    {
        console.log(`${employees[i].name}  (${employees[i].salary}) -> Mid Level`)
    }
    else{
         console.log(`${employees[i].name}  (${employees[i].salary}) -> Junior`)
    }
}


//8.Date

console.log("Date category");
let date1 = new Date();
console.log(date1);

//Add a joiningDate to every employee.
for (let i=0;i<=employees.length-1;i++)
{
    employees[i].joining_date = new Date("2026-7-13")
}
console.log(employees)

//Display the employee's joining year using getFullYear().
for (let i=0;i<=employees.length-1;i++)
{
    console.log(employees[i].joining_date.getFullYear())
}

//Display the joining month using getMonth(). 
for (let i=0;i<=employees.length-1;i++)
{
    console.log(employees[i].joining_date.getMonth()+1)
}



//9.User Input
// Use prompt() to ask the user for an employee ID.
console.log("User Input category");
let empID = Number(prompt("Enter the Employee ID to search"))

// Search and display that employee's details.
let ID = employees.find((c,i,t)=>{
    return c.id === empID
})
console.log(ID)





/* 10. Bonus Task ⭐
Create a menu-driven Employee Management System:

1. Display All Employees
2. Add Employee
3. Search Employee
4. Filter High Salary Employees
5. Calculate Total Salary
6. Sort By Salary
7. Delete Employee
8. Exit

Use switch, functions, arrays, objects, loops and higher-order array methods.
*/
console.log("Bonus Task ⭐");
let employeeList = [
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

// 1. Display All Employees
function displayEmployees() {
    console.log("Display All Employees");
    for (let i = 0; i<=employeeList.length-1; i++) {
        console.log(employeeList[i].id, employeeList[i].name, employeeList[i].department, employeeList[i].salary)
    }
}

// 2. Add Employee
function addEmployee() {
    let id = Number(prompt("Enter Employee ID to add"));
    let name = prompt("Enter Employee Name");
    let department = prompt("Enter Department");
    let salary = Number(prompt("Enter Salary"));
    employeeList.push({
        id:id,
        name:name,
        department:department,
        salary:salary
    });
    console.log(employeeList)
}

// 3. Search Employee
function searchEmployee() {
    let empID = Number(prompt("Enter Employee ID to search"));
    let ID = employeeList.find((c,i,t) => {
        return c.id === empID;
    });
    if (ID) {
        console.log(ID);
    } else {
        console.log("Employee Not Found");
    }
}

// 4. Filter High Salary Employees
function highSalaryEmployees() {
    console.log("Filter High Salary Employees");
    let sal = [...employeeList]
    let sortedSalary = sal.sort((a,b)=>{
        return b.salary-a.salary
    })
    console.log(sortedSalary);
    console.log(sal[0])
}


// 5. Calculate Total Salary
function totalSalaryOf() {
    console.log("Calculate Total Salary");
    let totSalary = employeeList.reduce((acc,c,i,t)=>{
        return acc+c.salary
    },0)
    console.log(totSalary)
}


// 6. Sort By Salary
function sortBySalaryin() {
    console.log("Sort By Salary");
    let sal1 = [...employeeList]
    let sortedSalary1 = sal1.sort((a,b)=>{
        return b.salary-a.salary
    })
    console.log(sortedSalary1);
}


// 7. Delete Employee
function deleteEmployee() {
    let empID= Number(prompt("Enter Employee ID to delete"));
    let del = employeeList.filter((c,i,t) => {
        return c.id !== empID;
    });
    console.log(del);
}

let option =Number(prompt(`Menu-driven Employee Management System
    Enter your option:
    1. Display All Employees
    2. Add Employee
    3. Search Employee
    4. Filter High Salary Employees
    5. Calculate Total Salary
    6. Sort By Salary
    7. Delete Employee
    8. Exit
    `));

switch (option) {
    case 1:
        displayEmployees();
        break;
    case 2:
        addEmployee();
        break;
    case 3:
        searchEmployee();
        break;
    case 4:
        highSalaryEmployees();
        break;
    case 5:
        totalSalaryOf();
        break;
    case 6:
        sortBySalaryin();
        break;
    case 7:
        deleteEmployee();
        break;
    case 8:
        console.log("Exit");
        break;
    default:
        console.log("Invalid Choice");
    }

