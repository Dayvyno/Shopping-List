var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementsByTagName("ul")[0];
var clear = document.getElementById("clear");
var li = document.getElementsByTagName("li");
var delWrapper = document.getElementsByClassName("del-wrapper");
var delListWrapp = document.getElementsByClassName("li-del-wrapper")
var ulWrapper = document.getElementsByClassName("ul-wrapper")[0]

function addElementList(){
    // Create li Element and attach the input value
    var li = document.createElement("li");
    var inputValue = document.createTextNode(input.value)
    li.append(inputValue);
    // Creat Delete Wrapper and the del-wrapper class
    var delWrapper = document.createElement("div");
    delWrapper.classList.add("del-wrapper");
    // Create the Delete Button and With its Delete text
    var delButton = document.createElement("button");
    var delText = document.createTextNode("Delete");
    delButton.appendChild(delText);
    delWrapper.appendChild(delButton)
    // Create the DelWrapper and li  Wrapper
    var delListWrapper = document.createElement("dive");
    delListWrapper.classList.add("li-del-wrapper");
    delListWrapper.appendChild(li);
    delListWrapper.appendChild(delWrapper)
    ul.appendChild(delListWrapper)
    input.value = ""

}

function inputLength(){
    return input.value.length
}

function addElementAfterClick(){
    if (inputLength() > 0){
        addElementList()
    }
}

function addElementAfterKeypress(event){
    if (inputLength() > 0 && event.keyCode ===13){
        addElementList()
    }
}

function addDeleteButton(){
    for (var i=0; i<li.length; i++){
        var btn = document.createElement("button");
        var btnTxt = document.createTextNode("Delete");
        btn.appendChild(btnTxt)
        delWrapper[i].appendChild(btn)
    }
}

function strikeThrough(event){
    if (event.target.tagName === "LI"){
        event.target.classList.toggle("done")
    }
}
 function deleteList(event){
     var del = event.target.parentNode.parentNode
     if (event.target.tagName === "BUTTON"){
         del.remove()
     }
 }

 function clearList(){
    ul.innerHTML = ""
 }

function focusing(){
    input.style.backgroundColor = "#f5f5ef"
}

addDeleteButton()
button.addEventListener("click", addElementAfterClick)
input.addEventListener("keypress", addElementAfterKeypress)
ul.addEventListener("click", strikeThrough)
ul.addEventListener("click", deleteList)
clear.addEventListener("click", clearList)
input.addEventListener("focus", focusing)

// function strikeThrough(event){
//     if (event.target.tagName==="LI"){
//         event.target.classList.toggle("done")
//     }
// }

// function deleteButton(){
//     for (var i=0; i<li.length; i++){
//         var btn = document.createElement("button");
//         var txtNode = document.createTextNode("Delete");
//         btn.appendChild(txtNode);
//         delWrapper[i].appendChild(btn);
//     }
// }

// function deleteList(event){
//     var p = event.target.parentNode
//     if(event.target.tagName==="BUTTON"){
//        p.remove()
        
//     }
// }

// function clearList(){
//     ul.remove()
// }


// clear.addEventListener("click", clearList)

// var li = document.createElement("li");
// var inputValue = document.createTextNode(input.value);
// li.appendChild(inputValue);
// var btn = document.createElement("button");
// var txtNode = document.createTextNode("Delete");
// btn.appendChild(txtNode);
// delWrapper.appendChild(btn);
// var div = document.createElement("dive")
// div.classList.add("li-del-wrapper")

// input.value = ""