var newelement = document.createElement("h2"); //Tag created

var newtext = document.createTextNode("hello this is heading 2");//Text created

newelement.appendChild(newtext);//appendchild
document.getElementById("second").appendChild(newelement);//appendchild

document.write(newelement);
console.log(newelement);


var target = document.getElementById("second");//append method as insertBefore
target.insertBefore(newelement, target.childNodes[0]);//target the documents first childnode 