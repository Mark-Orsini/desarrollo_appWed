let compras = [];

// ejercicio 1
function usarPush() {
    compras.push("pan", "leche", "huevos")
    alert("El array tiene: "+compras.join(" - "))
};

// ejercicio 2
function usarPop() {
    let basura = compras.pop()
    alert(`Elemento eliminado: ${basura}`)
}

// ejercicio 3
let colores = ["rojo", "azul"]
function usarUnshift() {
    colores.unshift( "amarillo")
    alert("Los nuevos colores son: " + colores.join(" - "))
}

// ejercicio 4
function usarShift() {
    let basura2 = colores.shift()
    alert(`Elemento eliminado: ${basura2}`)
}

// ejercicio 5
let numeros = [10, 20, 30]
function agregarNumeros() {
    numeros.push(40)
    alert("Le agregamos 40 al final")
    numeros.shift()
    alert("Le quitamos el primer numero")
    numeros.unshift("5")
    alert("Le agregamos un 5 al inicio")
    numeros.pop()
    alert("Eliminamos el ultimo numero")
    alert(`El arreglo quedo asi: ${numeros}`)
}

// ejercicio 6
let orden = []
function ordenar() {
    orden.unshift("1","2","3")
    console.log(orden)
}

// ejercicio 7
let historial = []
function historialPro() {
    let mensaje = prompt("Agregar un mensaje: ")
    historial.push(mensaje)
    let mensaje2 = prompt("Agregar un mensaje: ")
    historial.push(mensaje2)
    let mensaje3= prompt("Agregar un mensaje: ")
    historial.push(mensaje3)
    alert("El nuevo arreglo es: " + historial.join(" - "))
    let basura = historial.pop()
    alert(`Elemento eliminado: ${basura}`)
}