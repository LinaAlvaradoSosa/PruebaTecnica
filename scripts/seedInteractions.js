const db = require('../db/db');

async function seedInteractions() {
    const types = ['view', 'click', 'purchase'];

    for (let i = 0; i < 30; i++) {
        const clientId = Math.ceil(Math.random() * 20);
        const productId = Math.ceil(Math.random() * 15);
        const type = types[Math.floor(Math.random() * types.length)];
        const daysAgo = Math.floor(Math.random() * 30);
        const dateObj = new Date();
        dateObj.setDate(dateObj.getDate() - daysAgo);
        const date = dateObj.toISOString().split('T')[0];


        await new Promise((resolve, reject) => {
        db.run(
            `INSERT INTO interactions (clientId, productId, type, date) VALUES (?, ?, ?, ?)`,
            [clientId, productId, type, date],
            (err) => {
            if (err) {
                console.log('Error insertando interacción:', err.message);
                reject(err);
            } else {
                console.log(`Interacción: Cliente ${clientId} ${type} Producto ${productId} (${date})`);
                resolve();
            }
            }
        );
        });
    }

}

seedInteractions();
