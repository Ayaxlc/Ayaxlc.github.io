// Esperar a que cargue todo el HTML
document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       DARK MODE TOGGLE
    =============================== */
    const darkSwitch = document.getElementById("darkSwitch");

    if (darkSwitch) {
        darkSwitch.addEventListener("change", () => {
            document.body.classList.toggle("dark", darkSwitch.checked);
        });
    }

    /* ===============================
       SCROLL SUAVE PARA ANCLAS
    =============================== */
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
