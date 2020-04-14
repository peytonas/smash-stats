import express from 'express'
import cors from 'cors'
import bp from 'body-parser'
const path = require('path');
import DbConfig from "./db/DbConfig"

const port = process.env.PORT || 5000

let server = express()

DbConfig.connect()

server.use(express.static(__dirname + '/../client/dist'))

let whitelist = ['http://localhost:3000', 'https://ssb-stats.herokuapp.com'];
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

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  server.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  server.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

server.listen(port, () => { console.log(`Server is running on port: ${port}`) })