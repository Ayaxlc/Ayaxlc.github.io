// Esperar a que cargue todo el HTML
document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       BOTONES DE CREDENCIAL
    ========================== */
    document.querySelectorAll(".btn-credential").forEach(button => {
        button.addEventListener("click", () => {
            const url = button.dataset.url;
            window.open(url, "_blank");
        });
    });

    /* ==========================
       SCROLL SUAVE
    ========================== */
    document.querySelectorAll('a[href^="#"]').forEach(enlace => {
        enlace.addEventListener("click", function (e) {
            e.preventDefault();
            const destino = document.querySelector(this.getAttribute("href"));
            if (destino) {
                destino.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

});
