document.addEventListener("DOMContentLoaded", () => {

    console.log("JS cargado correctamente");

    const proyectos = [
        {
            nombre: "DavanteDent",
            descripcion: "Aplicación web para la gestión de citas de una clínica dental. Permite crear, modificar y eliminar citas usando LocalStorage.",
            enlace: "proyectos/proyecto-desarrollo-web-entorno-cliente/davantedent/"
        }
    ];

    const contenedor = document.getElementById("listaProyectos");

    if (!contenedor) {
        console.error("NO se encontró #listaProyectos");
        return;
    }

    proyectos.forEach(proyecto => {
        const card = document.createElement("div");
        card.classList.add("project-card");

        card.innerHTML = `
            <h3>${proyecto.nombre}</h3>
            <p>${proyecto.descripcion}</p>
            <a href="${proyecto.enlace}" 
               target="_blank" 
               class="btn btn-project">
               Ver proyecto
            </a>
        `;

        contenedor.appendChild(card);
    });

});

