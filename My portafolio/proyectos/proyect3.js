window.onload=inizio;


function inizio () {

let boton =document.getElementById("boton")




boton.addEventListener("click",calculate)

function calculate (){
    

    const  inputs = document.getElementById("inputs").value;


 let a = parseInt(inputs) ;

 
 let resultado = 2022 - a; 
 
 console.log(resultado);


let div =document.getElementById("divage").textContent=resultado;




}









}