const FetchClients = require('../scraper/clientSeeder')
const db = require('../db/db')

async function seedClients() {
    
    const clients = await FetchClients()
    console.log(`Se obtuvieron ${clients.length} clientes`);

    clients.forEach((client) => {
        db.run(
            `INSERT INTO clients (name, email, city, registeredDate) VALUES (?, ?, ?, ?)`,
            [client.name, client.email, client.city, client.registeredDate],
            (err) => {
            if (err) {
                console.error('Error insertando cliente:', err.message);
            } else {
                console.log(`Guardado: ${client.name}`);
            }
            }
        );
    }); 
}

seedClients();