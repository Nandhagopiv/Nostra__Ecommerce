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