document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementsById("name").value.trim();
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    if (name != name.isEmpty() && user != user.isEmpty() && pass != pass.isEmpty) {
        alert("Cadastro realizado com sucesso!");
        window.location.href = "Login.html";
    } else {
        errorMessage.textContent = "Os campos não devem ficar vazios!";
    }
});