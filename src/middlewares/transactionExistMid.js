import Transaction from '../database/models/transactions.model';

const transactionExist = async(req, res, next) => {
    const {transactionId} = req.params;
    if(!transactionId)
      return res.status(404).json({message: 'Transaction not found'});
    try{
       let transaction = Transaction.findOne({_id: transactionId});
       if(!transaction)
         return res.status(404).json({message: 'Transaction not found'});
       req.transactionData = transaction;
    }
    catch(e){
      return res.status(400).json({error: e});
    }   
    next();
}

export {transactionExist};