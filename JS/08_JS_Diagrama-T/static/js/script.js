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

// function filtrarMultiples(limite, multiplo) {
//     let lista = [];
//     for (let i = 1; i <= limite; i++) {
//         if (i % multiplo === 0) {
//             lista.push(i)
//         };
//     };
//     return lista;
// }; 

// function mostrarMensajeEje1() {
//     let numero1 = document.getElementById("input10").value;
//     let numero2 = document.getElementById("input11").value;

//     let resultado = filtrarMultiples(numero1, numero2);

//     document.getElementById("resultado").innerHTML =
//     `<p>Los numeros multiplos son: ${resultado}</p>`;
// };

// --- FUNCIONES PRINCIPALES ---

function filtrarMultiples(limite, multiplo) {
    let lista = [];
    for (let i = 1; i <= limite; i++) {
        if (i % multiplo === 0) {
            lista.push(i);
        }
    }
    return lista;
};

function mostrarMensajeEje1() {
    let numero1 = parseInt(document.getElementById("input10").value);
    let numero2 = parseInt(document.getElementById("input11").value);

    if (isNaN(numero1) || isNaN(numero2)) {
        document.getElementById("resultado").innerHTML = "<p style='color: red;'>Por favor, ingresa números válidos en ambos campos.</p>";
        return;
    }

    if (numero2 === 0) {
        document.getElementById("resultado").innerHTML = "<p style='color: red;'>El número múltiplo no puede ser cero.</p>";
        return;
    }

    let resultado = filtrarMultiples(numero1, numero2);

    document.getElementById("resultado").innerHTML =
        `<p>Los números múltiplos de ${numero2} hasta ${numero1} son: ${resultado.length > 0 ? resultado.join(', ') : 'Ninguno'}</p>`;
};

// --- FUNCIONALIDAD PARA LA TECLA ENTER ---

// Obtenemos las referencias a los inputs
const inputLimite = document.getElementById("input10");
const inputMultiplo = document.getElementById("input11");

// Añadimos un "event listener" a cada input para detectar la tecla Enter
inputLimite.addEventListener("keydown", function(event) {
    // Verificamos si la tecla presionada es 'Enter'
    if (event.key === "Enter") {
        event.preventDefault(); // Evita el comportamiento por defecto (ej. envío de formulario si hay uno)
        mostrarMensajeEje1(); // Llama a la función que activa el botón
    }
});

inputMultiplo.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Evita el comportamiento por defecto
        mostrarMensajeEje1(); // Llama a la función que activa el botón
    }
});


