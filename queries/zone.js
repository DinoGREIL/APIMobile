const pg = require('pg')

var conString = "postgres://xmkioskd:FZRSN1UpL-L69-KYN2NBAPnkRff9Nbdf@hattie.db.elephantsql.com/xmkioskd"
const getZones = (request, response) => {
    var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query('SELECT * FROM zones ORDER BY idzone ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
      client.end()
    })
  })}

  const getZoneById = (request, response) => {
    const id = parseInt(request.params.id)
    var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query('SELECT * FROM zones WHERE idzone = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
      client.end()
    })
  })}

  const createZone = (request, response) => {
    const { nomzone,nbbenevole } = request.body
    var client = new pg.Client(conString);
    client.connect(function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
      }
    client.query('INSERT INTO zones (nomzone,nbbenevole) VALUES ($1,$2) RETURNING *', [nomzone,nbbenevole], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`zone added with ID: ${results.rows[0].idzone}`)
      client.end()
    })
  })}
  const updateZone = (request, response) => {
    var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    const id = parseInt(request.params.id)
    
    const { nomzone,nbbenevole } = request.body
    console.log(request.params)
    client.query(
      'UPDATE zones SET nomzone = $1, nbbenevole = $2 WHERE idfestival = $3',
      [nomzone,nbbenevole,id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Zone modified with ID: ${id}`)
        client.end()
      }
    )
  })}
  const deleteZone = (request, response) => {
    const id = parseInt(request.params.id)
    var client = new pg.Client(conString);
    client.connect(function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
      }
    client.query('DELETE FROM zones WHERE idzone = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`zone deleted with ID: ${id}`)
      client.end()
    })
  })}
  module.exports={
    getZones,
    getZoneById,
    updateZone,
    createZone,
    deleteZone,
   
}
