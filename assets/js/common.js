document.addEventListener("DOMContentLoaded", function () {

    // Load Header
    fetch("common/header/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });

    // Load Footer
    fetch("common/footer/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });

});
