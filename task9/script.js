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
let apiLink = "https://fakestoreapi.com/products"
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
   
