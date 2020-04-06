import express from "express";
import CharactersService from "../services/CharactersService";

let _charactersService = new CharactersService().repository

export default class CharactersController {
  constructor() {
    this.router = express.Router()
      .get("", this.getAll)
      .post("", this.create);
  }
  async getAll(req, res, next) {
    try {
      let characters = await _charactersService.find({})
      res.send(characters);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let character = await _charactersService.create(req.body)
      return res.status(201).send(character)
    } catch (error) {
      next(error);
    }
  }
}
