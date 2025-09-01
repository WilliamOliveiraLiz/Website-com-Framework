document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const errorMessage = document.getElementById("error-message");

        const validEmail = "admin@gmail.com";
        const validPassword = "senha123";

        if (email === validEmail && password === validPassword) {
            window.location.href = "Iniciar.html";
        } else {
            errorMessage.textContent = "E-mail ou senha incorretos.";
            errorMessage.style.display = "block";
            return;
        }

        errorMessage.style.display = "none";
    });
});
