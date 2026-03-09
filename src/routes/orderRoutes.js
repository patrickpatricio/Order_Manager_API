const express = require('express');
const router = express.Router();
const orderController = require('../controller/orderController');
// Criar um novo pedido: http://localhost:3000/order
router.post('/', orderController.createOrder);
// Obter dados de um pedido pelo número: http://localhost:3000/order/:orderId
router.get('/:orderId', orderController.getOrderById);
// Listar todos os pedidos: http://localhost:3000/order/list
router.get('/list', orderController.getAllOrders);
// Atualizar um pedido pelo número: http://localhost:3000/order/:orderId
router.put('/:orderId', orderController.updateOrder);
// Deletar um pedido pelo número: http://localhost:3000/order/:orderId
router.delete('/:orderId', orderController.deleteOrder);
module.exports = router;