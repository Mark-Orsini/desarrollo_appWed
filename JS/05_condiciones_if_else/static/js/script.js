console.log("Conectado....");

function mayoriaEdad() {
    let edad = parseInt(prompt("Ingrese Edad: "));
    
    if (edad >= 18) {
        document.getElementById("resultado").innerHTML = `<p>La persona es mayor de Edad: ${edad}</p>`
    } else if (edad <= 17 && edad >= 0){
        document.getElementById("resultado").innerHTML = `<p>La persona es menor de Edad: ${edad}</p>`
    } else {
        document.getElementById("resultado").innerHTML = `<p>El valor <strong>${edad}</strong> es invalido</p>`
    };
};

// ejercicios

function nuevoProducto() {
    let producto = ["pan", "leche", "queso"];
    let nuevoProdu = prompt("Ingrese un nuevo producto");
    id (producto[0] == nuevoProdu) {
        
    }
}