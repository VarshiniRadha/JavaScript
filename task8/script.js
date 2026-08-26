/*🟢 Task 1 — Product Card Design
Using the same API, display each product with:
Product image
Product title
Category
Price
Description
A View Product button
Condition: Don't use console.log() for the final output. Display everything inside .apicard.  */



var apiLink ="https://fakestoreapi.com/products/"

fetch(apiLink).then((data)=>{
    return data.json()
})

.then((jsData)=>{
    let apiCard = document.querySelector(".apiCard")
    let task = document.createElement("h2")
    task.innerText = `Task 1`
    task.style.cssText = "width:100%;"
    apiCard.append(task)

    jsData.forEach((c,i,t)=>{
        let Api = document.createElement("div")
        Api.innerHTML = `<img src="${c.image}" /><h2>${c.title}</h2>
        <h3>${c.category}</h3>
        <button>$ ${c.price}</button>
        <p>${c.description.slice(0,50)}...</p>
        <button>View Product</button>`

        //console.log(Api)
        apiCard.append(Api)
    })
})
.finally(() => {
    let line = document.createElement("hr")
    line.style.cssText = "width:100%; border:2px solid black;"
    document.querySelector(".apiCard").append(line)
})


/*🟢 Task 2 — Show Only 5 Products
Modify the code so that only the first 5 products are displayed.
Hint:
jsData.slice(0, 5)   */

fetch(apiLink).then((data)=>{
    return data.json()
})

.then((jsData)=>{
    let apiCard = document.querySelector(".apiCard")
    let task = document.createElement("h2")
    task.innerText = `Task 2`
    task.style.cssText = "width:100%;"
    apiCard.append(task)

    jsData.slice(0,5).forEach((c,i,t)=>{

        let Api = document.createElement("div")
        Api.innerHTML = `<img src="${c.image}" /><h2>${c.title}</h2>
        <h3>${c.category}</h3>
        <button>$ ${c.price}</button>
        <p>${c.description.slice(0,50)}...</p>
        <button>View Product</button>`

        //console.log(Api)
        apiCard.append(Api)
    })
})
.finally(() => {
    let line = document.createElement("hr")
    line.style.cssText = "width:100%; border:2px solid black;"
    document.querySelector(".apiCard").append(line)
})


/*🟢 Task 3 — Price Filter
Display only products whose price is greater than $50.
Hint:
jsData.filter(...)
Example condition:
c.price > 50   */

fetch(apiLink).then((data)=>{
    return data.json()
})

.then((jsData)=>{
    let apiCard = document.querySelector(".apiCard")
    let task = document.createElement("h2")
    task.innerText = `Task 3`
    task.style.cssText = "width:100%;"
    apiCard.append(task)

    jsData.filter((c,i,t)=> c.price >50 ).forEach((c,i,t)=>{
        let Api = document.createElement("div")
        Api.innerHTML = `<img src="${c.image}" /><h2>${c.title}</h2>
        <h3>${c.category}</h3>
        <button>$ ${c.price}</button>
        <p>${c.description.slice(0,50)}...</p>
        <button>View Product</button>`

        apiCard.append(Api)
    })
})
.finally(() => {
    let line = document.createElement("hr")
    line.style.cssText = "width:100%; border:2px solid black;"
    document.querySelector(".apiCard").append(line)
})


/*🟡 Task 4 — Category Filter
Display only products from the category:
men's clothing
Use:
filter()  */


fetch(apiLink).then((data)=>{
    return data.json()
})

.then((jsData)=>{
    let apiCard = document.querySelector(".apiCard")
    let task = document.createElement("h2")
    task.innerText = `Task 4`
    task.style.cssText = "width:100%;"
    apiCard.append(task)

        jsData.filter((c,i,t) => c.category == "men's clothing").forEach((c,i,t) => {
        let Api = document.createElement("div")
        Api.innerHTML = `<img src="${c.image}" /><h2>${c.title}</h2>
        <h3>${c.category}</h3>
        <button>$ ${c.price}</button>
        <p>${c.description.slice(0,50)}...</p>
        <button>View Product</button>`

        apiCard.append(Api)
    })
})
.finally(() => {
    let line = document.createElement("hr")
    line.style.cssText = "width:100%; border:2px solid black;"
    document.querySelector(".apiCard").append(line)
})


/*🟡 Task 5 — Product Count
Above the cards, display:
Total Products: 20
The number should come from the API dynamically.
Hint:
jsData.length   */


fetch(apiLink).then((data)=>{
    return data.json()
})

