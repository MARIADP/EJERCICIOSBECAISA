


let num1, num2, bueno;
let veces= 0, acierto=0, fallo=0
let pregunta, lista, terminado =false;


function juego(){
     pregunta=document.querySelector("#pregunta");
     lista=document.querySelectorAll("li")

     lista.forEach(function(elem){
          elem.style.backgroundColor='red'
     })

     num1=Math.floor((Math.random()*10)+1);
     num2=Math.floor((Math.random()*10)+1);

     pregunta.innerHTML="¿Cuanto es" + num1 + "x" + num2 + "?";

     bueno=Math.floor(Math.random()*3)

     

}

for(let i=1; i<=10; i++){
     num1=Math.floor((Math.random()*10)+1);
     num2=Math.floor((Math.random()*10)+1);
     
     pregunta=document.querySelector("#pregunta");
     pregunta.innerText ="¿Cuanto es " +  num1  + "x"  + num2 + "?";

     let bot1=document.querySelector("#bot1");
     let bot2=document.querySelector("#bot2");
     let bot3=document.querySelector("#bot3");
     
     
     bot1.innerText=num1*num2;
     bot2.innerText=(Math.floor(Math.random()*3)+1)*7;
     bot3.innerText=(Math.floor(Math.random()*3)+1)*7;



}





