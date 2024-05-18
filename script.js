var off = document.getElementById("off--sec")
var x = document.getElementById("x")
var nextb = document.getElementById("nextbtn")
var backb = document.getElementById("backbtn")
var poster1 = document.getElementById("poster1")
var poster2 = document.getElementById("poster2")
var poster3 = document.getElementById("poster3")
var poster4 = document.getElementById("poster4")
var poster5 = document.getElementById("poster5")
var clickcount = 0

x.addEventListener("click", function(){
    off.style.display = "none" 
})

nextb.addEventListener("click",function(){
    if (clickcount == 0) {
        poster1.style.display = "none"
    } else if(clickcount == 1) {
        poster2.style.display = "none"
    } else if(clickcount == 2) {
        poster3.style.display = "none"
    } else if (clickcount == 3) {
        poster1.style.display = "block"
        poster2.style.display = "block"
        poster3.style.display = "block"
        clickcount = -1
    }
    clickcount = clickcount+1
    console.log(clickcount);
})

backb.addEventListener("click",function(){
if (clickcount ==1) {
    poster1.style.display = "block"
} else if (clickcount == 2) {
    poster2.style.display = "block"
} else if (clickcount == 3) {
    poster3.style.display = "block"
} else if (clickcount == 0) {
    rightclickcount = 1
}
clickcount = clickcount-1
console.log(clickcount);
})





