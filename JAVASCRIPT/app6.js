// 0 .. let class1=document.getElementsByClassName("encabezado");
//1 .. let div=document.getElementById("encabezadoFactura")
let class1=document.querySelector(".encabezado");
console.log(class1);

// 0 .. class1[0].setAttribute("class","resalta");
//1 .. div.className="resalta";
class1.setAttribute("class","resalta");
console.log(class1);


//cambiar el contenido al numero de factura
//let hijo=document.getElementByClassName("numeroFactura")[0]; -- para acceder al hijo
//let hijo = document.getElementByTagName("label")[2] -- para acceder al hijo
let hijo = class1.children[2];
hijo.innerHTML=+hijo.innerHTML +1;   
console.log(hijo);


