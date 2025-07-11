const db = require('../db/db')

exports.getAllClients =(filters, callback) => {
    let query = 'SELECT * FROM clients'
    const params = []

    if(filters.city) {
        query += ' WHERE city = ?'
        params.push(filters.city)
    }
    if(filters.from && filters.to) {
        if(filters.city) {
            query += ' AND registeredDate BETWEEN ? AND ?';
        }else {
            query += ' WHERE registeredDate BETWEEN ? AND ?'
        }
        params.push(filters.from, filters.to)
    }
    db.all(query, params, callback)
};

exports.getClientById = (id, callback) => {
    db.get('SELECT * FROM clients WHERE id = ?', [id], callback)
}

exports.getInteractionsByClientId =(clientId, callback) => {
    db.all(
        `SELECT interactions.*, books.title AS productTitle
        FROM interactions
        LEFT JOIN books ON interactions.productId = books.id
        WHERE interactions.clientId = ?`,
        [clientId],
        callback
    )
    
}