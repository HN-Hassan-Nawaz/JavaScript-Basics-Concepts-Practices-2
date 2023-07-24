var parentelement=document.getElementById("test");//target test id
var target=document.getElementById("abc");//check abc id is contain in test id
var find=parentelement.contains(target);//contains method to find out that id is present or not

console.log(find);
