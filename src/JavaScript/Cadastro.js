document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    if (!name || !email || !password) {
        alert("Por favor, preencha todos os campos.");
        errorMessage.textContent = "Por favor, preencha todos os campos.";
        errorMessage.style.display = "block";
        return;
    }

    errorMessage.styule.display = "none";
    alert("Cadastro realizado com sucesso!");

    window.location.href = "Home.html";
});