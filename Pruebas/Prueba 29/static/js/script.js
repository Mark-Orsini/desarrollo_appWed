// Ejercicio 1

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

// Ejercicio 2

function ejercicio(limite) {
    let listaImpar = []
    for (let i = 1; i <= limite; i++) {
        if (i % 2 === 0) {
            
        } else {
            listaImpar.push(i)
        };
    };
    return listaImpar
};

function mostrar() {
    let input1 = document.getElementById("input10").value;

    let resultado = ejercicio(input1)

    document.getElementById("mostrar").innerHTML =
    `<p>Los numeros impares son: ${resultado.join(",")}</p>`;
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


