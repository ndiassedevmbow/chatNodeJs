document.addEventListener('DOMContentLoaded', () => {
  const socket = io();

  // Envoyer un message au serveur
  const sendMessage = () => {
    const messageInput = document.getElementById('message');
    const message = messageInput.value;
    if (message) {
      socket.emit('chat-message', message);
      messageInput.value = '';
    }
  };

  // Recevoir un message du serveur et l'afficher
  socket.on('chat-message', (message) => {
    const messages = document.getElementById('messages');
    const li = document.createElement('li');
    li.textContent = message;
    messages.appendChild(li);
  });

  // Gérer l'envoi de messages via le bouton "Envoyer"
  const sendButton = document.querySelector('button');
  sendButton.addEventListener('click', sendMessage);

  // Gérer l'envoi de messages en appuyant sur la touche "Enter"
  const messageInput = document.getElementById('message');
  messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
});
