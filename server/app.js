const express = require('express');
const app = express();

const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors');

const router = require('./routes/user');
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', router);

const scorePlayer = [
  {
    score: null,
    name: null
  },
  {
    score: null,
    name: null
  }
];

var players = [];
let opponent = null;

io.on('connection', function(socket) {
  console.log('a user connected');

  socket.on('playerName', name => {
    players.push(name);
    console.log(name, '< ini name playerName');
    if (players.length == 1) {
      console.log('masuk sini');
      console.log(name, '< 1');
      console.log(players, '< playernysa');
      opponent = players[0];
      // io.emit('playerOne', players);
    } else if (players.length == 2) {
      console.log('masuk dua');
      console.log(name, '< 2');

      io.emit('playerTwo', players);
      // io.broadcast.emit('playerTwo',players[1])
    } else {
      return;
    }
  });

  console.log(players, '< ini players');

  socket.on('score', score => {
    console.log(score, '<');
    io.emit('sendScore', score);
  });
  socket.on('disconnect', function(tes) {
    players.pop();
    console.log('user disconnected');
  });
});

http.listen(port, () => console.log(`Listening on port ${port}!`));

// const connections = [null, null];

// Handle a socket connection request from web client
// io.on('connection', function(socket) {
//   // Find an available player number
//   let playerIndex = -1;
//   for (var i in connections) {
//     if (connections[i] === null) {
//       playerIndex = i;
//       console.log({ i, playerIndex }, 'dalem');
//     }
//   }
//   // console.log({ connections });
//   console.log({ playerIndex }, 'luar');

//   // Tell the connecting client what player number they are
//   io.emit('player-number', playerIndex);

//   // Ignore player 3
//   if (playerIndex == -1) return;

//   connections[playerIndex] = socket;

//   // Tell everyone else what player number just connected
//   socket.broadcast.emit('player-connect', playerIndex);
//   socket.on('score', function(data) {
//     const { name, tepok } = data; // Get grid and metadata properties from client
//     console.log(data, '< server data');
//     const player = {
//       name,
//       tepok,
//       playerIndex
//     };

//     // Emit the move to all other clients
//     // socket.broadcast.emit('opponent', player);
//   });

//   socket.on('disconnect', function() {
//     console.log(`Player ${playerIndex} Disconnected`);
//     connections[playerIndex] = null;
//   });
// });
