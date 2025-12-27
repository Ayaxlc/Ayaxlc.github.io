// Esperamos a que todo el HTML esté cargado antes de ejecutar el JavaScript
document.addEventListener("DOMContentLoaded", () => {

    // ===== SECCIONES PRINCIPALES DE LA APLICACIÓN =====
    const inicio = document.querySelector("#inicio");               // Pantalla principal
    const seccionFormulario = document.querySelector("#seccionFormulario"); // Pantalla del formulario
    const seccionCitas = document.querySelector("#seccionCitas");   // Pantalla del listado de citas

    // ===== BOTONES DE NAVEGACIÓN =====
    const btnNuevaCita = document.querySelector("#btnNuevaCita");   // Botón crear cita
    const btnVerCitas = document.querySelector("#btnVerCitas");     // Botón ver citas
    const botonesVolver = document.querySelectorAll(".volver");     // Botones para volver al inicio

    // ===== FORMULARIO Y PANEL DE CITAS =====
    const formulario = document.querySelector("#formCitas");        // Formulario de citas
    const panelCitas = document.querySelector("#panelCitas");       // Zona donde se muestra la tabla

    // ===== CARGA DE DATOS DESDE LOCALSTORAGE =====
    // Si hay citas guardadas se cargan, si no, se crea un array vacío
    let citas = JSON.parse(localStorage.getItem("citas")) || [];

    // Contador automático para asignar un ID único a cada cita
    let contador = citas.length ? citas[citas.length - 1].ID_CITA + 1 : 1;

    // Mostrar las citas nada más cargar la aplicación
    mostrarCitas();

    // ===== EVENTOS DE LOS BOTONES PRINCIPALES =====
    btnNuevaCita.onclick = () => mostrarPantalla(seccionFormulario);
    btnVerCitas.onclick = () => mostrarPantalla(seccionCitas);

    // Todos los botones "volver" llevan a la pantalla inicial
    botonesVolver.forEach(b => b.onclick = () => mostrarPantalla(inicio));

    // ===== FUNCIÓN PARA CAMBIAR DE PANTALLA =====
    function mostrarPantalla(seccion) {
        inicio.className = "pantalla-oculta";
        seccionFormulario.className = "pantalla-oculta";
        seccionCitas.className = "pantalla-oculta";
        seccion.className = "pantalla-activa";
    }

    // ===== ENVÍO DEL FORMULARIO =====
    formulario.addEventListener("submit", e => {
        e.preventDefault(); // Evita que la página se recargue

        // Se crea el objeto CITA con los datos del formulario
        const CITA = {
            ID_CITA: contador,
            nombre: nombrePaciente.value,
            apellidos: apellidosPaciente.value,
            nacimiento: fechaNacimiento.value,
            idPaciente: identificacion.value,
            telefono: telefonoContacto.value,
            dia: diaCita.value,
            mes: mesCita.value,
            anio: anioCita.value,
            hora: horaCita.value,
            minutos: minutosCita.value,
            observaciones: observaciones.value
        };

        // Comprobamos que todos los campos obligatorios estén rellenos
        if (!validarCita(CITA)) {
            alert("Rellena todos los campos obligatorios");
            return;
        }

        // Creamos una fecha completa para comprobar que no sea una cita pasada
        const fechaCita = new Date(
            CITA.anio,
            CITA.mes - 1,
            CITA.dia,
            CITA.hora,
            CITA.minutos
        );

        // No se permiten citas en fechas anteriores a la actual
        if (fechaCita < new Date()) {
            alert("No se permiten citas en el pasado");
            return;
        }

        // Se guarda la cita en el array y en LocalStorage
        citas.push(CITA);
        localStorage.setItem("citas", JSON.stringify(citas));

        // Se incrementa el ID para la siguiente cita
        contador++;

        // Se limpia el formulario
        formulario.reset();

        // Se actualiza el listado y se muestra la pantalla de citas
        mostrarCitas();
        mostrarPantalla(seccionCitas);
    });

    // ===== FUNCIÓN PARA MOSTRAR LAS CITAS EN UNA TABLA =====
    function mostrarCitas() {
        panelCitas.innerHTML = "";

        const tabla = document.createElement("table");
        tabla.innerHTML = `
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Paciente</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Teléfono</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody></tbody>
        `;

        const tbody = tabla.querySelector("tbody");

        // Si no hay citas se muestra un mensaje
        if (citas.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="6">Sin citas registradas</td>
                </tr>
            `;
        } else {
            // Se recorre el array de citas y se crea una fila por cada una
            citas.forEach(cita => {
                const fila = document.createElement("tr");

                fila.innerHTML = `
                    <td>${cita.ID_CITA}</td>
                    <td>${cita.nombre} ${cita.apellidos}</td>
                    <td>${cita.dia}/${cita.mes}/${cita.anio}</td>
                    <td>${cita.hora}:${cita.minutos.toString().padStart(2,"0")}</td>
                    <td>${cita.telefono}</td>
                    <td></td>
                `;

                // Botón para modificar la cita
                const btnModificar = document.createElement("button");
                btnModificar.textContent = "Modificar";

                btnModificar.onclick = () => {
                    cargarFormulario(cita);
                    eliminarCita(cita.ID_CITA);
                    mostrarPantalla(seccionFormulario);
                };

                // Botón para eliminar la cita
                const btnEliminar = document.createElement("button");
                btnEliminar.textContent = "Eliminar";
                btnEliminar.className = "btn-eliminar";

                btnEliminar.onclick = () => {
                    if (confirm("¿Seguro que deseas eliminar esta cita?")) {
                        eliminarCita(cita.ID_CITA);
                        mostrarCitas();
                    }
                };

                fila.children[5].appendChild(btnModificar);
                fila.children[5].appendChild(btnEliminar);
                tbody.appendChild(fila);
            });
        }

        panelCitas.appendChild(tabla);
    }

    // ===== FUNCIÓN PARA ELIMINAR UNA CITA POR SU ID =====
    function eliminarCita(id) {
        citas = citas.filter(c => c.ID_CITA !== id);
        localStorage.setItem("citas", JSON.stringify(citas));
    }

    // ===== FUNCIÓN PARA CARGAR UNA CITA EN EL FORMULARIO =====
    function cargarFormulario(c) {
        nombrePaciente.value = c.nombre;
        apellidosPaciente.value = c.apellidos;
        fechaNacimiento.value = c.nacimiento;
        identificacion.value = c.idPaciente;
        telefonoContacto.value = c.telefono;
        diaCita.value = c.dia;
        mesCita.value = c.mes;
        anioCita.value = c.anio;
        horaCita.value = c.hora;
        minutosCita.value = c.minutos;
        observaciones.value = c.observaciones;
    }

    // ===== FUNCIÓN DE VALIDACIÓN DE CAMPOS =====
    function validarCita(c) {
        return (
            c.nombre &&
            c.apellidos &&
            c.nacimiento &&
            c.idPaciente &&
            c.telefono &&
            c.dia &&
            c.mes &&
            c.anio &&
            c.hora &&
            c.minutos !== ""
        );
    }
});
