"use strict";
console.log("Hello world");
var myString = "Hello World";
myString = 22 + "";
var miNumero = 22;
var myBool = true || false;
var myVariable = "hello";
myVariable = false;
//STRINGS
document.write(myString);
document.write(miNumero.toString());
// ARRAYS
var StringArrays = ["", "", ""];
StringArrays = [2, 3, 4];
var StringArrays2 = ["item1", "item2", ""];
var NumberArray = [2, 3, 4];
var boolArray = [true, false, false];
var anyArray = [1, "1", true, "hello", [], {}];
//TUPLE
var strNumTuple;
strNumTuple = ["hello", 22];
//strNumTuple=[22+"", "hello"];
//strNumTuple=["world", 245, [], {}];
//strNumTuple=["world", 245, "sss", 22];
//void undefined null
//let myVoid: void= undefined;
//let myNull:null=null;
//let myUndefined:undefined=undefined;
document.write(typeof (strNumTuple));
//document.write(typeof(myVoid));
//functions
function getSumar(num1, num2) {
    return num1 + num2;
}
let mySum = function (num1, num2) {
    if (typeof (num1) === "string") {
        num1 = parseInt(num1);
    }
    if (typeof (num2) === "string") {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
function getName(firstName, lastName) {
    if (lastName == undefined)
        return firstName;
    return `${firstName} ${lastName}`;
}
getName("Jesos");
function myVoidFunction() {
    return;
}
function showTodo(todo) {
    console.log(`${todo.title} - ${todo.text}`);
}
showTodo({ title: "Eat dinner", text: "prueba" });
let myTodo = { title: "hola", text: "aaaa" };
showTodo(myTodo);
//CLASES -- las funciones se llaman metodos los atributos se llaman propiedades
/*si no pones constructor la clase se crearía:
var juan = new Usuario();
juan.mail="ss";
juan.name="aaa";
juan.age=34;
*/
class Usuario {
    //el constructor esta formado por parametros
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    setName(name) {
        this.name = name;
    }
    dameNombre() {
        console.log(`${this.name}esta registrado`);
    }
    register() {
        console.log(`${this.name} esta registrado`);
    }
    muestraEdad() {
        return this.age;
    }
    AgeInYears() {
        return this.age + " años";
    }
    payInVoice() {
        console.log(this.name + " ha pagado");
    }
}
var juan = new Usuario();
juan.email = "a@.es";
juan.setName("pepe");
juan.age = 28;
var juan = new Usuario('juan', 'a@.es', 20);
//document.write(juan.name);
console.log(juan.register());
document.write(juan.email);
//document.write(juan.register());
console.log(juan.AgeInYears());
class Miembros extends Usuario {
    constructor(id, nombre, email, edad) {
        super(name, nombre, email);
        this.id = id;
    }
    payInVoice() {
        super.payInVoice();
    }
}
var gordon = new Miembros("2", "Gordon", "g@gmail.com", 25);
gordon.payInVoice();
let nombre;
nombre = "Miguelo";
let edad;
edad = 30;
const PERSONAJE = {
    nombre: nombre,
    edad: edad
};
