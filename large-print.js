document.addEventListener("DOMContentLoaded", function () {

    // Create the button
    const button = document.createElement("button");
    button.id = "largePrintButton";
    button.textContent = "Large Print";

    // Add button to page
    document.body.appendChild(button);

    // Toggle large print mode
    button.addEventListener("click", function () {

        document.body.classList.toggle("large-print");

        if (document.body.classList.contains("large-print")) {
            button.textContent = "Regular Print";
        } else {
            button.textContent = "Large Print";
        }

    });

});