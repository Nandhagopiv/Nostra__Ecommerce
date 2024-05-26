var search = document.getElementById("search")
var searchicon = document.getElementById("searchicon")
var allproducts = document.getElementById("allproducts")
var products = allproducts.querySelectorAll("h1")
var product__child = allproducts.querySelectorAll("h2")
var tickbox = document.getElementsByName("tickbox")
var off = document.getElementById("off--sec")
var sidenav__x = document.getElementById("sidenav__x")
var x = document.getElementById("x")
var sidenav = document.getElementById("sidenav")
var menubar = document.getElementById("menubar")
var checkboxarr = []


const checkandshow = () => {
    for (let i = 0; i < product__child.length; i++) {
        if (product__child[i].textContent.includes(checkboxarr[0]) || product__child[i].textContent.includes(checkboxarr[1]) || product__child[i].textContent.includes(checkboxarr[2])  || product__child[i].textContent.includes(checkboxarr[3]) || product__child[i].textContent.includes(checkboxarr[4]) || product__child[i].textContent.includes(checkboxarr[5]) || product__child[i].textContent.includes(checkboxarr[6]) || product__child[i].textContent.includes(checkboxarr[7]) || product__child[i].textContent.includes(checkboxarr[8]) || product__child[i].textContent.includes(checkboxarr[9]) || product__child[i].textContent.includes(checkboxarr[10])) {
            product__child[i].parentElement.style.display = "block"
        } else {
            product__child[i].parentElement.style.display = "none"
        }
        
        if (checkboxarr.length === 0) {
            product__child[i].parentElement.style.display = "block"
        }
    }
}

x.addEventListener("click", function () {
    off.style.display = "none"
})

sidenav__x.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})

menubar.addEventListener("click", function () {
    sidenav.style.right = 0
})

search.addEventListener("keyup", function () {
    for (let i = 0; i < products.length; i++) {
        if (products[i].textContent.toUpperCase().includes(search.value.toUpperCase()) == true) {
            products[i].parentElement.style.display = "block"
        } else {
            products[i].parentElement.style.display = "none"
        }
    }
})

for (let a = 0; a < tickbox.length; a++) {
    tickbox[a].addEventListener("click",function(event){
        
        if (tickbox[a].checked) {
            checkboxarr.push(event.target.value)
            checkandshow()
        } else {
            var index = checkboxarr.indexOf(event.target.value)
            checkboxarr.splice(index,1)
            checkandshow()
        }
        console.log(checkboxarr);
        console.log(product__child);
    })
}
