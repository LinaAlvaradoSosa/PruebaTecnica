const axios = require('axios');

async function fetchClients() {
    const url = 'https://randomuser.me/api/?results=20'
    const response = await axios.get(url);
    const result = response.data.results;

    const clients = result.map ((user) => ({
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        city: user.location.city,
        registeredDate: user.registered.date.split('T')[0]
    }));

    return clients
    
    
}

module.exports = fetchClients;