import express from 'express';
import path from 'path';
import socketio from 'socket.io';
import http from 'http';
import 'dotenv/config';
import {getTransactions, saveTransaction} from './controllers/transactionsController';
import {transactionExist} from './middlewares/transactionExistMid';
import {findBalance} from './utils/findBalance';
import {transactionSchemaValidator} from './middlewares/transactionSchemaValidator'

import './database/models';
const BASE_URL = process.env.BASE_URL;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../public')));
app.get('/', (_,res)=> {
    return res.status(200).json({message: 'Welcome to IOT server 👏👏'});
})

const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (user)=> {
    io.emit('welcome',{message:'let us get started'})
})

app.get(`${BASE_URL}/transactions`, async(_,res) => {
    let transactions = await getTransactions();
    return res.status(200).json(transactions)
})

app.post(`${BASE_URL}/transactions`, transactionSchemaValidator,async(req,res) => {
   const {initialBalance, transiportFare} = req.body;
   let balance = await findBalance(initialBalance, transiportFare);
   console.log("my balance: "+balance)
   req.body.balance = balance;
   let transaction = await saveTransaction(req.body);
   if(!transaction)
     return res.status(400).json({message: 'Transaction not saved!'});

    io.emit('DATA_ADDED', transaction); 
    return res.status(201).json({
        message: 'Transaction saved!',
        data: transaction
    })
})


const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log("IOT server 🏃🏃🏃 on port "+PORT))