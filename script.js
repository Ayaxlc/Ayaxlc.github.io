document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("themeToggle");
    const body = document.body;

    // Cargar preferencia guardada
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
        body.classList.add("light-mode");
        toggleBtn.textContent = "☀️ Light";
    }

    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("light-mode");

        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            toggleBtn.textContent = "☀️ Light";
        } else {
            localStorage.setItem("theme", "dark");
            toggleBtn.textContent = "🌙 Dark";
        }
    });
});
