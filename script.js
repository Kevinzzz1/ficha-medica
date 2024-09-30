// script.js
let fichasMedicas = [];

function guardarFicha() {
    const rut = document.getElementById('rut').value;
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const direccion = document.getElementById('direccion').value;
    const ciudad = document.getElementById('ciudad').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const estadoCivil = document.getElementById('estadoCivil').value;
    const comentarios = document.getElementById('comentarios').value;

    const fichaExistente = fichasMedicas.find(ficha => ficha.rut === rut);

    if (fichaExistente) {
        if (confirm('El registro ya existe. ¿Desea sobrescribirlo?')) {
            fichaExistente.nombres = nombres;
            fichaExistente.apellidos = apellidos;
            fichaExistente.direccion = direccion;
            fichaExistente.ciudad = ciudad;
            fichaExistente.telefono = telefono;
            fichaExistente.email = email;
            fichaExistente.fechaNacimiento = fechaNacimiento;
            fichaExistente.estadoCivil = estadoCivil;
            fichaExistente.comentarios = comentarios;
        }
    } else {
        const nuevaFicha = {
            rut,
            nombres,
            apellidos,
            direccion,
            ciudad,
            telefono,
            email,
            fechaNacimiento,
            estadoCivil,
            comentarios
        };
        fichasMedicas.push(nuevaFicha);
    }
    alert('Ficha guardada con éxito.');
}

function buscarPorApellido() {
    const apellido = document.getElementById('buscarApellido').value;
    const resultados = fichasMedicas.filter(ficha => ficha.apellidos.includes(apellido));
    const resultadosDiv = document.getElementById('resultadosBusqueda');
    resultadosDiv.innerHTML = '';

    if (resultados.length > 0) {
        resultados.forEach(ficha => {
            resultadosDiv.innerHTML += `<p>${ficha.nombres} ${ficha.apellidos} - ${ficha.rut}</p>`;
        });
    } else {
        resultadosDiv.innerHTML = '<p>No se encontraron resultados.</p>';
    }
}

function cerrarFormulario() {
    window.close();
}
