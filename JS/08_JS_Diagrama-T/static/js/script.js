/*
Ejercicio 2 (Función con Parámetros y Return)
Instrucción:
Crea una función llamada filtrarMultiples que:
Reciba dos parámetros: un número limite y otro número multiplo.

Retorne un arreglo con todos los números desde 1 hasta limite que sean divisibles por multiplo.

Muestra el resultado con html (formateado como cadena).

Usa input para pedir limite y multiplo.

Objetivo de aprendizaje:
Diseñar una función que use parámetros y retorne un valor.

Practicar bucles for y condicionales if para filtrar datos.

Aplicar lógica de divisibilidad y construir arreglos dinámicos.

Ejemplo esperado:
Si el usuario ingresa limite = 10 y  multiplo = 3, el resultado será:
Números encontrados: 3, 6, 9}
*/

function filtrarMultiples(limite, multiplo) {
    let lista = [];
    for (let i = 0; i <= limite; i++) {
        // if () {
        //     lista.push()
        // };
    };
    return lista;
}; 

function mostrarMensajeEje1() {
    let numero1 = document.getElementById("input10").value;
    let numero2 = document.getElementById("input11").value;

    let resultado = filtrarMultiples(numero1, numero2);

    document.getElementById("resultado").innerHTML =
    `<p>Los numeros multiplos son: ${resultado}</p>`;
};



