const axios = require ('axios');
const cheerio = require('cheerio')


async function scrapeBooks() {
    const url = 'https://books.toscrape.com/'
    const response = await axios.get(url)
    const $ = cheerio.load(response.data)

    const books = []

    $('.product_pod').each((i, el) => {
    const title = $(el).find('h3 a').attr('title')
    const price = $(el).find('.price_color').text()
    const availability = $(el).find('.instock').text().trim()
    const image = $(el).find('img').attr('src')
    const rating = $(el).find('p.star-rating').attr('class').split(' ')[1]

    books.push({
        title,
        price,
        availability,
        image: `https://books.toscrape.com/${image}`,
        rating
    })
})

    return books
}

module.exports = scrapeBooks

