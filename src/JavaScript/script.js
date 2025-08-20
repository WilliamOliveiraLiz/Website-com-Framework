document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Exemplo de validação (fixo só para demonstração)
    if (user === "admin" && pass === "1234") {
        alert("Login realizado com sucesso!");
        window.location.href = "home.html"; // redireciona para outra página
    } else {
        errorMessage.textContent = "Usuário ou senha inválidos!";
    }
});
