'use strict'

const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const cors = require('cors')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.set('port', (process.env.PORT || 5000))

app.use(cors())
app.use(require('./routes/index.routes'))

app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), function () {
  console.log('Server started on port ' + app.get('port'))
})
