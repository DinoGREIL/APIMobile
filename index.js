const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5000
const dbbenevole = require('./queries/benevole')
const dbcreneau = require('./queries/creneau')
const dbzone = require('./queries/zone')
const dbjour = require('./queries/jour')
const dbdisponible = require('./queries/disponible')
const dbfestival = require('./queries/festival')
const dbtravail = require('./queries/travail')
const dbzonecreneau = require('./queries/zonecreneau')
const dbzonefestival = require('./queries/zonefestival')
const cors = require("cors");

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(cors())
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

  app.get('/benevoles', dbbenevole.getBenevoles)
  app.get('/benevoles/:id', dbbenevole.getBenevoleById)
  app.post('/benevoles', dbbenevole.createBenevole)
  app.post('/signin',dbbenevole.connection)
  app.put('/benevoles/:id', dbbenevole.updateBenevole)
  app.delete('/benevoles/:id', dbbenevole.deleteBenevole)

  app.get('/zones', dbzone.getZones)
  app.get('/zones/:id', dbzone.getZoneById)
  app.post('/zones', dbzone.createZone)
  app.put('/zones/:id', dbzone.updateZone)
  app.delete('/zones/:id', dbzone.deleteZone)

  app.get('/creneaux', dbcreneau.getCreneaux)
  app.get('/creneaux/:id', dbcreneau.getCreneauById)
  app.post('/creneaux', dbcreneau.createCreneau)
  app.delete('/creneaux/:id', dbcreneau.deleteCreneau)

  app.get('/jours', dbjour.getJour)
  app.get('/jours/:id', dbjour.getJourById)
  app.put('/jours/:id',dbjour.updateJour)
  app.post('/jours', dbjour.createJour)
  app.delete('/jours/:id',dbjour.deleteJour)

  app.get('/festival', dbfestival.getFestival)
  app.get('/festival/:id', dbfestival.getFestivalById)
  app.put('/festival/:id',dbfestival.updateFestival)
  app.post('/festival', dbfestival.createFestival)
  app.delete('/festival/:id',dbfestival.deleteFestival)

  app.get('/disponible',dbdisponible.getDisponibles)
  app.get('/disponiblebenevole/:id',dbdisponible.getDisponibleByIdBenevole)
  app.get('/disponiblecreneau/:id',dbdisponible.getDisponibleByIdCreneau)
  app.post('/disponible',dbdisponible.createDisponible)
  app.delete('/disponible/:id',dbdisponible.deletedisponible)

  app.get('/travail',dbtravail.getTravails)
  app.get('/travailbenevole/:id',dbtravail.getTravailByIdBenevole)
  app.get('/travailcreneau/:id',dbtravail.getTravailByIdCreneau)
  app.get('/travailzone/:id',dbtravail.getTravailByIdZone)
  app.post('/travail',dbtravail.createTravail)
  app.delete('/travail/:id',dbtravail.deleteTravail)

  app.get('/zonecreneau',dbzonecreneau.getZoneCreneaux)
  app.get('/zonecreneaucreneau/:id',dbzonecreneau.getZoneCreneauByIdCreneau)
  app.get('/zonecreneauzone/:id',dbzonecreneau.getZoneCreneauByIdZone)
  app.post('/zonecreneau',dbzonecreneau.createZoneCreneau)
  app.delete('/zonecreneau/:id',dbzonecreneau.deleteZoneCreneau)

  app.get('/zonefestival',dbzonefestival.getZoneFestivals)
  app.get('/zonefestivalfestival/:id',dbzonefestival.getZoneFestivalByIdFestival)
  app.get('/zonefestivalzone/:id',dbzonefestival.getZoneFestivalByIdZone)
  app.post('/zonefestival',dbzonefestival.createZoneFestival)
  app.delete('/zonefestival/:id',dbzonefestival.deleteZoneFestival)

 
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })