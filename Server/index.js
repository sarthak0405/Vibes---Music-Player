const http = require("http");
const express = require("express");
const cors = require("cors");
const app = express();
const socketIO = require("socket.io");

const users = [{}];
app.use(cors()); //for communication between url ports...3000 to 4500

app.get("/", (req, res) => {
  res.send("its working"); //to get things and display it on browser port
});

const server = http.createServer(app); //express ko call karke server banaya

const port = 4500 || process.env.PORT; //give it 4500 port to work or by default

const io = socketIO(server); //socket ko server mai dal diya

io.on("connection", (socket) => {
  // Use socket parameter provided by the callback
  console.log("New Connection");

  socket.on("joined", ({ user }) => {
    users[socket.id] = user;
    console.log(`${user} has joined`);
    socket.broadcast.emit("userJoined", {
      user: "admin",
      message: `${users[socket.id]} has joined`,
    });

    socket.on("message", ({ message, id }) => {
      io.emit("sendMessage", { user: users[id], message, id });
    });
    //broadcast means evryone except you will get the msg
    socket.emit("welcome", {
      user: "admin",
      message: `Welcome to the chat,${
        users[socket.id]
      }remember to keep your comments polite`,
    }); //msg from server to client
  });
  //pratyek socket la vegli id asnar
  //socket will be on every time a user connects
  //jb io ka circuit on ho jaye
  socket.on("disconnectEvent", () => {
    socket.broadcast.emit("leave", {
      user: "admin",
      message: `${users[socket.id]}left the chat`,
    });
    console.log("user Left the chat");
  });
});

server.listen(port, () => {
  console.log(`server is working on http://localhost:${port}`); //server chal raha hai kya dekhho
});
