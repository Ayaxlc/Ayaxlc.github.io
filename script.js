document.addEventListener("DOMContentLoaded", () => {

    const switchDark = document.getElementById("darkSwitch");

    // Cargar estado guardado
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        switchDark.checked = true;
    }

    // Cambiar al pulsar
    switchDark.addEventListener("change", () => {
        if (switchDark.checked) {
            document.body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    });

    // Botones de credenciales
    document.querySelectorAll(".btn-credential").forEach(btn => {
        btn.addEventListener("click", () => {
            window.open(btn.dataset.url, "_blank");
        });
    });
});
