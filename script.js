// =======================================
// PORTFOLIO · JAVASCRIPT PRINCIPAL
// Este archivo se encarga de cargar
// dinámicamente los proyectos
// =======================================

// Lista de proyectos del portfolio
const proyectos = [
    {
        nombre: "DavanteDent",
        descripcion: "Aplicación web para la gestión de citas de una clínica dental. Permite crear, modificar y eliminar citas usando LocalStorage.",
        enlace: "proyectos/proyecto-desarrollo-web-entorno-cliente/davantedent/"
    }
];

// Contenedor donde se insertan los proyectos
const contenedor = document.getElementById("listaProyectos");

// Recorremos los proyectos y los mostramos
proyectos.forEach(proyecto => {

    // Creamos la tarjeta
    const card = document.createElement("div");
    card.className = "proyecto-card";

    card.innerHTML = `
        <h3>${proyecto.nombre}</h3>
        <p>${proyecto.descripcion}</p>
        <a href="${proyecto.enlace}" target="_blank">
            Ver proyecto
        </a>
    `;

    // La añadimos al DOM
    contenedor.appendChild(card);
});

