document.getElementById("recuperacaoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const errorMessage = document.getElementById("error-message");
    const verifyMessage = document.getElementById("verify-message");

    if (!email) {
        errorMessage.textContent = "Por favor, informe o e-mail.";
        errorMessage.style.display = "block";
        return;
    } else {
        errorMessage.style.display = "none";
        verifyMessage.style.display = "block";
        verifyMessage.textContent = "Verifique seu email!";

    }

});
