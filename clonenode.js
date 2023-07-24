var target=document.getElementById("list1").children[0];//target the id that is list1 and also to their child that can be copy to other list2 using the cloneNode method

var copyelement=target.cloneNode(true);//cloneNode method that copy the element and then store to the variable copyelement
// console.log(copyelement);

var newelement=document.getElementById("list2").appendChild(copyelement);//appendchild the data of previous data of first index to the other list2 
