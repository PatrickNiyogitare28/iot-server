import Transaction from '../database/models/transactions.model';

const saveTransaction = async(payload) => {
    try{
      let newTransaction = await Transaction(payload);
      if(!newTransaction)
         return false;
       newTransaction.save();  
       return newTransaction;  
    }
    catch{
      return false;
    }
}

const getTransactions = async() => {
    return await Transaction.find();
}


export {saveTransaction, getTransactions};