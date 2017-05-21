/**
 * Created by Toni on 5/21/2017.
 */
let products = [];
let count = 1;

module.exports.products = {}

module.exports.products.getAll = () => {
    return products
}

module.exports.products.add = (product) => {

    product.id = count++
    products.push(product)
}

module.exports.products.findByName = (name) => {

    let product = null
    for (let p of products) {

        if (p === name ) {

            return p
        }
    }

    return product

}