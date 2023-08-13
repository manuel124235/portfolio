window.onload=inizio;

function inizio (){


let submit =document.getElementById("submit");
submit.addEventListener("click",formulario);



function formulario(){
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let number = document.getElementById("number").value
;


let newbie1 = document.getElementById("newbie1").checked;
let newbie2 = document.getElementById("newbie2").checked;
let newbie3 = document.getElementById("newbie3").checked;


let most = document.getElementById("most-like").value


let checkbox1 = document.getElementById("checkbox1").checked;
let checkbox2 = document.getElementById("checkbox2").checked;
let checkbox3 = document.getElementById("checkbox3").checked;
let checkbox4 = document.getElementById("checkbox4").checked
;
let comentarios = document.getElementById("comentarios").value;

const array=[name,email,number,newbie1,newbie2,newbie3,most,checkbox1,checkbox2,checkbox3,checkbox4,comentarios];

console.log(array)

}






}