import * as Joi from 'joi';

const transactionSchemaValidator  = async(req,res,next) => {
const schema = Joi.object({
    uuid: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
   
    initialBalance: Joi.string().regex(/^\d+$/,'valid value for initialBalance') 
        .alphanum()
        .min(1)
        .max(30)
        .required(),
    transiportFare: Joi.string().regex(/^\d+$/, 'valid value for transiportFare') 
        .min(1)
        .max(30)
        .required()
})

const error = schema.validate(req.body).error;
if(error)
  return res.status(400).json({message: error.details[0].message});

const valuesAreValid = await validValues(req);
if(!valuesAreValid)
  return res.status(400).json({message: 'insufficient balance'});
 next();
}

const validValues = async(req) => {
    const {initialBalance, transiportFare} = req.body;
    if(parseFloat(transiportFare) > parseFloat(initialBalance))
      return false;
    return true;  
}
export {transactionSchemaValidator};