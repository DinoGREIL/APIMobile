
const pg = require('pg')

var conString = "postgres://xmkioskd:FZRSN1UpL-L69-KYN2NBAPnkRff9Nbdf@hattie.db.elephantsql.com/xmkioskd"
const getTravails = (request, response) => {
    var client = new pg.Client(conString);
    client.connect(function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
      }
      client.query('SELECT * FROM travail JOIN zones ON travail.idzone=zones.idzone JOIN creneaux ON travail.idcreneau=creneaux.idcreneau JOIN benevoles ON travail.idbenevole = benevoles.idbenevole ORDER BY travail.idbenevole ASC', (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
        client.end()
      })
    })}
const getTravailByIdBenevole = (request, response) => {
        const id = parseInt(request.params.id)
        var client = new pg.Client(conString);
      client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }
        client.query('SELECT * FROM travail JOIN zones ON travail.idzone=zones.idzone JOIN creneaux ON travail.idcreneau=creneaux.idcreneau JOIN benevoles ON travail.idbenevole = benevoles.idbenevole WHERE travail.idbenevole = $1', [id], (error, results) => {
          if (error) {
            throw error
          }
          response.status(200).json(results.rows)
          client.end()
        })
      })}
      const getTravailByIdCreneau = (request, response) => {
        const id = parseInt(request.params.id)
        var client = new pg.Client(conString);
      client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }
        client.query('SELECT * FROM travail JOIN zones ON travail.idzone=zones.idzone JOIN creneaux ON travail.idcreneau=creneaux.idcreneau JOIN benevoles ON travail.idbenevole = benevoles.idbenevole WHERE travail.idcreneau = $1', [id], (error, results) => {
          if (error) {
            throw error
          }
          response.status(200).json(results.rows)
          client.end()
        })
      })}
      const getTravailByIdZone = (request, response) => {
        const id = parseInt(request.params.id)
        var client = new pg.Client(conString);
      client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }
        client.query('SELECT * FROM travail JOIN zones ON travail.idzone=zones.idzone JOIN creneaux ON travail.idcreneau=creneaux.idcreneau JOIN benevoles ON travail.idbenevole = benevoles.idbenevole WHERE travail.idzone = $1', [id], (error, results) => {
          if (error) {
            throw error
          }
          response.status(200).json(results.rows)
          client.end()
        })
      })}

const createTravail = (request, response) => {
        const { idbenevole,idcreneau,idzone } = request.body
        var client = new pg.Client(conString);
      client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }
        client.query('INSERT INTO travail (idbenevole,idcreneau,idzone) VALUES ($1, $2,$3) RETURNING *', [idbenevole,idcreneau,idzone], (error, results) => {
          if (error) {
            throw error
          }
          response.status(201).send(`travail added with ID: ${results.rows[0].id}`)
          client.end()
        })
      })}

      const deleteTravail = (request, response) => {
        const { idbenevole,idcreneau,idzone } = request.body
        var client = new pg.Client(conString);
      client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }
        client.query('DELETE FROM travail WHERE idbenevole = $1 and idcreneau = $2 and idzone = $3', [idbenevole,idcreneau,idzone], (error, results) => {
          if (error) {
            throw error
          }
          response.status(200).send(`travail deleted with ID: ${idbenevole},${idcreneau},${idzone}`)
          client.end()
        })
      })}     

      module.exports={
        getTravails,
        getTravailByIdBenevole,
        getTravailByIdZone,
        getTravailByIdCreneau,
        createTravail,
        deleteTravail,
       
    }