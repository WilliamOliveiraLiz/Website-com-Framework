document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    const validEmail = "email";
    const validPassword = "password";

    if (email === validEmail && password === validPassword) {
        alert("Login bem-sucedido!");
        // window.location.href = "Home.html";
    } else {
        alert("Nome de usuário ou senha incorretos.");
        errorMessage.style.display = "block";
    }
});