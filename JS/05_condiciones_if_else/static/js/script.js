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
    if (producto[0] == nuevoProdu) {
        console.log("...")
    }
}

function mostrarNuevoProducto(){
    let productos = ["pan", "leche", "queso"];
    let nuevoProducto = prompt("Ingrese un nuevo Producto");
    if (productos[0] == nuevoProducto){
        document.getElementById("resultado").innerHTML =
        `<p>El producto: <strong>${nuevoProducto}</strong> ingresado.</p>`;
    } else if(productos[1] == nuevoProducto){
        document.getElementById("resultado").innerHTML =
        `<p>El producto: <strong>${nuevoProducto}</strong> ingresado.</p>`;
    } else if(productos[2] == nuevoProducto){
        document.getElementById("resultado").innerHTML =
        `<p>El producto: <strong>${nuevoProducto}</strong> ingresado.</p>`;
} else{
        productos.push(nuevoProducto);
        document.getElementById("resultado").innerHTML =
        `<p>Nueva lista de productos: <strong>${productos.join(" - ")}</strong> ingresado.</p>`;
}
}