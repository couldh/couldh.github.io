function hello() {
   let hello = document.querySelector("button#b")
   hello.innerHTML =("not today :P")
}


function adddrink() { 
    let dname = document.querySelector("select#chooseit.dropdown");
    let driname = dname.options[dname.selectedIndex].innerText
                let dprice = document.querySelector("select#chooseit.dropdown").value;
 
//cart.appendChild(document.createElement("li"));
//cart.lastChild.innerHTML = (driname)}

if (counter.innerHTML == 0) {alert("Elérte rendelésének maximumát.");
} else {
   cart.appendChild(document.createElement("li"))
   cart.lastChild.innerHTML = (driname);
   cart.lastChild.appendChild(document.createElement("button"));
   cart.lastChild.lastChild.className = "delbtn fas fa-trash-alt";
   counter.innerHTML = (counter.innerHTML -1)
   message.innerHTML= "";
   sump.innerHTML = (parseInt(sump.innerHTML) + parseInt(dprice))}
}

let sump = document.querySelector("span#sumprice");
function addpizza() { 
   let pname = document.querySelector("select#chosethat.dropdown");
   let pizname = pname.options[pname.selectedIndex].innerText
                let pprice = document.querySelector("select#chosethat.dropdown").value; 

   let sauce = document.querySelector("input#alap").checked ? "Tejfölös alap" : "Paradicsomos alap";
   let cart = document.querySelector("p#cart");

//cart.appendChild(document.createElement("li"));
//cart.lastChild.innerHTML = (sauce + pizname);


let counter = document.querySelector("span#counter")
let del = document.getElementsByClassName("delbtn.fas.fa-trash-alt");


if (counter.innerHTML == 0) {alert("Elérte rendelésének maximumát.");
} else {
   cart.appendChild(document.createElement("li"))
   cart.lastChild.innerHTML = (sauce + pizname);
   cart.lastChild.appendChild(document.createElement("button"));
   cart.lastChild.lastChild.className = "delbtn fas fa-trash-alt";
   counter.innerHTML = (counter.innerHTML -1)
   message.innerHTML = "";
   sump.innerHTML = (parseInt(sump.innerHTML) + parseInt(pprice))}
}

function mesdel() {
   message.innerHTML = ""
}


/* del.addEventListener("click", delet);

function delet(event) {
   let parent = focument.querySelector("p#chart");
   console.log(event.target)} */
let message = document.querySelector("h4#message")
function order() {
   
   message.innerHTML = "Az ön rendelése nem került felvételre, mert ez egy teszt odlal."
   sump.innerHTML = "0";
   counter.innerHTML = "8";
   cart.innerHTML = "";
}