const scrapeBooks = require('./scraper/booksScraper')
const db = require ('./db/db')


async function main() {
    const books = await scrapeBooks()
    console.log(`Encontrados ${books.length} libros`)
    console.log('Guardando en SQLite...')
    books.forEach((book) => {
        db.run(
            `INSERT INTO books (title, price, availability, image, rating) VALUES (?, ?, ?, ?, ?)`,
            [book.title, book.price, book.availability, book.image, book.rating],
            (err) => {
            if (err) {
                console.error('Error insertando:', err.message)
            } else {
                console.log(`Guardado: ${book.title}`)
            }
            }
        )
        })
}

main()