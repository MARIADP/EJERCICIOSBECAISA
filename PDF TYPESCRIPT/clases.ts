/* tsc -init para crear el json*/
/* tsc -W   --- me compila todo y me refresca si he hecho algun cambio en json */

class Programa
{
    public nombre: string;
    public version: number;

    constructor(nombre:string, version:number) {
     
        this.nombre=nombre;
        this.version=version;
    }

    
    getNombre(){
        return this.nombre;
    }

    setNombre(nombre:string){
        return this.nombre=nombre;
    }

    getVersion(){
        return this.version;
    }

    setVersion(version:number){
        this.version=version;
    }

}
// si ponemos EXTENDS en typescrip es para heredar las propiedas del padre que sean publicas, las privasdas no.

class EditorVideo extends Programa{
    public timeline:number;


    //cuando hago una herencia primero tengo que cosntruir al padre, con la palabra SUPER. el resto de propiedades del hijo se declaran con el this.
   constructor(timeline:number, name:string, version:number){
                super(name, version)
                this.timeline=timeline;

   }


   setTimeLine(timeline:number){
        this.timeline=timeline;
    }

    getTimeLine(){
        return this.timeline;
    }

    getAllData():String{
        return this.getNombre+" - "+this.getVersion()+" "+this.getTimeLine();
    }

}

var editor = new EditorVideo(4000, "Camtasia Studio", 8 );
//editor.setNombre("Camtasia Studio");
//editor.setVersion(8);
//editor.setTimeLine(4000);

console.log(editor.getAllData());

var programas:Programa[] = [];

function guardar()
{
    var nombre:string = (<HTMLInputElement>document.getElementById("nombre")).value.toString();


    var programa=new Programa(nombre,1);
    //programa.setNombre(nombre);
    //programa.setVersion(1);

    programas.push(programa);

    var list="";

    for (let i=0; i<programas.length; i++)
    {
        list = list +"<li>"+programas[i].getNombre()+"</li>";
    }
    var listado=(<HTMLElement>document.getElementById("listado"));
    listado.innerHTML=list;






}

window.onload  = function(){
    var boton = (<HTMLInputElement>document.getElementById("boton"));
    boton.addEventListener("click",guardar);
}
