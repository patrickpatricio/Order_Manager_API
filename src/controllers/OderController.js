const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
    try {
        const { numeroPedido, valorTotal, dataCriacao, items } = req.body;
        
        // Transformação de dados
        const mappedOrder = {
            orderId: numeroPedido,
            value: valorTotal,
            creationDate: dataCriacao,
            items: items.map(item => ({
                productId: Number(item.idItem),
                quantity: item.quantidadeltem,
                price: item.valorltem
            }))
        };

        const newOrder = await Order.create(mappedOrder);
        res.status(201).json(newOrder);
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