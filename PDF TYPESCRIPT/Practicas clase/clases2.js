"use strict";
class Programa {
    constructor(nombre, version) {
        this.nombre = nombre;
        this.version = version;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        return this.nombre = nombre;
    }
    getVersion() {
        return this.version;
    }
    setVersion(version) {
        this.version = version;
    }
}
class EditorVideo extends Programa {
    setTimeLine(timeline) {
        this.timeline = timeline;
    }
    getTimeLine() {
        return this.timeline;
    }
    getAllData() {
        return this.getNombre + " - " + this.getVersion() + " " + this.getTimeLine();
    }
}
var editor = new EditorVideo();
editor.setNombre("Camtasia Studio");
editor.setVersion(8);
editor.setTimeLine(4000);
console.log(editor.getAllData());
var programas = [];
function guardar() {
    var nombre = document.getElementById("nombre").value.toString();
    var programa = new Programa(nombre, 1);
    programa.setNombre(nombre);
    programa.setVersion(1);
    programas.push(programa);
    var list = "";
    for (let i = 0; i < programas.length; i++) {
        list = list + "<li>" + programas[i].getNombre() + "</li>";
    }
    var listado = document.getElementById("listado");
    listado.innerHTML = list;
}
window.onload = function () {
    var boton = document.getElementById("boton");
    boton.addEventListener("click", guardar);
};
