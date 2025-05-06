// Variables
let numeroEntero = 5;
let numeroDecimal = 3.14;
let cadenaTexto = "Hola Mundo";
let valorBooleano = true;
let arregloNumeros = [1,2,3,4,5];
let objetoPersona = {
    nombre: "Mark",
    edad: 17
};
let valorIndefinido;
let valorNulo = null;
let identificadorUnico = Symbol(1);
let numeroGrande = BigInt(3267846732648764876);
const mes = "Mayo";

// Funciones
function numeroE() {
    console.log("Número Entero:",numeroEntero)
};

function numeroD() {
    console.log("Número Decimal:",numeroDecimal)
};

function cadenaT() {
    console.log("Texto: ",cadenaTexto)
};

function valorB() {
    console.log("Valor booleano: ",valorBooleano)
};

function arregloN() {
    console.log("Arreglo Numeros: ",arregloNumeros)
};

function objetoP() {
    console.log("Objeto Persona: ",objetoPersona)
};

function valorI() {
    console.log("Valor Indefinido: ",valorIndefinido)
};

function valorNul() {
    console.log("Valor Null: ",valorNulo)
};

function identificadorUn() {
    console.log("Identificador Unico: ",identificadorUnico)
};

function numeroG() {
    console.log("Numero grande: ",numeroGrande)
};

function messs() {
    console.log("Estamos en: ",mes)
};

function operacion() {
    return numeroDecimal + numeroEntero;
};


console.log("Hola Mundo");

numeroE();
numeroD();
cadenaT();
valorB();
arregloN();
objetoP();
valorI();
valorNul();
identificadorUn();
numeroG();
messs();
let resultado = operacion();
console.log(resultado)