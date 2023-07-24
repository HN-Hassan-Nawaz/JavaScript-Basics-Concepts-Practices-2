
document.getElementById("first").addEventListener("click", abc);
function abc() {
    var a = document.getElementById("first").style.background = "green";
    console.log(a);
}

document.getElementsByClassName("second").className = "xyz"; //set class name
var b = document.getElementsByClassName("second").className; //get class name
console.log(b);

//add multiple classes using classList(class1,class2,-----)
document.getElementById("first").classList.add("sss", "eee");
var c = document.getElementById("first").classList;
console.log(c);

//remove 
document.getElementById("first").classList.remove("sss");
var d = document.getElementById("first").classList;
console.log(d);

//toggle 
var e = document.getElementById("first").classList.toggle("loop");
console.log(e);

//lenght() that tell about the total classes
var f = document.getElementById("first").classList.length;
console.log(f);

//item(index) return thw class according to index no
var g = document.getElementById("first").classList.item(1);
console.log(g);

//contains (if class exist then return TRUE & if class not exist the return FALSE)
var h = document.getElementById("first").classList.contains("loop");
console.log(h);