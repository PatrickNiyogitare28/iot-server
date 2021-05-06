import mongoose from 'mongoose';

const transactionsSchema = mongoose.Schema({
      uuid:{
          type: String,
          required: true
      },
      initialBalance: {
          type: String,
          require: true
      },
      transiportFare: {
          type: String,
          require: true
      },
      balance:{
          type: String,
          required: true
      },
      createdAt: {
          type: Date,
          default: new Date()
      }
});

const Transaction = mongoose.model('Transaction', transactionsSchema);
module.exports = Transaction;