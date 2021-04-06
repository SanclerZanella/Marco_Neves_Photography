let contactForm = document.getElementById("contactForm");
let submitButton = document.querySelectorAll('[type = "submit"]');

submitButton[0].addEventListener("click", function () {
    let requiredFields = document.querySelectorAll('[required]');
    let warningMessage = document.getElementsByClassName("warning-msg");
    let contactForm = document.getElementById("contactForm");

    for (let field of requiredFields) {
        if (field.value === "") {
            field.style.borderColor = "red";
            for (let warningField of warningMessage) {
                warningField.innerText = "* CAMPO OBRIGATÓRIO *";
            }
        } else if (field.value !== "") {
            contactForm.setAttribute("data-netlify", "true");
        }
    }
})


