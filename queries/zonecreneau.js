const pg = require('pg')



var conString = "postgres://xmkioskd:FZRSN1UpL-L69-KYN2NBAPnkRff9Nbdf@hattie.db.elephantsql.com/xmkioskd"
const getZoneCreneaux = (request, response) => {
    var client = new pg.Client(conString);
    client.connect(function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
      }
      client.query('SELECT * FROM zonecreneau JOIN zones ON zonecreneau.idzone=zones.idzone JOIN creneaux ON zonecreneau.idcreneau=creneaux.idcreneau ORDER BY zonecreneau.idzone ASC', (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
        client.end()
      })
    })}

      const getZoneCreneauByIdCreneau = (request, response) => {
        const id = parseInt(request.params.id)
        var client = new pg.Client(conString);
      client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }
        client.query('SELECT * FROM zonecreneau JOIN zones ON zonecreneau.idzone=zones.idzone JOIN creneaux ON zonecreneau.idcreneau=creneaux.idcreneau  WHERE zonecreneau.idcreneau = $1', [id], (error, results) => {
          if (error) {
            throw error
          }
          response.status(200).json(results.rows)
          client.end()
        })
      })}
      const getZoneCreneauByIdZone = (request, response) => {
        const id = parseInt(request.params.id)
        var client = new pg.Client(conString);
      client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }
        client.query('SELECT * FROM zonecreneau JOIN zones ON zonecreneau.idzone=zones.idzone JOIN creneaux ON zonecreneau.idcreneau=creneaux.idcreneau  WHERE zonecreneau.idzone = $1', [id], (error, results) => {
          if (error) {
            throw error
          }
          response.status(200).json(results.rows)
          client.end()
        })
      })}

const createZoneCreneau = (request, response) => {
        const { idcreneau,idzone } = request.body
        var client = new pg.Client(conString);
      client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }
        client.query('INSERT INTO zonecreneau (idcreneau,idzone) VALUES ($1, $2) RETURNING *', [idcreneau,idzone], (error, results) => {
          if (error) {
            throw error
          }
          response.status(201).send(`zonecreneau added with ID: ${results.rows[0].id}`)
          client.end()
        })
      })}

      const deleteZoneCreneau = (request, response) => {
        const { idcreneau,idzone } = request.body
        var client = new pg.Client(conString);
      client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }
        client.query('DELETE FROM zonecreneau WHERE  idcreneau = $1 and idzone = $2', [idcreneau,idzone], (error, results) => {
          if (error) {
            throw error
          }
          response.status(200).send(`zonecreneau deleted with ID: ,${idcreneau},${idzone}`)
          client.end()
        })
      })}     
      module.exports={
        getZoneCreneaux,
        getZoneCreneauByIdCreneau,
        getZoneCreneauByIdZone,
        createZoneCreneau,
        deleteZoneCreneau,
       
    }