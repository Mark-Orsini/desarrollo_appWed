// Ejercicio 1
function contadorN() {
    let numero = parseInt(prompt("Ingrese un numero: "));
    for (let n = 1; n <= numero; n++) {
        alert("N = "+n)
        document.getElementById("contadorN").innerHTML =
        `<p>-->${n}<--</p>`;
    };
};

// Ejercicio 2
function suma() {
    let n = 0;
    let total = 0;
    let listN = [];
    while (n < 5) {
        let numero = parseInt(prompt("Ingrese un numero: "));
        listN.push(numero);
        total = total + numero
        n++;
    };
    alert("La lista de sus numeros ingresados: "+listN.join(" - "));
    document.getElementById("suma").innerHTML =
    `<p>El total de la suma es: ${total}</p>`;
};

// Ejercicio 3
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

// Ejercicio 4
function contadorRegresivo() {
    let numero = parseInt(prompt("Ingrese para la cuenta regresiva: "));
    while (numero >= 0) {
        alert(numero);
        document.getElementById("contadorRegresivo").innerHTML =
        `<p>${numero}</p>`;
        if (numero === 0) {
            alert("Número no válido");
        }
        numero--;
    };
};

// Ejercicio 5
function tablaMultiplicar() {
    let numero = parseInt(prompt("Ingrese el numero de la tabla: "))
    for (let n = 1; n <= 10; n++) {
        alert(numero * n);
    };
};

// Ejercicio 6
function sumarHasta() {
    let listNumeros = [];
    let total = 0;
    while (true) {
        let n = parseInt(prompt("Ingresa un numero (Ingresa 0 para terminar el ciclo): "));
        if (n === 0) {
            break;
        };
        listNumeros.push(n);
        total += n;
    };
    document.getElementById("sumarHasta").innerHTML =
    `<p>El total de la suma es: ${total}</p>`;
};

// Ejercicio 7
function mostrarLetras() {
    let palabra = prompt("Ingrese una palabra: ")
    if (palabra) {
        for (let i = 0; i < palabra.length; i++) {
            document.getElementById("mostrarLetras").innerHTML +=
            `<p>Letra ${i + 1}: ${palabra[i]}</p>`;
        };
    };
};

// Ejercicio 8
function pedirClave() {
    let contrasena;
    while (contrasena !== "admin123") {
        contrasena = prompt("Ingrese la contraseña: ");
    }
    alert("Acceso concedido");
    document.getElementById("pedirClave").innerHTML +=
            `<p>Acceso concedido</p>`;
};

// Ejercicio 9
function pedirNotas() {
    let cantidad = parseInt(prompt("¿Cuántas notas va a ingresar?"));
    let total = 0;

    for (let n = 1; n <= cantidad; n++) {
        let nota = parseFloat(prompt("Ingrese la nota " + n + ":"));
        total += nota;
    }

    let promedio = total / cantidad;
    alert("El promedio es: " + promedio);
    document.getElementById("pedirNotas").innerHTML +=
            `<p>El promedio es: ${promedio}</p>`;
};

// Ejercicio 10
function contarMayores() {
    let cantidad = parseInt(prompt("¿Cuántas personas va a ingresar?"));
    let mayores = 0;

    for (let n = 1; n <= cantidad; n++) {
        let edad = parseInt(prompt("Ingrese la edad de la persona " + n + ":"));
        if (edad >= 18) {
            mayores++;
        }
    }

    alert("Cantidad de personas mayores de edad: " + mayores);
    document.getElementById("contarMayores").innerHTML +=
            `<p>Cantidad de personas mayores de edad: ${mayores}</p>`;
};