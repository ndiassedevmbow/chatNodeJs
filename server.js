const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
  console.log('User connected');

  // Envoyer un message de bienvenue à un nouvel utilisateur
  socket.emit('chat-message', 'Bienvenue sur le chat !');

  // Gérer la déconnexion de l'utilisateur
  socket.on('disconnect', () => {
    console.log('User disconnected');
    io.emit('user-disconnected', socket.id); // Informer tous les utilisateurs de la déconnexion
  });

  // Recevoir et relayer les messages du chat
  socket.on('chat-message', (message) => {
    io.emit('chat-message', message); // Transmettre le message à tous les utilisateurs
  });
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log(`Server is listening on *:${PORT}`);
});
