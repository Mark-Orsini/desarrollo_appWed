// Variables
let numeroEntero = 5;                           // variable tipo entero
let numeroDecimal = 3.14;                       // variable tipo decimal
let cadenaTexto = "Hola Mundo";                 // variable tipo string
let valorBooleano = true;                       // variable tipo boolenao
let arregloNumeros = [1,2,3,4,5];               // variable tipo arreglo
let objetoPersona = {                           // variable tipo objeto
    nombre: "Mark",
    edad: 17
};
let valorIndefinido;                            // variable tipo indefinido
let valorNulo = null;                           // variable tipo Null
let identificadorUnico = Symbol(1);             // variable tipo dato unico
let numeroGrande = BigInt(3267846732648764876); // variable tipo int grande
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

// imprimir en consola
console.log("Hola Mundo");

// llamado de funciones
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

// imprimir en consola
console.log(resultado)