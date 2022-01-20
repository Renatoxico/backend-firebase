const express = require('express');
const { route } = require('.');
const {addItem, getAllItems, getItem, deleteItem, updateItem} = require('../controllers/item-controller');

const router = express.Router();

router.post('/item', addItem);
router.get('/items', getAllItems);
router.get('/item/:id', getItem);
router.put('/item/:id', updateItem);
router.delete('/item/:id', deleteItem);

module.exports = {
    routes: router
}