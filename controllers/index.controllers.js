const indexCtrl = {}

indexCtrl.renderHome = (req, res) => {
  res.render('home', { home: 'home' })
}

indexCtrl.renderRaceLabrador = (req, res) => {
  res.render('./races/labrador', { labrador: 'labrador' })
}
indexCtrl.renderRacePitbull = (req, res) => {
  res.render('./races/pitbull', { pitbull: 'pitbull' })
}
indexCtrl.renderRacePug = (req, res) => {
  res.render('./races/pug', { pug: 'pug' })
}
indexCtrl.renderRaceRottweilwer = (req, res) => {
  res.render('./races/rottweiler', { rottweiler: 'rottweiler' })
}

module.exports = indexCtrl
