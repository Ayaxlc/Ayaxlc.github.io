document.addEventListener("DOMContentLoaded", () => {

    const switchDark = document.getElementById("darkSwitch");

    // Cargar preferencia
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        switchDark.checked = true;
    }

    switchDark.addEventListener("change", () => {
        document.body.classList.toggle("dark");

        localStorage.setItem(
            "theme",
            document.body.classList.contains("dark") ? "dark" : "light"
        );
    });

    // Botones credencial
    document.querySelectorAll(".btn-credential").forEach(btn => {
        btn.addEventListener("click", () => {
            window.open(btn.dataset.url, "_blank");
        });
    });
});
