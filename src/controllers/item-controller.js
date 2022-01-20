'use strict';

const firebase = require('../db');
const Item = require('../models/item');
const firestore = firebase.firestore();

const addItem = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('items').doc().set(data);
        res.send('Record saved Successfuly!');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllItems = async (req, res, next) => {
    try {
        const items = await firestore.collection('items')
        const data = await items.get();
        const itemsArray = [];
        if(data.empty) {
            res.status(404).send('No items record found');
        }else {
            data.forEach(doc => {
                const item = new Item(
                    doc.id,
                    doc.data().name,
                    doc.data().category,
                    doc.data().price
                );
                itemsArray.push(item);
            });
            res.send(itemsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getItem = async (req, res, next) => {
    try {
        const id = req.params.id;
        const item = await firestore.collection('items').doc(id);
        const data = await item.get();
        if(!data.exists){
            res.status(404).send('Item not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(404).send(error.message)
    }
}

const updateItem = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const item = await firestore.collection('items').doc(id);
        await item.update(data);
        res.send('Item record updated successfuly');
    } catch (error) {
        res.status(404).send(error.message);
    }
}

const deleteItem = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('items').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(404).send(error.message);
    }
}

module.exports = {
    addItem,
    getAllItems,
    getItem,
    updateItem,
    deleteItem
}