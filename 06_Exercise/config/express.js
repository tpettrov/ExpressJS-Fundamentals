/**
 * Created by Toni on 6/7/2017.
 */
const path = require('path')
const express = require('express')

module.exports = (app, config) => {

    app.set('view engine', 'pug')
    app.set('views', path.normalize(path.join(config.rootPath, 'views')))

    app.use('/public', express.static(path.normalize(path.join(__dirname, '../public'))))

}