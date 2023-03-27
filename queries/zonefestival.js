const pg = require('pg')



var conString = "postgres://xmkioskd:FZRSN1UpL-L69-KYN2NBAPnkRff9Nbdf@hattie.db.elephantsql.com/xmkioskd"
const getZoneFestivals = (request, response) => {
    var client = new pg.Client(conString);
    client.connect(function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
      }
      client.query('SELECT * FROM zonefestival JOIN zones ON zonefestival.idzone=zones.idzone JOIN festivals ON zonefestival.idfestival=festivals.idfestival  ORDER BY zonefestival.idzone ASC', (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
        client.end()
      })
    })}

      const getZoneFestivalByIdFestival = (request, response) => {
        const id = parseInt(request.params.id)
        var client = new pg.Client(conString);
      client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }
        client.query('SELECT * FROM zonefestival JOIN zones ON zonefestival.idzone=zones.idzone JOIN festivals ON zonefestival.idfestival=festivals.idfestival WHERE zonefestival.idfestival = $1', [id], (error, results) => {
          if (error) {
            throw error
          }
          response.status(200).json(results.rows)
          client.end()
        })
      })}
      const getZoneFestivalByIdZone = (request, response) => {
        const id = parseInt(request.params.id)
        var client = new pg.Client(conString);
      client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }
        client.query('SELECT * FROM zonefestival JOIN zones ON zonefestival.idzone=zones.idzone JOIN festivals ON zonefestival.idfestival=festivals.idfestival WHERE zonefestival.idzone = $1', [id], (error, results) => {
          if (error) {
            throw error
          }
          response.status(200).json(results.rows)
          client.end()
        })
      })}

const createZoneFestival = (request, response) => {
        const { idfestival,idzone } = request.body
        var client = new pg.Client(conString);
      client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }
        client.query('INSERT INTO zonefestival (idfestival,idzone) VALUES ($1, $2) RETURNING *', [idfestival,idzone], (error, results) => {
          if (error) {
            throw error
          }
          response.status(201).send(`zonefestival added with ID: ${results.rows[0].id}`)
          client.end()
        })
      })}

      const deleteZoneFestival = (request, response) => {
        const { idfestival,idzone } = request.body
        var client = new pg.Client(conString);
      client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }
        client.query('DELETE FROM zonefestival WHERE  idfestival = $1 and idzone = $2', [idfestival,idzone], (error, results) => {
          if (error) {
            throw error
          }
          response.status(200).send(`zonefestival deleted with ID: ,${idfestival},${idzone}`)
          client.end()
        })
      })}     
      module.exports={
        getZoneFestivals,
        getZoneFestivalByIdFestival,
        getZoneFestivalByIdZone,
        createZoneFestival,
        deleteZoneFestival,
       
    }