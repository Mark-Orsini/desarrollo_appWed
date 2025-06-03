console.log('JS conectado...')

let array = ["Xbox", "Nintendo"];

function usarPush() {
    // Agregar al final
    let entrada = prompt("Agregar una consola: ")
    array.push(entrada)
    alert("El nuevo arreglo es: " + array.join(" "))
};

function usarPop() {
    // Elimina el ultimo elemento
    let basura = array.pop()
    alert(`Elemento eliminado: ${basura}`)
};

function usarUnshift() {
    // Agregar al final
    let entrada = prompt("Agregar una consola: ")
    array.unshift(entrada)
    alert("El nuevo arreglo es: " + array.join(" "))
};

function usarShift() {
    // Elimina el ultimo elemento
    let basura = array.shift()
    alert(`Elemento eliminado: ${basura}`)
};

