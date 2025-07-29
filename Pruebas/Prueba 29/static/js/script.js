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
    listaImpar = []
    for (let i = 1; i <= limite; i++) {
        if (i % 2 === 0) {
            
        } else {
            listaImpar.push(i)
        };
    };
};

function mostrar() {
    let input1 = document.getElementById("input10").value;

    let resultado = ejercicio(input1)

    document.getElementById("mostrar").innerHTML =
    `<p>Los numeros pares son: ${listPar}</p>`;
};



// ------
function mostrarPar() {
    let listPar = []
    for (let n = 1; n <= 20; n++) {
        if (n % 2 === 0) {
            listPar.push(n)
            alert(n+" Es par")
        } else {
            alert(n+" No es par")
        }
    };
    document.getElementById("mostrarPar").innerHTML =
    `<p>Los numeros pares son: ${listPar}</p>`;
}; 