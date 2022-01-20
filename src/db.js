const firebase = require('firebase-admin');
const config = require('../src/config');

const db = firebase.initializeApp(config.firebaseConfig);
module.exports = db;