var newItemCounter = 1;
//var ourlist = document.getElementById("our-list");
var ourlist = document.querySelector("#our-list")
var ourButton = document.getElementById("our-button");
var ourHeadline=document.getElementById("our-headline");
var listItems = document.querySelectorAll("#our-list li");

ourlist.addEventListener("click", activateItem);

for (i= 0; i < listItems.length; i++){
    listItems[i].innerHTML="hello world." + i;
    listItems[i].addEventListener("click", activateItem);
}

function activateItem(e){
    console.log("listItems.length = " + listItems.length + ", e.target.parentNode.children.length = " + e.target.parentNode.children.length);
    console.log("e.target.nodeName = " + e.target.nodeName + " node nodeType: "+ e.target.nodeType + " node value: " + e.target.nodeValue + " element.tagName: " + e.target.tagName + " element.innerHTML: " + e.target.innerHTML)
    if (e.target.nodeName == "LI")
    ourHeadline.innerHTML=e.target.innerHTML;
    for (i= 0; i < e.target.parentNode.children.length; i++){
        e.target.parentNode.children[i].classList.remove("active");
    }
    e.target.classList.add("active");
}

function createNewItem(){
    ourlist.innerHTML += "<li>something new " + newItemCounter + "</li>";
    newItemCounter++;
    //console.log(ourlist.innerHTML);
}

ourButton.addEventListener("click", createNewItem);