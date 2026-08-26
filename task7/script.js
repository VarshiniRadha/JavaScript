let btn = document.querySelector("#btn")
if (btn) {
    btn.addEventListener("click", () => {
        btn.style.backgroundColor = "white"
        btn.style.color = "rgb(0, 0, 112)"
    })
}

let h2 = document.querySelector("h2")
if (h2) {
   h2.style.fontSize = "30px"
}

let h3 = document.querySelector("h3")
if (h3) {
   h3.style.fontSize = "25px"
}

let input = document.querySelector("#todoInput")
let addBtn = document.querySelector("#btn1")
let todoList = document.querySelector("#todoList")
if (addBtn) {
   addBtn.addEventListener("click", () => {
      if (input.value == "") {
         alert("Enter a task")
      }
      else {
         let li = document.createElement("li")
         li.innerText = input.value
         li.setAttribute("id", "active")

         let completeBtn = document.createElement("button")
         completeBtn.innerText = "✓"
         completeBtn.setAttribute("id", "complete")

         let editBtn = document.createElement("button")
         editBtn.innerText = "Edit"
         editBtn.setAttribute("id", "edit")

         let deleteBtn = document.createElement("button")
         deleteBtn.innerText = "Delete"
         deleteBtn.setAttribute("id", "delete")

         li.append(completeBtn)
         li.append(editBtn)
         li.append(deleteBtn)
         todoList.append(li)

         completeBtn.addEventListener("click", () => {
            completeBtn.setAttribute("id", "completed")
         })


         editBtn.addEventListener("click", () => {
            editTodo(li,completeBtn, editBtn, deleteBtn)
         })

         deleteBtn.addEventListener("click", () => {
            deleteTodo(li)
         })
         input.value = ""
        }
      })
}

function editTodo(li,completeBtn, editBtn, deleteBtn)
{
   let newTodo = prompt("Enter your edited text")
   if(newTodo != "")
   {
      li.innerText = newTodo
      li.append(completeBtn)
      li.append(editBtn)
      li.append(deleteBtn)
   }
}

function deleteTodo(li)
{
   li.remove()
}


/*
let todos =[]
function addList()
{
   let input = document.querySelector("#todoInput")
   let todo=input.value
   todos.push(todo)
   input.value=""
   displaytodo()
}

function displaytodo()
{
   let list = document.querySelector("#todoList")
   list.innerHTML="<ol></ol>"
   let ol = list.querySelector("ol")
   todos.forEach((c,i,t)=>{
      ol.innerHTML += 
      `<li>
      ${c}

      <button onclick="editTodo(${i})">Edit</button>
      <button onclick="deleteTodo(${i})">Delete</button>
      </li>`
   })
   
}

function editTodo(i)
{
   let newTodo = prompt("Enter your edited text",todos[i])
   todos[i] = newTodo
   displaytodo()
}

function deleteTodo(i)
{
   todos.splice(i,1)
   displaytodo()
}
*/