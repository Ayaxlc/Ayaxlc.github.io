document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggleTheme");

    // Cargar preferencia
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        toggleBtn.textContent = "☀️ Light";
    }

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            toggleBtn.textContent = "☀️ Light";
        } else {
            localStorage.setItem("theme", "light");
            toggleBtn.textContent = "🌙 Dark";
        }
    });

    // Certificaciones
    document.querySelectorAll(".btn-credential").forEach(btn => {
        btn.addEventListener("click", () => {
            window.open(btn.dataset.url, "_blank");
        });
    });
});