.then((jsData)=>{
    let apiCard = document.querySelector(".apiCard")
    let task = document.createElement("h2")
    task.innerText = `Task 5`
    task.style.cssText = "width:100%;"
    apiCard.append(task)

    let count = document.createElement("h2")
    count.innerText = `Total Products: ${jsData.length}`
    count.style.cssText = "width:100%;"
    apiCard.append(count)

    jsData.forEach((c,i,t)=>{
        let Api = document.createElement("div")
        Api.innerHTML = `<img src="${c.image}" /><h2>${c.title}</h2>
        <h3>${c.category}</h3>
        <button>$ ${c.price}</button>
        <p>${c.description.slice(0,50)}...</p>
        <button>View Product</button>`
        apiCard.append(Api)
    })
})
.finally(() => {
    let line = document.createElement("hr")
    line.style.cssText = "width:100%; border:2px solid black;"
    document.querySelector(".apiCard").append(line)
})


/*🟡 Task 6 — Search Product
Create:
<input type="text" placeholder="Search product">
<button>Search</button>
When the user searches for a product name, display matching products.
Example:
Search: shirt
Display products whose title contains "shirt".
Concepts:
•	input.value
•	includes()
•	filter()
•	DOM
*/

fetch(apiLink).then((data)=>{
    return data.json()
})

.then((jsData)=>{
    let task = document.createElement("h2")
    task.innerText = `Task 6`
    task.style.cssText = "width:100%;"

    let apiCard = document.querySelector(".apiCard")

    let search = document.querySelector("#search")
    let searchBtn = document.querySelector("#searchBtn")

    apiCard.append(task)
    apiCard.append(search)
    apiCard.append(searchBtn)
    

    let resultCard = document.createElement("div")
    resultCard.className = "resultCard"
    resultCard.style.cssText = `
        width:100%;
        display:flex;
        justify-content:center;
        flex-wrap:wrap;
        gap:30px;`
    apiCard.append(resultCard)
    searchBtn.addEventListener("click", () => {
        let value = search.value.toLowerCase()
        let result = jsData.filter((c,i,t) =>
            c.title.toLowerCase().includes(value)
        )
        resultCard.innerHTML = ""
        displayProducts(result)

        result.forEach((c,i,t) => {
            let Api = document.createElement("div")
            Api.innerHTML = `<img src="${c.image}" /><h2>${c.title.slice(0,20)}..</h2>
            <h3>${c.category}</h3>
            <button>$ ${c.price}</button>
            <p>${c.description.slice(0,50)}...</p>
            <button>View Product</button>`
            resultCard.append(Api)
        })
    })
})

.finally(() => {
    let line = document.createElement("hr")
    line.style.cssText ="width:100%; border:2px solid black;"
    document.querySelector(".apiCard").append(line)
})


/*🟠 Task 7 — Sort Products by Price
Create two buttons:
Low → High
High → Low
When clicked, arrange products based on price.
Hint:
sort()
Example:
a.price - b.price
*/

fetch(apiLink).then((data)=>{ 
    return data.json() 
}) 
 
.then((jsData)=>{ 
    let apiCard = document.querySelector(".apiCard") 
    let task = document.createElement("h2") 
    task.innerText = `Task 7` 
    task.style.cssText = "width:100%;" 
    apiCard.append(task) 
 
    let low = document.createElement("button") 
    low.innerText = "Low → High" 
 
    let high = document.createElement("button") 
    high.innerText = "High → Low" 
 
    apiCard.append(low) 
    apiCard.append(high) 
 
    let resultCard = document.createElement("div")
    resultCard.className = "resultCard"
    resultCard.style.cssText = ` 
        width:100%; 
        display:flex; 
        justify-content:center; 
        flex-wrap:wrap; 
        gap:30px; ` 
 
    apiCard.append(resultCard) 
    function displayProducts(data){ 
        resultCard.innerHTML = "" 

        data.forEach((c,i,t)=>{ 
            let Api = document.createElement("div") 
            Api.innerHTML = `<img src="${c.image}" /><h2>${c.title.slice(0,25)}..</h2>
            <h3>${c.category}</h3>
            <button>$ ${c.price}</button>
            <p>${c.description.slice(0,50)}...</p>
            <button>View Product</button>`
            resultCard.append(Api) 
        }) 
    } 
    displayProducts(jsData)
    low.addEventListener("click", ()=>{ 
        let result = [...jsData].sort((a,b)=>a.price - b.price) 
        displayProducts(result) 
    }) 
 
    high.addEventListener("click", ()=>{ 
        let result = [...jsData].sort((a,b)=>b.price - a.price) 
        displayProducts(result) 
    }) 
})

.finally(() => {
    let line = document.createElement("hr")
    line.style.cssText ="width:100%; border:2px solid black;"
    document.querySelector(".apiCard").append(line)
})

/*🟠 Task 8 — Dynamic Category Buttons
From the API data, create category buttons dynamically:
All
Men's Clothing
Women's Clothing
Jewelery
Electronics
When the user clicks a category, show only those products.
Concepts:
•	forEach()
•	filter()
•	DOM
•	addEventListener()
*/

