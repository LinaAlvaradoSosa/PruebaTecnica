const db = require('../db/db')

exports.getAllProducts = (callback) => {
    db.all('SELECT * FROM books', [], callback)
}

exports.getProductById = (id, callback) =>{
    db.get('SELECT * FROM books WHERE id = ?', [id], callback)
}


