const registros = [];

const form = document.getElementById('inscripcionForm');
const nombreInput = document.getElementById('nombre');
const edadInput = document.getElementById('edad');
const cursoInput = document.getElementById('curso');
const reglamentoInput = document.getElementById('reglamento');

const mensajeError = document.getElementById('mensajeError');
const mensajeResultado = document.getElementById('mensajeResultado');
const resumenDiv = document.getElementById('resumen');
const limpiarBtn = document.getElementById('limpiarBtn');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    procesarFormulario();
});

limpiarBtn.addEventListener('click', function() {
    form.reset(); 
    mensajeError.textContent = '';
    mensajeResultado.textContent = '';
    mensajeError.style.display = 'none';
    mensajeResultado.style.display = 'none';
});

function procesarFormulario() {
    mensajeError.textContent = '';
    mensajeResultado.textContent = '';
    mensajeError.style.display = 'none';
    mensajeResultado.style.display = 'none';

    const nombre = nombreInput.value.trim(); 
    const edad = parseInt(edadInput.value); 
    const curso = cursoInput.value;
    const jornadaSeleccionada = document.querySelector('input[name="jornada"]:checked')?.value;
    const reglamentoAceptado = reglamentoInput.checked;
    
    const errores = []; 
    
    if (nombre.length < 3) {
        errores.push("El nombre debe tener al menos 3 caracteres.");
    }
    if (isNaN(edad) || edad < 14 || edad > 100) {
        errores.push("La edad debe ser un número entre 14 y 100 años.");
    }
    if (curso === "") {
        errores.push("Debes seleccionar un curso.");
    }
    if (!jornadaSeleccionada) {
        errores.push("Debes seleccionar una jornada.");
    }
    if (!reglamentoAceptado) {
        errores.push("Debes aceptar el reglamento.");
    }
    
    if (errores.length > 0) {
        mensajeError.innerHTML = errores.join('<br>');
        mensajeError.style.display = 'block';
        return; 
    }
    
    const nombreNormalizado = capitalizarNombre(nombre);
    
    mensajeResultado.textContent = `Bienvenido, ${nombreNormalizado}. Tu registro para ${curso} en la jornada de ${jornadaSeleccionada} a los ${edad} años ha sido exitoso.`;
    mensajeResultado.style.display = 'block';

    const nuevoEstudiante = {
        nombre: nombreNormalizado,
        edad: edad,
        curso: curso,
        jornada: jornadaSeleccionada
    };
    
    registros.push(nuevoEstudiante);
    
    actualizarResumen();
    
    form.reset();
}


function actualizarResumen() {
    let contadorManana = 0;
    let contadorTarde = 0;

    for (const estudiante of registros) {
        if (estudiante.jornada === 'Mañana') {
            contadorManana++;
        } else if (estudiante.jornada === 'Tarde') {
            contadorTarde++;
        }
    }
    
    resumenDiv.textContent = `Total Registrados: ${registros.length} (Mañana: ${contadorManana}, Tarde: ${contadorTarde})`;
}

/**
 * @param {string} nombreCompleto - El nombre a capitalizar.
 * @returns {string} El nombre capitalizado.
 */

function capitalizarNombre(nombreCompleto) {
    return nombreCompleto
        .toLowerCase()
        .split(' ') // Divide el string en un arreglo de palabras.
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)) // Capitaliza la primera letra de cada palabra.
        .join(' '); // Une las palabras de nuevo en un string.
}