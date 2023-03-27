const pg = require('pg')

var conString = "postgres://xmkioskd:FZRSN1UpL-L69-KYN2NBAPnkRff9Nbdf@hattie.db.elephantsql.com/xmkioskd"
const getDisponibles = (request, response) => {
    var client = new pg.Client(conString);
    client.connect(function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
      }
      client.query('SELECT * FROM disponible JOIN creneaux ON disponible.idcreneau=creneaux.idcreneau JOIN benevoles ON disponible.idbenevole = benevoles.idbenevole ORDER BY disponible.idbenevole ASC', (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
        client.end()
      })
    })}
const getDisponibleByIdBenevole = (request, response) => {
        const id = parseInt(request.params.id)
        var client = new pg.Client(conString);
      client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }
        client.query('SELECT * FROM disponible JOIN creneaux ON disponible.idcreneau=creneaux.idcreneau JOIN benevoles ON disponible.idbenevole = benevoles.idbenevole WHERE disponible.idbenevole = $1', [id], (error, results) => {
          if (error) {
            throw error
          }
          response.status(200).json(results.rows)
          client.end()
        })
      })}
      const getDisponibleByIdCreneau = (request, response) => {
        const id = parseInt(request.params.id)
        var client = new pg.Client(conString);
      client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }
        client.query('SELECT * FROM disponible JOIN creneaux ON disponible.idcreneau=creneaux.idcreneau JOIN benevoles ON disponible.idbenevole = benevoles.idbenevole WHERE disponible.idcreneau = $1', [id], (error, results) => {
          if (error) {
            throw error
          }
          response.status(200).json(results.rows)
          client.end()
        })
      })}
const createDisponible = (request, response) => {
        const { idbenevole,idcreneau } = request.body
        var client = new pg.Client(conString);
      client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }
        client.query('INSERT INTO disponible (idbenevole,idcreneau) VALUES ($1, $2) RETURNING *', [idbenevole,idcreneau], (error, results) => {
          if (error) {
            throw error
          }
          response.status(201).send(`disponible added with ID: ${results.rows[0].id}`)
          client.end()
        })
      })}

      const deletedisponible = (request, response) => {
        const { idbenevole,idcreneau } = request.body
        var client = new pg.Client(conString);
      client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }
        client.query('DELETE FROM disponible WHERE idbenevole = $1 and idcreneau = $2', [idbenevole,idcreneau], (error, results) => {
          if (error) {
            throw error
          }
          response.status(200).send(`disponible deleted with ID: ${idbenevole},${idcreneau}`)
          client.end()
        })
      })}     

      module.exports={
        getDisponibles,
        getDisponibleByIdBenevole,
        getDisponibleByIdCreneau,
        createDisponible,
        deletedisponible,
       
    }