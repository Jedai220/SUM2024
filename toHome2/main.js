import express from "express";
import http from "node:http";
import { WebSocketServer } from "ws";

const app = express();
app.use(express.static("client"));
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  
});

const port = "3047",
  host = "localhost";
server.listen(port, host, () => {
  console.log(`Server started: ${host}:${port}`);
});
