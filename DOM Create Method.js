//DOM Create Method of Tags/Text/Comments etc.

//Tag Create Method
var newelement = document.createElement("h2");
console.log(newelement);

//Text Create Method
var newtext = document.createTextNode("This is just a Text");
console.log(newtext);

//Comment Create Method
var newcomment = document.createComment("This is just for comment");
console.log(newcomment);

//appendchild 
newelement.appendChild(newtext);
document.getElementById("first").appendChild(newelement);
document.write(newelement);