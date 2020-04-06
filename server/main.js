import express from 'express'
import cors from 'cors'
import bp from 'body-parser'
import DbConfig from "./db/DbConfig"

const port = process.env.PORT || 3000

let server = express()

DbConfig.connect()

server.use(express.static(__dirname + '/../client/dist'))

let whitelist = ['http://localhost:8080'];
let corsOptions = {
  origin: function (origin, callback) {
    let originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
server.use(cors(corsOptions))


server.use(bp.urlencoded({ extended: true }))
server.use(bp.json())

import CharactersController from './controllers/CharactersController'

server.use('/api/characters', new CharactersController().router)

server.use((error, req, res, next) => {
  console.error(error);
  res.status(error.status || 400).send({ error: error.message })
})

server.use('*', (req, res, next) => {
  res.status(404).send("Route not found")
})


server.listen(port, () => { console.log(`Server is running on port: ${port}`) })