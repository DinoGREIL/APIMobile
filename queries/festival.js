const pg = require('pg')

var conString = "postgres://xmkioskd:FZRSN1UpL-L69-KYN2NBAPnkRff9Nbdf@hattie.db.elephantsql.com/xmkioskd"
const getFestival = (request, response) => {
    var client = new pg.Client(conString);
    client.connect(function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
      }
      client.query('SELECT * FROM festivals ORDER BY idfestival ASC', (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
        client.end()
      })
    })}

    const getFestivalById = (request, response) => {
        const id = parseInt(request.params.id)
        var client = new pg.Client(conString);
      client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }
        client.query('SELECT * FROM festivals WHERE idfestival = $1', [id], (error, results) => {
          if (error) {
            throw error
          }
          response.status(200).json(results.rows)
          client.end()
        })
      })}

      const createFestival = (request, response) => {
        const { nomfestival,annee, nbjour,cloturer } = request.body
        var client = new pg.Client(conString);
      client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }
        client.query('INSERT INTO festivals (nomfestival,annee, nbjour,cloturer) VALUES ($1, $2,$3,$4) RETURNING *', [nomfestival,annee, nbjour,cloturer], (error, results) => {
          if (error) {
            throw error
          }
          response.status(201).send(`festival added with ID: ${results.rows[0].id}`)
          client.end()
        })
      })}

      const updateFestival = (request, response) => {
        var client = new pg.Client(conString);
      client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }
        const id = parseInt(request.params.id)
        
        const { nomfestival,annee, nbjour,cloturer } = request.body
        console.log(request.params)
        client.query(
          'UPDATE festivals SET nomfestival = $1, annee = $2,nbjour=$3, cloturer= $4 WHERE idfestival = $5',
          [nomfestival,annee,nbjour,cloturer,id],
          (error, results) => {
            if (error) {
              throw error
            }
            response.status(200).send(`Festival modified with ID: ${id}`)
            client.end()
          }
        )
      })}
      const deleteFestival = (request, response) => {
        const id = parseInt(request.params.id)
        var client = new pg.Client(conString);
      client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }
        client.query('DELETE FROM festivals WHERE idfestival = $1', [id], (error, results) => {
          if (error) {
            throw error
          }
          response.status(200).send(`festival deleted with ID: ${id}`)
          client.end()
        })
      })} 

      module.exports={
        getFestival,
        getFestivalById,
        updateFestival,
        createFestival,
        deleteFestival,
       
    }