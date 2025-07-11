const db = require('../db/db');

exports.getAllInteractions = (callback) => {
    db.all(`
        SELECT interactions.*, clients.name AS clientName, books.title AS productTitle
        FROM interactions
        LEFT JOIN clients ON interactions.clientId = clients.id
        LEFT JOIN books ON interactions.productId = books.id
    `, [], callback);
};