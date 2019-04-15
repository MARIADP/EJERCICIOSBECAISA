


	function addParrafo(){
		let divRespuesta = document.getElementById("respuesta");
		let boton = divRespuesta.children[divRespuesta.children.length-1];
		let unoMasP=document.createElement("p");
		let ultimo1= document.getElementsByTagName("p");
	
		
		let textoUnoMasP=document.createTextNode("Parrafo:" + (ultimo1.length+1));
		unoMasP.appendChild(textoUnoMasP);
		divRespuesta.insertBefore(unoMasP,boton);
		unoMasP.addEventListener("click", eliminar);
	}
	
			
	function eliminar(){
		let p=this;
		let divRespuesta = document.getElementById("respuesta");
	
		p.parentNode.removeChild(p);

		if(divRespuesta.children.length ==2 ){
			let tit=document.getElementsByTagName("h1")[0];
			//let bot=document.getElementById("boton");
			let bot = divRespuesta.children[1];
			divRespuesta.removeChild(tit);
			divRespuesta.removeChild(bot);
		}
				
	}
			
	function lanzar(){
		
		miFormulario.btn_lanzar.style.display="none"; //hace que una vez le de a lanzar desaparezca el boton
		let divRespuesta = document.getElementById("respuesta");
		let titulo = miFormulario.titulo.value;
		let numero = document.getElementById("numero").value;

		let h1 = document.createElement("h1");
		let textoH1=document.createTextNode(titulo);
		h1.appendChild(textoH1);
		divRespuesta.appendChild(h1);

		for(let i=1; i<=numero; i++){
			let p=document.createElement("p");
			let textoP=document.createTextNode("Parrafo:" + i);
			p.appendChild(textoP);
			divRespuesta.appendChild(p)
			p.addEventListener("click", eliminar);
		}

		
			let boton = document.createElement("input");
			boton.setAttribute("type", "button");
			boton.setAttribute("value", "añadir");
			boton.setAttribute("id","boton");
			divRespuesta.appendChild(boton);
			boton.addEventListener("click", addParrafo);
			
				
				//boton.onclick=addParrafo


				
			}


			function validar(){
				//que el numero no esté vacio. obligatorio completar
				let titulo=miFormulario.titulo.value;
				let numero=miFormulario.numero.value;

				if(/^\s+$/.test(numero)||numero==""||numero.length==0){
					return false;
				}
				
				if(!/^[A-Z]{5,20}$/.test(titulo)){
					alert("el titulo debe ser letra A a Z y de 5a 20 caracteres");
					miFormulario.titulo.style.backgroundColor="red";
					return false;
					
				}

				if(!/^([1-9]|10)$/.test(numero)){
					alert("el numero debe estar entre 1 y 10");
					miFormulario.numero.style.backgroundColor="red";
					return false;

				}
				miFormulario.titulo.style.backgroundColor="white";
				miFormulario.numero.style.backgroundColor="white";

				miFormulario.btn_lanzar.style.display="block";
				miFormulario.btn_lanzar.onclick=lanzar;
				miFormulario.titulo.disabled=true;
				miFormulario.numero.disable=true;


				
			}
			
            // cuando cargo la pagina que se muestre el boton lanzar.
		  window.onload = function() {
				
				let titulo=miFormulario.titulo;
				let numero=miFormulario.numero;
				titulo.onblur=validar; //onblur es salir de la cajita
				titulo.onblur=validar;
				//miFormulario.btn_lanzar.onclick=lanzar;
			};			




