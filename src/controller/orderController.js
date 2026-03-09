const Order = require('../models/order');

exports.createOrder = async (req, res) => {
    try {
        const { numeroPedido, valorTotal, dataCriacao, items } = req.body;
        
        // Transformação de dados/mapping
        const mappedOrder = {
            orderId: numeroPedido,
            value: valorTotal,
            creationDate: dataCriacao,
            items: items.map(item => ({
                productId: Number(item.idItem),
                quantity: item.quantidadeItem,
                price: item.valorItem
}))
        };

        const newOrder = await Order.create(mappedOrder);
        res.status(201).json(newOrder);
        //Tratamento de erro
    } catch (error) {
        res.status(400).json({ error: "Erro ao criar pedido", details: error.message });
    }
};

exports.getOrderById = async (req, res) => {
    try {
        const order = await Order.findOne({ orderId: req.params.orderId });
        if (!order) return res.status(404).json({ message: "Pedido não encontrado" });
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateOrder = async (req, res) => {
    try {
        const updatedOrder = await Order.findOneAndUpdate(
            { orderId: req.params.orderId },
            req.body,
            { new: true }
        );
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        await Order.findOneAndDelete({ orderId: req.params.orderId });
        res.status(200).json({ message: "Pedido removido" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};