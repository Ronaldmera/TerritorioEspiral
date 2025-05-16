document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("Ppcpp4zWaBGo_87Lz");

    const form = document.getElementById("form-contact");
    const modal = new bootstrap.Modal(document.getElementById("formModal"));
    const modalTitle = document.querySelector("#formModal .modal-title");
    const modalMessage = document.getElementById("modalMessage");

    form.addEventListener("submit", function (event) {
        if (!this.checkValidity()) return;

        event.preventDefault(); 

        const params = {
            to_name: "Territorio Espiral",
            from_name: document.getElementById("from_name").value,
            from_email: document.getElementById("from_email").value,
            message: document.getElementById("message").value
        };

        emailjs.send("service_e1ezcnk", "template_hq542jr", params)
            .then((response) => {
                modalTitle.textContent = "¡Mensaje enviado!";
                modalMessage.textContent = "Tu mensaje ha sido enviado correctamente.";
                modal.show();
                form.reset();
            })
            .catch((error) => {
                modalTitle.textContent = "Error al enviar";
                modalMessage.textContent = "Hubo un error al enviar el mensaje. Inténtalo más tarde.";
                modal.show();
            });
    });
});
