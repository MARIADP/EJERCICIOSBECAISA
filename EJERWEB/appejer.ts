class Series {
     private serie: string;
     private capitulo: number;

     constructor(nombre: string, version: number){
          this.serie=nombre;
          this.capitulo=version;  
     }

     getSerie(){
          return this.serie
     }

     setSerie(nombre:string){
          this.serie=nombre;
     }

     getCapitulo(){
          return this.serie
     }

     setCapitulo(version:number){
          this.capitulo=version;
     }
     grabar(serie:Series){
     
     arraySeries.push(serie);
     }

}

let arraySeries:Series[]=[];

let boton =<HTMLInputElement>document.getElementById("btn1");
boton.addEventListener("click", guardar);

function guardar(){

let nombre:string =(<HTMLInputElement>document.getElementById("nom")).value.toString();
let capitulo:number = parseInt((<HTMLInputElement>document.getElementById("cap")).value);

let serie=new Series(nombre, capitulo);
serie.grabar(serie);
//para borrar los campos una vez guardo
(<HTMLInputElement>document.getElementById("nom")).value="";
(<HTMLInputElement>document.getElementById("cap")).value="";

}

function listar(){
     let ul
     let i
}


window.onload(){
     document.forms['miFormulario'].
}


		
	

/*let divRespuesta=<HTMLElement>document.getElementById("respuesta");
let nombre:string =(<HTMLInputElement>document.getElementById("nom")).value.toString();
let capitulo:number = parseInt((<HTMLInputElement>document.getElementById("cap")).value);
let texto:Node;




document.forms['miFormulario'].btn_lanzar.style.display="none";
	
			
	let p:HTMLElement;
	
	let h1:HTMLElement=document.createElement("h1");
		texto=document.createTextNode(titulo);
		h1.appendChild(texto);
		divRespuesta.appendChild(h1);*/