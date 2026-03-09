 const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    // Mapeado de idItem 
    productId: { type: Number, required: true }, 
    // Mapeado de quantidadeItem 
    quantity: { type: Number, required: true },  
      // Mapeado de valorItem 
    price: { type: Number, required: true }     
});

const OrderSchema = new mongoose.Schema({
    //  Modelagem do campo numero do pedido 
    orderId: { type: String, required: true, unique: true }, 
     // Modelagem do campo valor total 
    value: { type: Number, required: true },  
     // Modelagem do campo data de criação               
    creationDate: { type: Date, default: Date.now },          
    items: [ItemSchema]
}, { versionKey: '__v' });

module.exports = mongoose.model('Order', OrderSchema);