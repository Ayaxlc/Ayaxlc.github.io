// Esperamos a que el HTML esté cargado
document.addEventListener("DOMContentLoaded", () => {

    // Lista de proyectos del portfolio
    const proyectos = [
        {
            nombre: "DavanteDent",
            descripcion: "Aplicación web para la gestión de citas de una clínica dental. Permite crear, modificar y eliminar citas usando LocalStorage.",
            enlace: "proyectos/proyecto-desarrollo-web-entorno-cliente/davantedent/"
        }
        // Aquí podrás añadir más proyectos en el futuro
    ];

    const contenedor = document.getElementById("listaProyectos");

    proyectos.forEach(p => {
        const card = document.createElement("div");
        card.className = "proyecto-card";

        card.innerHTML = `
            <h3>${p.nombre}</h3>
            <p>${p.descripcion}</p>
            <div class="botones-proyecto">
                <a href="${p.enlace}" target="_blank" class="btn-proyecto">
                    Ver proyecto
                </a>
            </div>
        `;

        contenedor.appendChild(card);

        // Abrir credencial
        document.querySelectorAll('.btn-credential').forEach(button => {
    button.addEventListener('click', () => {
        const url = button.dataset.url;
        window.open(url, '_blank');
    });
});

        // Scroll suave al pulsar "Proyectos"
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

    });
});
