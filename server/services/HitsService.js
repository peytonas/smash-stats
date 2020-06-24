import mongoose from "mongoose";
const Schema = mongoose.Schema;

const _schema = new Schema(
  {
    hits: { type: Number, required: true }
  }
)

export default class HitsService {
  get repository() {
    return mongoose.model('hits', _schema)
  }
}