const products = require('./products.json.js')

const getProduct = (req, res) => {
    // find returns the item if it finds it, or undefined if not
    const item = products.find(val => val.id === parseInt(req.params.id));
    if (!item) {
        return res.status(500).send("Item not in list");
    }
    res.status(200).send(item);
}

// const getProduct = (req, res) => {
//     const {id} = req.params;
//     let selectedProduct = products.find(function (element) {
//         return element.id === +id
//     })
//     if( element.id === +id ){
//     res.status(200).send(selectedProduct)
//     } else {
//         res.status(500).send("Item not in list")
//     }
// }

module.exports = getProduct;



