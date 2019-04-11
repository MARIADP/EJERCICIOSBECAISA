let n1 = prompt("Dame primero");
let n2 = prompt("Dame segundo");
/*para convertilos en num*/
n1=+n1; 
n2=+n2;
let mayor;
let menor;
let pares=0;
let impares=0;
let suma=0;

if(n1>n2){
     mayor=n1;
     menor=n2;
}else{
     mayor=n2;
     menor=n1;
}

/*una vez tengo cuales son mayores y menos hago el bucle*/

for(let indice=menor; indice<=mayor; indice++){
     console.log(indice);
/*cuales son pares o impares*/
     if(indice%2==0){
          pares++;/*---pares=pares+---*/
     }else{
          impares++; /*---impares=impares+---*/
     }

     suma=suma+indice;
}

document.write("Los pares son: " + pares);
document.write("Los impares son: " + impares);
alert("La suma total es:"+suma);