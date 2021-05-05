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

const updateTransaction = async(_req) => {
    let query = {
        _id: _req.transactionData._id
    }
    try{
       let udpatedTrans = await Transaction.findOneAndUpdate(query, _req.body);
       if(!udpatedTrans)
         return false;
       return udpatedTrans;
    }
    catch(e){
       return false;
    }
}

const removeTransaction  = async(req) => {
    try{

    }
    catch(e){

    }
}
export {saveTransaction, getTransactions, updateTransaction};