let img1 =document.getElementById("avatar");

img1.addEventListener("mouseenter", entrar);
img1.addEventListener("mouseleave", salir);


img1.addEventListener("click", entrar);
img1.addEventListener("dblclick", salir);


function entrar(){
     img1.setAttribute("src", "/img/profile-180.jpg");
}

function salir(){
     img1.setAttribute("src", "/img/avatar-br.png" );
}

