
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const showBtn = document.getElementById("show-popup");
    const closeBtn = document.getElementById("close-popup");

    showBtn.addEventListener("click", function () {
        popup.style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

    window.addEventListener("click", function (e) {
        if (e.target === popup) {
        popup.style.display = "none";
        }
    });
});
