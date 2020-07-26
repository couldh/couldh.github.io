let current = document.querySelector("span.current");
//current.innerHTML = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();;
let today = new Date();
let month = today.getMonth();
let year = today.getFullYear();
let date = today.getDate();

let current_date = `${year}/${month}/${date}`;

current.innerHTML = current_date;

//_____________________
//countdown to christmass <3

let chr = new Date("december 25, 2020");

let daysLeftraw = ((chr.getTime() - today.getTime())/1000/60/60/24);
let daysLeft = Math.floor(daysLeftraw);
let countdown = document.querySelector("span.countdown");

console.log(daysLeftraw);
countdown.innerHTML = daysLeft.toFixed(0);


