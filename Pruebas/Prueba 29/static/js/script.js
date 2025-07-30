// Ejercicio 1
// codigo de prueba 
/*
function calcular() {
    let numero = 5;
    let total = 0;
    for (let i = 1; i <= numero; i++) {
        total += i;
        console.log("i:",i,"total:",total);
    }
    alert("La suma de 1 hasta "+numero+" es "+total);
    return total;
}
function llamarEje1() {
    let resultado = calcular();
    console.log("Resultado final:",resultado)
};
*/
// Ejercicio 2

function ejercicio(limite) {
    // Se crea la lista que va a 
    // guardar los valores impares.
    let listaImpar = []
    for (let i = 1; i <= limite; i++) {
        // Aqui se separan los numeros pares de los impares
        if (i % 2 === 0) {
            console.log(`${i} es par`)
        } else {
            // Guardamos los impares para entregarlos en la lista.
            listaImpar.push(i)
            console.log(`${i} es impar`)
        };
    };
    // Retornamos la lista con sus respectivos valores.
    return listaImpar
};

function mostrar() {
    // Extrae el valor que esta en elinput.
    let input1 = document.getElementById("input10").value;
    // Se le manda el valor que esta en el input a la funcion
    // para que lo procese.
    let resultado = ejercicio(input1)
    // Imprime en la consola la lista de los valores numericos.
    console.log("Los numeros son: ",resultado.join(","))
    // Escribe en el HTML los resultados, la lista.
    document.getElementById("mostrar").innerHTML =
    `<p>Los numeros impares son: ${resultado.join(",")}</p>`;
    // le da un alert con el resultado al usuario.
    alert("Los numeros impares son: "+resultado.join(","))
};

// --- FUNCIONALIDAD PARA LA TECLA ENTER ---

// Obtenemos las referencias a los inputs
const input2 = document.getElementById("input10");

// Añadimos un "event listener" a cada input para detectar la tecla Enter
input2.addEventListener("keydown", function(event) {
    // Verificamos si la tecla presionada es 'Enter'
    if (event.key === "Enter") {
        event.preventDefault(); // Evita el comportamiento por defecto (ej. envío de formulario si hay uno)
        mostrar(); // Llama a la función que activa el botón
    }
});