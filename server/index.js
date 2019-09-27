const express = require('express')
const app = express()
const products = require('./products.json.js')
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')



app.get('/api/products', getProducts)

app.get('/api/product/:id', getProduct)


app.listen(4949, () => console.log("server running on port 4949"))