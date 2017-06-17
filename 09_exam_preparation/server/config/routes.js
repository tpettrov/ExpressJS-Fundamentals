const controllers = require('../controllers')
const auth = require('./auth')

module.exports = (app) => {
  app.get('/', controllers.home.index)
  app.get('/about', auth.isAuthenticated, controllers.home.about)

  app.get('/users/register', controllers.users.registerGet)
  app.post('/users/register', controllers.users.registerPost)
  app.get('/users/login', controllers.users.loginGet)
  app.post('/users/login', controllers.users.loginPost)
  app.post('/users/logout', controllers.users.logout)

  app.get('/thread/add', auth.isAuthenticated, controllers.thread.addGet)
  app.post('/thread/add', auth.isAuthenticated, controllers.thread.addPost)

    app.get('/answer/edit/', auth.isInRole('Admin'), controllers.answers.editGet)
    app.post('/answer/edit/:id', auth.isInRole('Admin'), controllers.answers.editPost)

    app.post('/answer/delete/:id/:threadId', auth.isInRole('Admin'), controllers.answers.deletePost)

  app.get('/thread/edit/', auth.isInRole('Admin'), controllers.thread.editGet)
  app.post('/thread/edit/:id', auth.isInRole('Admin'), controllers.thread.editPost)

  app.get('/thread/', auth.isAuthenticated, controllers.thread.getDetails)

  app.post('/thread/addanswer/:id', auth.isAuthenticated, controllers.thread.addAnswerPost)

  app.get('/profile/:username', auth.isAuthenticated, controllers.users.loadInfo)

  app.all('*', (req, res) => {
    res.status(404)
    res.send('404 Not Found!')
    res.end()
  })
}
