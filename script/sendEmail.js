document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("Ppcpp4zWaBGo_87Lz");

    document.getElementById("form-contact").addEventListener("submit", function (event) {
        if (!this.checkValidity()) {
            return;
        }
        event.preventDefault(); 

        let params = {
            to_name: "Territorio Espiral",
            from_name: document.getElementById("from_name").value,
            from_email: document.getElementById("from_email").value,
            message: document.getElementById("message").value
        };

        emailjs.send("service_e1ezcnk", "template_hq542jr", params)
            .then((response) => {
                console.log("Correo enviado con éxito:", response);
                alert("Mensaje enviado correctamente");
                this.reset();
            })
            .catch((error) => {
                console.error("Error al enviar el correo:", error);
                alert("Hubo un error al enviar el mensaje");
            });
    });
});