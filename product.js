var search = document.getElementById("search")
var searchicon = document.getElementById("searchicon")
var allproducts = document.getElementById("allproducts")
var products = allproducts.querySelectorAll("h1")
var product__theme = allproducts.querySelectorAll("h2")
var product__color = allproducts.querySelectorAll("h3")
var occasions = document.getElementById("occasions")
var colors = document.getElementById("colors")
var arrivals = document.getElementById("arrivals")
var off = document.getElementById("off--sec")
var sidenav__x = document.getElementById("sidenav__x")
var x = document.getElementById("x")
var sidenav = document.getElementById("sidenav")
var menubar = document.getElementById("menubar")

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

var checked;

for (let i = 0; i < colors.querySelectorAll("input").length; i++) {
    colors.querySelectorAll("input")[i].addEventListener("focus", function (event) {
        console.log(event.target.value);
        console.log(colors.querySelectorAll("input")[0]);
        checked = event.target.value
        for (let i = 0; i < product__color.length; i++) {
            if (product__color[i].textContent.includes(checked) == false) {
                product__color[i].parentElement.style.display = "none"
            } else {
                product__color[i].parentElement.style.display = "block"
            }

        }
    })
}
