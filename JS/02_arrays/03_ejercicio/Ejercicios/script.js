console.log("se conecto correctamente...")

function mensajeText() {
    let palabras = ["Mañana","Ayer","Hola","¿Que haces?","Vale","Ok","Ah","A"];
    alert(palabras[2]+", "+palabras[3]+". "+palabras[0]+" voy "+palabras[7]+" Dormir "+palabras[4]+"?... "+palabras[5]);
}

function mensajeText2() {
    let datos = ["En "," La Granja "," rápidamente a través "," tres animales "," corren "," de la "," larga pradera"]
    alert(datos[0]+datos[1]+" Los "+datos[3]+datos[4]+datos[2]+datos[5]+datos[6])
}

function matrizF() {
    let matriz = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];
    let resultado = matriz[0] [0]+matriz[2] [2]
    alert("La suma de los numeros dentro de las matrizes es: "+ resultado)
}

function matriz3() {
    let matriz = [
    [1, 2, 3, 4],
    [5, 6, [7, 8, [9, 10]]]
];
    let resultado = matriz[0] [1] + matriz[1] [2] [1] + matriz[1] [2] [2] [1]
    alert("La suma de los numeros dentro de las matrizes es: "+ resultado)
}

function arregloMatriz() {
    let sujeto = ["Perro","Gato","caiman"]
    let acciones = [
    ["ladra", "corre"],
    ["duerme", "salta"],
    ["Muerden", "Comen"],
    ["Respirar", "Nadan"]
];
    alert("El "+sujeto[2]+" Hace: "+acciones[2] [0]+" Tambien "+acciones[2] [1]+" adivina saben "+acciones[3] [0]+" y "+acciones[3] [1])
}