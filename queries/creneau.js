const pg = require('pg')

var conString = "postgres://xmkioskd:FZRSN1UpL-L69-KYN2NBAPnkRff9Nbdf@hattie.db.elephantsql.com/xmkioskd"
const getCreneaux = (request, response) => {
    var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query('SELECT * FROM creneaux JOIN jourfestivals ON jour=idjour ORDER BY idcreneau ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
      client.end()
    })
  })}
  const getCreneauById = (request, response) => {
    const id = parseInt(request.params.id)
    var client = new pg.Client(conString);
    client.connect(function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
      }
    client.query('SELECT * FROM creneaux JOIN jourfestivals ON jour=idjour WHERE idcreneau = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
      client.end()
    })
  })}
  const createCreneau = (request, response) => {
    const { debut,fin,jour } = request.body
    var client = new pg.Client(conString);
    debutDate=Date.parse(debut)
    finDate=Date.parse(fin)
    client.connect(function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
      }
    client.query('INSERT INTO creneaux (debut, fin,jour) VALUES ($1, $2,$3) RETURNING *', [debutDate/1000,finDate/1000,jour], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`creneau added with ID: ${results.rows[0].id}`)
      client.end()
    })
  })}
  const deleteCreneau = (request, response) => {
    const id = parseInt(request.params.id)
    var client = new pg.Client(conString);
    client.connect(function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
      }
    client.query('DELETE FROM creneaux WHERE idcreneau = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`creneau deleted with ID: ${id}`)
      client.end()
    })
  })}
  module.exports={
    getCreneaux,
    getCreneauById,
    createCreneau,
    deleteCreneau,
    
}