window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    } else {
        header.style.boxShadow = "none";
    }
});