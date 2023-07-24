/* for replcechild uncomment the code from line 2 to 5  and line no 11 also but if only remove the previous any value from the unordered list then cannot do any change*/

// var newelement=document.createElement("li");//create Tag
// var newtext=document.createTextNode("WOW Heading");//create Text

// newelement.appendChild(newtext);//append Tag & Text

var target=document.getElementById("fruits");
var oldelement=target.children[1];//target the first index of the document

// target.replaceChild(newelement,oldelement);//replacechild with new element

//for remove the element from the list
target.removeChild(oldelement);//removechild method



