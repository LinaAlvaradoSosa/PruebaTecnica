const db = require('../db/db')

exports.getMostActiveClient = (callback) => {
    const query = `
    SELECT clients.*, COUNT(interactions.id) AS interactionCount
    FROM clients 
    JOIN interactions ON clients.id = interactions.clientId
    GROUP BY clients.id
    ORDER BY interactionCount DESC
    LIMIT 1
    
    `
    db.get(query,[],callback)
}

exports.getMostViewedProduct = (callback) => {
    const query = `
    SELECT books.*, COUNT(interactions.id) AS viewCount
    FROM books 
    JOIN interactions ON books.id = interactions.productId
    WHERE interactions.type = 'view'
    GROUP BY books.id
    ORDER BY viewCount DESC
    LIMIT 1 
    `

    db.get(query, [], callback)

}