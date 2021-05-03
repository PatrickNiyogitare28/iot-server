import express from 'express';
import path from 'path';
import socketio from 'socket.io';
import http from 'http';
import 'dotenv/config';

import './database/models';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, './public')));
app.use('/', (_,res)=> {
    return res.status(200).json({message: 'Welcome to IOT server 👏👏'});
})

const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log("IOT server 🏃🏃🏃 on port "+PORT))