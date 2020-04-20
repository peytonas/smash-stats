const express = require('express')
const cors = require('cors')
const bp = require('body-parser')
const compression = require('compression')
const morgan = require('morgan')
const path = require('path')
import DbConfig from "./db/DbConfig"

const normalizePort = port => parseInt(port, 10)
const port = normalizePort(process.env.PORT || 3000)

let server = express()
const dev = server.get('env') !== 'production'

DbConfig.connect()

if (!dev) {
  server.disable('x-powered-by')
  // @ts-ignore
  server.use(compression())
  // @ts-ignore
  server.use(morgan('common'))
  server.use(express.static(__dirname + '/client/build'))
  server.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '/client/build', 'index.html'))
  })
}

if (dev) {
  // @ts-ignore
  server.use(morgan('dev'))
}

let whitelist = ['http://localhost:8080', 'https://ssb-stats.herokuapp.com'];
let corsOptions = {
  origin: function (origin, callback) {
    let originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
// @ts-ignore
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