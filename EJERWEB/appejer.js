var Series = /** @class */ (function () {
    function Series(nombre, version) {
        this.serie = nombre;
        this.capitulo = version;
    }
    Series.prototype.getSerie = function () {
        return this.serie;
    };
    Series.prototype.setSerie = function (nombre) {
        this.serie = nombre;
    };
    Series.prototype.getCapitulo = function () {
        return this.serie;
    };
    Series.prototype.setCapitulo = function (version) {
        this.capitulo = version;
    };
    Series.prototype.grabar = function () {
        var nombre = document.getElementById("nom").value.toString();
        var capitulo = parseInt(document.getElementById("cap").value);
        var serie = new Series(nombre, capitulo);
        arraySeries.push(serie);
    };
    return Series;
}());
var arraySeries = [];
var boton = document.getElementById("btn1");
    boton.addEventListener("click", guardar);
function guardar() {
    var nombre = document.getElementById("nom").value.toString();
    var capitulo = parseInt(document.getElementById("cap").value);
    var serie = new Series(nombre, capitulo);
    serie.grabar(serie);
    document.getElementById("nom").value = "";
    document.getElementById("cap");
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
