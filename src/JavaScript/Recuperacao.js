document.getElementById("RecuperacaoForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("check seu email!")
    const email = document.getElementById("email").value.trim();
    const errorMessage = document.getElementById("error-message");
});
