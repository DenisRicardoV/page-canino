'use strict'
const { Router } = require('express')
const router = Router()

const { renderHome } = require('../controllers/index.controllers')

router.get('/', renderHome)

module.exports = router
