const pg = require('pg')

var conString = "postgres://xmkioskd:FZRSN1UpL-L69-KYN2NBAPnkRff9Nbdf@hattie.db.elephantsql.com/xmkioskd"

const getJour = (request, response) => {
    var client = new pg.Client(conString);
    client.connect(function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
      }
      client.query('SELECT * FROM jourfestivals JOIN festivals ON festival = idfestival ORDER BY idjour ASC', (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
        client.end()
      })
    })}

    const getJourById = (request, response) => {
        const id = parseInt(request.params.id)
        var client = new pg.Client(conString);
      client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }
        client.query('SELECT * FROM jourfestivals  JOIN festivals ON festival = idfestival WHERE idjour = $1', [id], (error, results) => {
          if (error) {
            throw error
          }
          response.status(200).json(results.rows)
          client.end()
        })
      })}

      const createJour = (request, response) => {
        
        const { nomjour,debut, fin,festival } = request.body
        var client = new pg.Client(conString);
      client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }
        client.query('INSERT INTO jourfestivals (nomjour,debut, fin,festival) VALUES ($1, $2,$3,$4) RETURNING *', [nomjour,debut, fin,festival], (error, results) => {
          if (error) {
            throw error
          }
          response.status(201).send(`jourfestival added with ID: ${results.rows[0].id}`)
          client.end()
        })
      })}

      const updateJour = (request, response) => {
        var client = new pg.Client(conString);
      client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }
        const id = parseInt(request.params.id)
        
        const { nomjour,debut, fin,festival } = request.body
        console.log(request.params)
        client.query(
          'UPDATE jourfestivals SET nomjour = $1, debut = $2,fin=$3, festival= $4 WHERE idjour = $5',
          [nomjour,debut, fin,festival,id],
          (error, results) => {
            if (error) {
              throw error
            }
            response.status(200).send(`jourfestival modified with ID: ${id}`)
            client.end()
          }
        )
      })}
      const deleteJour = (request, response) => {
        const id = parseInt(request.params.id)
        var client = new pg.Client(conString);
      client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }
        client.query('DELETE FROM jourfestivals WHERE idjour = $1', [id], (error, results) => {
          if (error) {
            throw error
          }
          response.status(200).send(`jourfestival deleted with ID: ${id}`)
          client.end()
        })
      })} 
      module.exports={
        getJour,
        getJourById,
        updateJour,
        createJour,
        deleteJour,
       
    }