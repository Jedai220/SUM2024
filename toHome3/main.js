import express from "express";
import http from "node:http";
import { WebSocketServer } from "ws";

const app = express();
app.use(express.static("client"));
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  ws.on("message", (msg) => {
    for (let client of wss.clients) {
      client.send(msg.toString());
    }
  });
});

const port = "8080",
  host = "localhost";
server.listen(port, host, () => {
  console.log(`Server started: ${host}:${port}`);
});
