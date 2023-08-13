vbcvbcvcbvbcvb
  let estado = [0];
function cambio (){


  
if (estado[0] === 0) {estado[0]= 1;
    
  document.getElementById("boton1").style.backgroundColor="purple";
  document.getElementById("boton1").style.color="black";
document.getElementById("titulo").style.color="purple";
document.querySelector("section h2").style.color="purple";
document.querySelector("p").style.color="purple";
document.getElementById("project-tile").style.color="purple";
document.getElementById("chisono").style.color="purple";




}
else {





  document.getElementById("boton1").style.backgroundColor="black";
  document.getElementById("boton1").style.color="white";
document.getElementById("titulo").style.color="black";
document.querySelector("section h2").style.color="black";
document.querySelector("p").style.color="black";
document.getElementById("project-tile").style.color="black";
document.getElementById("chisono").style.color="black";



estado[0]=0;

}

console.log(estado);

}



