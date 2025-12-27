// Esperamos a que cargue todo el HTML
document.addEventListener("DOMContentLoaded", () => {

    // Array con los proyectos del portfolio
    const proyectos = [
        {
            nombre: "DavanteDent",
            descripcion: "Aplicación web para la gestión de citas de una clínica dental usando HTML, CSS y JavaScript.",
            enlace: "proyectos/proyecto-desarrollo-web-entorno-cliente/davantedent/"
        }
    ];

    const contenedor = document.getElementById("listaProyectos");

    // Recorremos los proyectos y los mostramos en tarjetas
    proyectos.forEach(proyecto => {
        const card = document.createElement("div");
        card.className = "proyecto-card";

        card.innerHTML = `
            <h3>${proyecto.nombre}</h3>
            <p>${proyecto.descripcion}</p>

            <div class="botones-proyecto">
                <a href="${proyecto.enlace}" target="_blank" class="btn-proyecto">
                    Ver proyecto
                </a>

                <a href="https://github.com/Ayaxlc" target="_blank" class="btn-github">
                    GitHub
                </a>
            </div>
        `;

        contenedor.appendChild(card);
    });
});
