const form = document.getElementById("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefone = document.getElementById("telefone").value.trim();
    let data = document.getElementById("data_nascimento").value;

    let erro = false;

    if (nome === "") {
        alert("Nome é obrigatório");
        erro = true;
    }

    if (data === "") {
        alert("Data de nascimento é obrigatória");
        erro = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Email inválido");
        erro = true;
    }

    const telRegex = /^\d{10,11}$/;
    const telefoneLimpo = telefone.replace(/\D/g, "");

    if (!telRegex.test(telefoneLimpo)) {
        alert("Telefone inválido");
        erro = true;
    }

    if (!erro) {
        alert("Cadastro enviado com sucesso!");
        form.submit();
    }
});