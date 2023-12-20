let productName = document.querySelector("#product")
let productAmount = document.querySelector("#product-amount")
let alertSpan = document.querySelector("span")
let alertPara = document.querySelector("p")
let btn=document.querySelector("button")
let store=document.querySelector(".storeValue")
let count=document.querySelector(".para h4")
// console.log(count)
// console.log(store);

function collect() {
    event.preventDefault()
    let ProductNameValue = productName.value;
    // console.log(ProductNameValue)
    let ProductAmountValue = productAmount.value;
    // console.log(ProductAmountValue)

          if (ProductNameValue == "") {

             alertPara.classList.add("dummy")

        }
        else {

            alertPara.classList.remove("dummy")
           
        }
        if (ProductAmountValue == "") {


            alertSpan.classList.add("dummy")
        }
        else {

            alertSpan.classList.remove("dummy")
        
        }
        
 
          
        productName.value = ""
        productAmount.value = "" 

}
btn.addEventListener("click",()=>{


    let productValue=productName.value
    let productValue1=parseFloat(productAmount.value)
    console.log(productValue);
    console.log(productValue1);
  
    
    let div=document.createElement("div")
    div.setAttribute("class","list-div")

    let ulList=document.createElement("ul")
    ulList.setAttribute("class","ul")

    let list=document.createElement("li")
    list.setAttribute("class","list1")
    list.innerText=productValue

    let list1=document.createElement("li")
    list1.setAttribute("class","list2")
    list1.innerText=productValue1
    let trashDiv=document.createElement("div")
    trashDiv.setAttribute("class","trashDiv")
    
     let trash=document.createElement("li")
     trash.setAttribute("class","trash")
     trash.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path fill="#ff2600" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>';
    ulList.append(list,list1)
    trashDiv.append(trash)
    div.append(ulList,trashDiv)
    store.append(div)
    // let li=document.querySelector(".list-div")
    // console.log(li)
    // if()

    let sum=parseFloat(count.textContent)+productValue1
    // count.textContent=sum
    let trashbox=document.querySelector(".list-div")
    // console.log(trashbox)
    let bin =document.querySelector(" .list-div .trashDiv .trash svg")
    console.log(bin)
    store.addEventListener("click",()=>{
        store.remove(ulList)
    })

 })



// trashbox.addEventListener("mouseover",()=>{

// })