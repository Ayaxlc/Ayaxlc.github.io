document.addEventListener("DOMContentLoaded", () => {

    const proyectos = [
        {
            nombre: "DavanteDent",
            descripcion: "Aplicación web para la gestión de citas de una clínica dental. Permite crear, modificar y eliminar citas usando LocalStorage.",
            enlace: "proyectos/proyecto-desarrollo-web-entorno-cliente/davantedent/"
        }
    ];

    const contenedor = document.getElementById("listaProyectos");

    if (!contenedor) return;

    proyectos.forEach(p => {
        const card = document.createElement("div");
        card.className = "project-card";

        card.innerHTML = `
            <h3>${p.nombre}</h3>
            <p>${p.descripcion}</p>
            <a href="${p.enlace}" target="_blank" class="btn btn-project">
                Ver proyecto
            </a>
        `;

        contenedor.appendChild(card);
    });

    /* Scroll suave */
    document.querySelectorAll('a[href^="#"]').forEach(enlace => {
        enlace.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href"))
                .scrollIntoView({ behavior: "smooth" });
        });
    });

});
