const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./books.db', (err) => {
    if (err) {
        console.error('Error al abrir la base de datos', err.message)
    } else {
        console.log('Conexión a SQLite establecida')
    }
})

    db.serialize(() => {
        db.run(`
            CREATE TABLE IF NOT EXISTS books (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            price TEXT,
            availability TEXT,
            image TEXT,
            rating TEXT
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS clients (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            city TEXT,
            registeredDate TEXT
        )
    `);
    
    db.run (`
        CREATE TABLE IF NOT EXISTS interactions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            clientId INTEGER,
            productId INTEGER, 
            type TEXT,
            date TEXT 
        )
    `)
    

})


    





module.exports = db