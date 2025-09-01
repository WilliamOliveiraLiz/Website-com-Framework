document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    if (!name || !email || !password) {
        errorMessage.textContent = "Por favor, preencha todos os campos.";
        errorMessage.style.display = "block";
        return;
    }

    errorMessage.style.display = "none";
    window.location.href = "Login.html";
});