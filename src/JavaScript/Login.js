document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    const validEmail = "email";
    const validPassword = "password";

    if (email === validEmail && password === validPassword) {
        alert("Login bem-sucedido!");
        // window.location.href = "Home.html";
    } else {
        alert("E-mail ou senha incorretos.");
        errorMessage.textContent = "E-mail ou senha incorretos.";
        errorMessage.style.display = "block";
    }

    // window.location.href = "Home.html";
});