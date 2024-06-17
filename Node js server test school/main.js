import express from "express";
import http from "node:http";
import { WebSocketServer } from "ws";
import $ from "jquery";
let allMessageArray = new Array();
const port = 8000,
  host = "localhost";
const app = express();
app.use(express.static("client"));
const server = http.createServer(app);
let userCount = 0;
let messageCount = 0;
let messageArray = new Array();

// console.log(JSON.parse(msg.toString()));
// client.send(msg.toString());


const wss = new WebSocketServer({ server });
wss.on("connection", (ws) => {

  for (let index = 0; index < messageCount; index++) {
    // let fullMessage = messageArrayindex].split(" __________ ");
    // $("#message_wrapper").append(`<div class="message"><p class="userTo">${fullMessage[0]}</p><p class="messageTo{fullMessage[1]}</p> <br><br><br>`);
    ws.send(messageArray[index]);
  }

  ws.on("message", (msg) => {
    if (msg.toString() == 'clear __________  clear') {
        messageArray.length = 0;
        messageCount = 0;
        ws.send("__ADMIN: CLEAR ALL CHAT");
        return;
    }

    messageArray[messageCount++] = msg.toString();   
    for (let client of wss.clients) {
      // client.send(`I LOVE SOCKET AND YOU TO BECAUSE I FEEL WEBSOCKET IN MY USEFOOL HEAD${allMessageArray.length}`);
      if (typeof msg != 'undefined')
        client.send(msg.toString());
    } 
  });
});

server.listen(port, host, () => {
  console.log("Server started");
});
