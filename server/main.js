const express = require("express");
const cors = require("cors");
const bp = require("body-parser");
import DbContext from "./db/DbConfig";
const path = require("path");

const port = process.env.PORT || 3000;

let server = express();

DbContext.connect();

server.use(express.static(__dirname + "/build"));

let whitelist = ["http://localhost:8080", "https://ssb-stats.herokuapp.com"];
let corsOptions = {
  origin: function (origin, callback) {
    let originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true,
};
// @ts-ignore
server.use(cors(corsOptions));

server.use(bp.urlencoded({ extended: true }));
server.use(bp.json());

import CharactersController from "./controllers/CharactersController";
import HitsController from "./controllers/HitsController";

server.use("/api/characters", new CharactersController().router);
server.use("/api/hits", new HitsController().router);

server.use((error, req, res, next) => {
  console.error(error);
  res.status(error.status || 400).send({ error: error.message });
});

server.use("*", (req, res, next) => {
  res.status(404).send("Route not found");
});

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
