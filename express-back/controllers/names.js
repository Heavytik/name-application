const express = require('express')
const namesRouter = express.Router()
const sqlite3 = require('sqlite3')

namesRouter.get('/', function (req, res) {
  
  const countRequest = req.query.countfor

  // create db object and opendatabase connection
  const db = new sqlite3.Database("./db/mydb.db")

  const getAllQuery = "SELECT rowid, name, amount FROM names"

  // do query and error check
  // then send response based countfor query
  db.all(
    getAllQuery,
    (error, rows) => {
      if(error) {
        console.log(error)
        res.json([])
      } else {
        if (typeof countRequest === "undefined") {
          res.json(rows)
        } else if (countRequest == "all") {
          const totallNames = rows.reduce((p, c) => p + c.amount, 0)
          res.status(200).send({ count: totallNames })
        } else {
          const nameObject = rows.find(name => name.name.toLowerCase() == countRequest.toLowerCase())
          if (nameObject) {
            res.status(200).send({ count: nameObject.amount})
          } else {
            res.status(404).send({ count: 0 })
          }
        }
      }
    }
  );

  db.close()
})

module.exports = namesRouter