fetch(apiLink).then((data)=>{
    return data.json()
})

.then((jsData)=>{

    let apiCard = document.querySelector(".apiCard")

    let task = document.createElement("h2")
    task.innerText = `Task 8`
    task.style.cssText = "width:100%;"
    apiCard.append(task)

    let categories = ["All", "men's clothing", "women's clothing", "jewelery", "electronics"]
    categories.forEach((category)=>{
        let button = document.createElement("button")
        button.innerText = category
        apiCard.append(button)

        button.addEventListener("click", ()=>{
            if(category == "All"){
                displayProducts(jsData)
            }
            else{
                let result = jsData.filter((c,i,t)=>{
                    return c.category == category
                })
                displayProducts(result)
            }
        })
    })

    let resultCard = document.createElement("div")
    resultCard.className = "resultCard"
    resultCard.style.cssText = `
        width:100%;
        display:flex;
        justify-content:center;
        flex-wrap:wrap;
        gap:30px;`
    apiCard.append(resultCard)

    function displayProducts(data){
        resultCard.innerHTML = ""
        data.forEach((c,i,t)=>{
            let Api = document.createElement("div")
             Api.innerHTML = `<img src="${c.image}" /><h2>${c.title.slice(0,25)}..</h2>
            <h3>${c.category}</h3>
            <button>$ ${c.price}</button>
            <p>${c.description.slice(0,50)}...</p>
            <button>View Product</button>`
            resultCard.append(Api)
        })
    }
    displayProducts(jsData)
})

.finally(() => {
    let line = document.createElement("hr")
    line.style.cssText ="width:100%; border:2px solid black;"
    document.querySelector(".apiCard").append(line)
})

/*🔴 Final Task — Mini Fake Store Website
Ask students to build a complete Fake Store Product Page using the same API.
Concepts they must use
1.	fetch()
2.	Promise .then()
3.	response.json()
4.	forEach()
5.	filter()
6.	slice()
7.	sort()
8.	includes()
9.	DOM creation
10.	addEventListener()
*/
/* 🔴 Final Task — Mini Fake Store Website */

fetch(apiLink).then((data)=>{
    return data.json()
})

.then((jsData)=>{

    let apiCard = document.querySelector(".apiCard")

    let store = document.createElement("h1")
    store.innerText = `🛒 FAKE STORE`
    store.style.cssText = "width:100%; text-align:center;"
    apiCard.append(store)

    let search = document.createElement("input")
    search.id = "search"
    search.placeholder = "Search Product"

    let searchBtn = document.createElement("button")
    searchBtn.innerText = "Search"

    apiCard.append(search)
    apiCard.append(searchBtn)
    
    let categories = ["All", "men's clothing", "women's clothing", "jewelery", "electronics"]
    categories.forEach((category)=>{
        let button = document.createElement("button")
        button.innerText = category
        apiCard.append(button)

        button.addEventListener("click", ()=>{
            if(category == "All"){
                displayProducts(jsData)
            }
            else{
                let result = jsData.filter((c,i,t)=>{
                    return c.category == category
                })
                displayProducts(result)
            }
        })
    })

    let low = document.createElement("button") 
    low.innerText = "Low → High" 
 
    let high = document.createElement("button") 
    high.innerText = "High → Low" 
 
    apiCard.append(low) 
    apiCard.append(high) 

    let count = document.createElement("h2")
    count.innerText = `Total Products: ${jsData.length}`
    count.style.cssText = "width:100%;"
    apiCard.append(count)
 
    let resultCard = document.createElement("div")
    resultCard.className = "resultCard"
    resultCard.style.cssText = ` 
        width:100%; 
        display:flex; 
        justify-content:center; 
        flex-wrap:wrap; 
        gap:30px; ` 
 
    apiCard.append(resultCard) 
    function displayProducts(data){ 
        resultCard.innerHTML = "" 

        data.forEach((c,i,t)=>{ 
            let Api = document.createElement("div") 
            Api.innerHTML = `<img src="${c.image}" /><h2>${c.title.slice(0,25)}..</h2>
            <h3>${c.category}</h3>
            <button>$ ${c.price}</button>
            <p>${c.description.slice(0,50)}...</p>
            <button>View Product</button>`
            resultCard.append(Api) 
        }) 
    } 

    
    searchBtn.addEventListener("click", () => {
        let value = search.value.toLowerCase()
        let result = jsData.filter((c) =>
            c.title.toLowerCase().includes(value)
        )
        displayProducts(result)
    })

    low.addEventListener("click", ()=>{ 
        let result = [...jsData].sort((a,b)=>a.price - b.price) 
        displayProducts(result) 
    }) 
 
    high.addEventListener("click", ()=>{ 
        let result = [...jsData].sort((a,b)=>b.price - a.price) 
        displayProducts(result) 
    }) 
})
   

