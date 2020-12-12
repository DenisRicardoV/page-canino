'use strict'
const { Router } = require('express')
const router = Router()

const { renderHome, renderRaceLabrador, renderRacePug, renderRacePitbull,renderRaceRottweilwer } = require('../controllers/index.controllers')

router.get('/', renderHome)
router.get('/labrador',renderRaceLabrador )
router.get('/pitbull',renderRacePitbull )
router.get('/pug',renderRacePug )
router.get('/rottweiler',renderRaceRottweilwer )



module.exports = router
