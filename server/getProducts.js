const products = require('./products.json.js')

const getProducts = (req, res) => {
    console.log(req.query.price)
    if (req.query.price) {
        const items = products.filter(val => val.price >= +req.query.price)
        return res.status(200).send(items)
    } 
    res.status(200).send(products)   
}

module.exports = getProducts