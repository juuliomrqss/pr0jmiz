// script.js
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio do formulário

    // Captura os valores dos campos de login
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Captura o valor do setor selecionado
    const setorSelecionado = document.querySelector('input[name="selecionar"]:checked');

    // Validação básica de login
    if (email === '1' && password === '1') {
        if (setorSelecionado) {
            const setor = setorSelecionado.id; // Obtém o id do botão de rádio selecionado

            // Redireciona para a página de acordo com o setor
            switch (setor) {
                case 'botao1':
                    window.location.href = './routes/mecanica.html';
                    break;
                case 'botao2':
                    window.location.href = './routes/eletrica.html';
                    break;
                case 'botao3':
                    window.location.href = './routes/producao.html';
                    break;
                default:
                    alert('Por favor, selecione um setor!');
                    break;
            }
        } else {
            alert('Por favor, selecione um setor!');
        }
    } else {
        alert('Email ou senha inválidos!');
    }
});
