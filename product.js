var search = document.getElementById("search")
var searchicon = document.getElementById("searchicon")
var allproducts = document.getElementById("allproducts")
var products = allproducts.querySelectorAll("h1")
var off = document.getElementById("off--sec")

x.addEventListener("click", function(){
    off.style.display = "none" 
})

search.addEventListener("keyup",function(){
    for (let i = 0; i < products.length; i++) {
        if (products[i].textContent.toUpperCase().includes(search.value.toUpperCase()) == true) {
            products[i].parentElement.style.display = "block"
        } else{
            products[i].parentElement.style.display = "none"
        }
    }
})