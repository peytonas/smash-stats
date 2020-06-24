import express from "express";
import HitsService from "../services/HitsService";

let _hitsService = new HitsService().repository

export default class HitsController {
  constructor() {
    this.router = express.Router()
      .get("", this.getAll)
      .put('/:id', this.edit)
  }

  async getAll(req, res, next) {
    try {
      let hits = await _hitsService.find({})
      res.send(hits);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let hits = await _hitsService.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      if (hits) {
        return res.status(201).send(hits)
      }
    } catch (error) { next(error) }
  }
}
