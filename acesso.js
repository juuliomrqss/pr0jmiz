 // Script para exibir a mensagem de sucesso
 const form = document.getElementById('solicitacaoForm');
 const sucessoMensagem = document.getElementById('sucessoMensagem');

 form.addEventListener('submit', function(event) {
     event.preventDefault(); // Evita o envio real do formulário para simular o sucesso

     // Aqui você pode adicionar a lógica para enviar o formulário para o servidor via AJAX

     // Exibe a mensagem de sucesso
     sucessoMensagem.style.display = 'block';

     // Esconde o formulário após 2 segundos
     setTimeout(() => {
         sucessoMensagem.style.display = 'none';
         form.reset(); // Limpa os campos do formulário
     }, 3000); // Mensagem de sucesso será exibida por 3 segundos
 });