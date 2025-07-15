/*
🟦 Ejercicio 1: Repetir una palabra N veces
📌 Solicita al usuario una palabra y un número usando prompt. Luego,
crea una función que reciba ambos valores como parámetros, repita
la palabra N veces utilizando un bucle, y retorne el resultado
completo como una cadena de texto. Muestra el resultado con alert.
*/

function repetirPalabra(palabra, veces) {
    let resultado = '';
    for (let i = 0; i < veces; i++) {
        resultado += `${palabra} `;
    }
    return resultado.trim();
}

function mostarPalabra() {
    let input1 = document.getElementById("input1");
    let palabra = input1.value;
    let numero = parseInt(prompt('Ingrese cantidad a repetir'));

    let resultadoFinal = repetirPalabra(palabra, numero);

    document.getElementById("resultado").textContent = resultadoFinal;
}