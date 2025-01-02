document.getElementById('form-cadastro-container').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nomeContainer = document.getElementById('nome-container').value;
    const material = document.getElementById('material').value;
    const localizacao = document.getElementById('localizacao').value;

    const container = {
        nome: nomeContainer,
        material: material,
        localizacao: localizacao
    };

    // Adiciona o contêiner a uma lista
    const listaContainer = document.getElementById('lista-container');
    const listItem = document.createElement('li');
    listItem.textContent = `${container.nome} - Material: ${container.material} - Localização: ${container.localizacao}`;
    listaContainer.appendChild(listItem);

    // Limpa o formulário
    document.getElementById('form-cadastro-container').reset();

    // Exibe a mensagem de sucesso
    document.getElementById('mensagem-sucesso').style.display = 'block';
    setTimeout(() => {
        document.getElementById('mensagem-sucesso').style.display = 'none';
    }, 3000);
});
