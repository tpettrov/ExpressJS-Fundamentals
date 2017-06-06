/**
 * Created by Toni on 6/1/2017.
 */

const Category = require('../models/category')


module.exports.addGet = (req, res) => {

    res.render('category/add')
}

module.exports.addPost = (req, res) => {

    let category = req.body


    Category.create(category).then(() => {
        res.redirect('/')
    })
}

module.exports.productByCategory = (req, res) => {

    let categoryName = req.params.category

    Category.findOne({name: categoryName}).populate('products')
        .then((category) => {

        if (!category) {

            res.sendStatus(404)
            return
        }
        res.render('category/products', {category: category})
        })

    }
