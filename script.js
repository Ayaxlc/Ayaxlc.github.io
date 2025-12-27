document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("themeToggle");

    // Cargar preferencia guardada
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        toggle.checked = true;
    }

    // Cambiar tema al pulsar
    toggle.addEventListener("change", () => {
        if (toggle.checked) {
            document.body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    });

    // Botones credenciales
    document.querySelectorAll(".btn-credential").forEach(btn => {
        btn.addEventListener("click", () => {
            window.open(btn.dataset.url, "_blank");
        });
    });
});
