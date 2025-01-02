const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
})
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form-cadastro");
    const mensagemSucesso = document.getElementById("mensagem-sucesso");

    // Adiciona um ouvinte para o evento de submit do formulário
    form.addEventListener("submit", function(event) {
        event.preventDefault();  // Impede o envio do formulário (sem recarregar a página)

        // Validação (pode ser feita aqui se necessário)
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;
        const confirmarSenha = document.getElementById("confirmar-senha").value;

        if (senha !== confirmarSenha) {
            alert("As senhas não coincidem!");
            return;
        }

        // Simulação de um processo de cadastro (por exemplo, enviando para o servidor)
        setTimeout(function() {
            // Exibe a mensagem de sucesso
            mensagemSucesso.style.display = "block";

            // Esconde a mensagem após 5 segundos
            setTimeout(function() {
                mensagemSucesso.style.display = "none";
            }, 5000);
        }, 1000);  // Simula um delay de 1 segundo (como se estivesse enviando para o servidor)
    });
});
