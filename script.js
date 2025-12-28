document.addEventListener("DOMContentLoaded", () => {

    const darkSwitch = document.getElementById("darkSwitch");

    darkSwitch.addEventListener("change", () => {
        document.body.classList.toggle("dark", darkSwitch.checked);
    });

    document.querySelectorAll(".btn-credential").forEach(btn => {
        btn.addEventListener("click", () => {
            window.open(btn.dataset.url, "_blank");
        });
    });

});
