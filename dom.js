//JS ir vinīgā valoda ar kuru varam dabūt info no lietotāja, tā izpildās browserī 
console.log(window.innerHeight); 
console.log(window.innerWidth)

console.log(innerHeight)

console.log(window.location) 
//dabū visu, kas saistīts ar logu 
console.log(window.document) 
//dabū visu, kas saistīts ar logā redzamo "aktīvo" lapas daļu 
//izmainot vērtības, kuras redzamas window.location, tās izmainīsies arī lietotājam 
//tā var pārvirzīt uz citām lapām 

// window.location="https://google.com" //nonākam google 

// window.open("https://google.com")
//tā var sataisīt vīrusus 

localStorage.setItem("key1", 1000); 
//saglabā failā Coocies, līdz aiztaisīs ciet browsseri 
sessionStorage.setItem("key2", 1000); 
//saglabās ilgāk 

console.log(window.document) 
console.log(window.document.title) 
console.log(window.document.body) 
console.log(window.document.body.children) 
console.log(window.document.body.children[1]) 

window.document.body.children[1].textContent="Šis ir jauns teksts" 
window.document.body.children[2].children[0].innerHTML="<strong>Text</strong>" 
window.document.body.children[2].children[0].style.color="red" 
window.document.body.children[2].children[0].style.backgroundColor="blue" 

console.log(window.document.body.firstChild)
console.log(window.document.body.firstElementChild)

console.log(window.document.body.lastElementChild) 
// console.log(window.document.body.firstElementChild.firstElementChild.firstElementChild)
//ar pēdējo var pārvietoties uz leju pa html, bet nav ērti 

console.log(document.getElementsByTagName("li")) 
//šādi var izvadīt visus li, lai nav jāmin, kurš pēc kārtas bija kāds elements 
//visiem li var piešķirt, piemēram, citu backgroundColor
// console.log(document.getElementsByTagName("li")) 
// document.getElementsByTagName("li").backgroundColor="pink" 

console.log(document.querySelector("ul li"))
console.log(document.querySelectorAll("ul li"))
document.querySelector("ul li"); style.color="red";

var p = document.createElement("p");
p.textContent = "New paragraph from JS"
p.style.fontSize = "20px";

var li = document.querySelectorAll("li")[3];
li.appendChild(p)

var li = document.querySelectorAll("li")[1];
li.remove();

document.querySelectorAll("li")[1].style.backgroundColor = "blue"

//events
window.onload = function (){
    console.log("window loaded")
    alert("Jūsu lapa ir gatava")
}


var btn  = document.querySelector("button");
btn.onclick = function (){
    console.log("Clicked");
}

btn.onclick = function(){
    console.log("other click")
}

var p = document.querySelector ("p")
p.onclick = function(){
    console.log("Paragraph clicked")
}
console.log(btn)

var p = document.querySelector ("p")
function listener1(){
    console.log("listener1")
}

var p = document.querySelector ("p")
function listener2(){
    console.log("listener2")
}
p.addEventListener.apply("click", listener1);
p.addEventListener.apply("click", listener2);

function mouseDownli(){
    console.log("Mouse Down");
}
function mouseUpli(){
    console.log("Mouse Up");
}
p.addEventListener("mousedown", mouseDownli);
p.addEventListener("mouseup", mouseUpli);

setTimeout(function() {
    p.removeEventListener("click", listener1)
}, 2000)

