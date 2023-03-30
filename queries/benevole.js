const pg = require('pg')

var conString = "postgres://xmkioskd:FZRSN1UpL-L69-KYN2NBAPnkRff9Nbdf@hattie.db.elephantsql.com/xmkioskd"
const getBenevoles = (request, response) => {
    var client = new pg.Client(conString);
    client.connect(function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
      }
      client.query('SELECT * FROM benevoles ORDER BY idbenevole ASC', (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
        client.end()
      })
    })}

    const connection= (request,response)=>{
      const { nombenevole,prenom, email,admin,password } = request.body
      var client = new pg.Client(conString);
    client.connect(async function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
      }
      const results=`SELECT * FROM benevoles WHERE email = '${email} AND password='${password}';`
      
      if (error) {
        throw error
      }
      console.log(results.rows)
      if (results.rows.length == 0){
        response.status(200).send(results.rows)
      }
      else{response.status(201).send(results.rows)}
      client.end()
  
    })
    }




const getBenevoleById = (request, response) => {
        const id = parseInt(request.params.id)
        var client = new pg.Client(conString);
      client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }
        client.query('SELECT * FROM benevoles WHERE idbenevole = $1', [id], (error, results) => {
          if (error) {
            throw error
          }
          response.status(200).json(results.rows)
          client.end()
        })
      })}
const createBenevole = (request, response) => {
        const { nombenevole,prenom, email,admin,password } = request.body
        var client = new pg.Client(conString);
      client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }
        client.query('INSERT INTO benevoles (nombenevole,prenom, email,admin,password) VALUES ($1, $2,$3,$4,$5) RETURNING *', [nombenevole,prenom, email,admin,password], (error, results) => {
          if (error) {
            throw error
          }
          response.status(201).send(`benevole added with ID: ${results.rows[0].id}`)
          client.end()
        })
      })}
const updateBenevole = (request, response) => {
        var client = new pg.Client(conString);
      client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }
        const id = parseInt(request.params.id)
        const { nombenevole,prenom, email } = request.body
        console.log(request.params)
        client.query(
          'UPDATE benevoles SET nombenevole = $1, prenom = $2,email=$3 WHERE idbenevole = $4',
          [nombenevole,prenom,email,id],
          (error, results) => {
            if (error) {
              throw error
            }
            response.status(200).send(`Benevole modified with ID: ${id}`)
            client.end()
          }
        )
      })}
      const deleteBenevole = (request, response) => {
        const id = parseInt(request.params.id)
        var client = new pg.Client(conString);
      client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }
        client.query('DELETE FROM benevoles WHERE idbenevole = $1', [id], (error, results) => {
          if (error) {
            throw error
          }
          response.status(200).send(`benevole deleted with ID: ${id}`)
          client.end()
        })
      })}     

module.exports={
    getBenevoles,
    getBenevoleById,
    createBenevole,
    deleteBenevole,
    updateBenevole,
    connection
}