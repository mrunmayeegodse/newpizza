//step1: include mongoose
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
//step2 : create a collection using schema
//mongoose allows us to work with collection as an object
//it act as an ORM
//new schema ({attributes in document},{name of collection})
let Pizza=new Schema({
    pizzaId:          {type:Number},
    pizzaName:        {type:String},
    price:    {type:Number}
},
{
    collection:'pizza'
});
module.exports=mongoose.model('Pizza',Pizza);