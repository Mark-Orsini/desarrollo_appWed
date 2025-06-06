let compras = [];

// ejercicio 1
function usarPush() {
    compras.push("pan", "leche", "huevos");
    alert("El array tiene: "+compras.join(" - "));
};

// ejercicio 2
function usarPop() {
    let basura = compras.pop();
    alert(`Elemento eliminado: ${basura}`);
    alert(`Quedo asi: ${compras}`);
};

// ejercicio 3
let colores = ["rojo", "azul"];
function usarUnshift() {
    colores.unshift( "amarillo");
    alert("Los nuevos colores son: " + colores.join(" - "));
};

// ejercicio 4
function usarShift() {
    let basura2 = colores.shift();
    alert(`Elemento eliminado: ${basura2}`);
};

// ejercicio 5
let numeros = [10, 20, 30];
function agregarNumeros() {
    numeros.push(40);
    console.log("Le agregamos 40 al final");
    numeros.shift();
    console.log("Le quitamos el primer numero");
    numeros.unshift(5);
    console.log("Le agregamos un 5 al inicio");
    numeros.pop();
    console.log("Eliminamos el ultimo numero");
    console.log(`El arreglo quedo asi: ${numeros}`);
};

// ejercicio 6
let orden = [];
function ordenar() {
    orden.unshift(3);
    orden.unshift(2);
    orden.unshift(1);
    console.log(orden);
};

// ejercicio 7
let historial = [];
function historialPro() {
    let mensaje = prompt("Agregar un mensaje: ");
    historial.push(mensaje);
    let mensaje2 = prompt("Agregar un mensaje: ");
    historial.push(mensaje2);
    let mensaje3= prompt("Agregar un mensaje: ");
    historial.push(mensaje3);
    alert("El nuevo arreglo es: " + historial.join(" - "));
    let basura = historial.pop();
    alert(`Elemento eliminado: ${basura}`);
};

// ejercicio 8 
let cola = ["Cliente1", "Cliente2", "Cliente3"];
function colaAtencion() {
    alert(cola);
    let basura = cola.shift();
    alert(`Le quitamos ${basura}`);
    cola.push("Cliente4");
    alert("Le agregamos Cliente4");
    alert("La cola quedo asi "+cola);
};

// ejercicio 9 
function nombresA() {
    let nombres = ["Pedro", "Juan", "Luis"];
    alert(nombres);
    let basura = nombres.pop();
    alert(`Quitamos el nombre ${basura}`);
    nombres.unshift("Mateo");
    alert("Agregamos a Mateo al inicio");
    nombres.push("Ana");
    alert("Agregamos a Ana al final");
    alert(nombres);
};

// ejercicios 10
let pila = [];
let colaNueva = [];
function pilasColas() {
    pila.push("Ayer","Hoy","Mañana");
    alert(pila);
    pila.pop();
    pila.pop();

    colaNueva.push("Martes","Miercoles","Jueves");
    colaNueva.shift();
    colaNueva.shift();
    alert(`La pila quedo asi: ${pila}`);
    alert(`La cola quedo asi: ${colaNueva}`);
};

// ejercicio 11
let dias = ["lunes", "miércoles", "jueves"];
function semana() {
    dias.push("viernes");
    dias.shift();
    dias.unshift("Martes");
    dias.unshift("Lunes");
    alert(dias);
};

// ejercicio 12
let personas = ["Carlos", "María", "Luis", "Ana", "Sofía"];
//              ["Pedro", "María", "Luis", "Camila"]
function personasOrden() {
    alert(personas);
    personas.shift();
    personas.unshift("Pedro");
    personas.pop();
    personas.pop();
    personas.push("Camila");
    alert(`El nuevo listado es: ${personas}`);
};

// ejercicio 13 
let tareas = ["comer", "estudiar", "dormir", "jugar", "ver TV", "navegar"];
//           ["comer", "estudiar", "lavar la ropa", "organizar escritorio"]
function ordenTarea() {
    alert(`El orden actual es: ${tareas}`);
    tareas.pop();
    tareas.pop();
    tareas.pop();
    tareas.pop();
    tareas.push("lavar la ropa");
    tareas.push("organizar escritorio");
    alert(`El nuevo orden es: ${tareas}`);
};
