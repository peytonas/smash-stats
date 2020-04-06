import mongoose from "mongoose";
const Schema = mongoose.Schema;

const _schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    imgUrl: { type: String },
    walkSpeed: { type: Number, required: true },
    runSpeed: { type: Number, required: true },
    dashSpeed: { type: Number, required: true },
    airSpeed: { type: Number, required: true },
    fallingSpeed: { type: Number, required: true },
    weight: { type: Number, required: true },
    forwardRollLag: { type: Number, required: true },
    backRollLag: { type: Number, required: true },
    spotDodgeStart: { type: Number, required: true },
    airDodgeLag: { type: Number, required: true },
    neutral: { type: Number, required: true },
    upTilt: { type: Number, required: true },
    downTilt: { type: Number, required: true },
    forwardTilt: { type: Number, required: true },
    dashAttack: { type: Number, required: true },
    upSmash: { type: Number, required: true },
    downSmash: { type: Number, required: true },
    forwardSmash: { type: Number, required: true },
    uair: { type: Number, required: true },
    nair: { type: Number, required: true },
    fair: { type: Number, required: true },
    dair: { type: Number, required: true },
    bair: { type: Number, required: true },
    zair: { type: Number, required: false },
    pummel: { type: Number, required: true },
    forwardThrow: { type: Number, required: true },
    backThrow: { type: Number, required: true },
    upThrow: { type: Number, required: true },
    downThrow: { type: Number, required: true },
    floorAttackFront: { type: Number, required: true },
    floorAttackBack: { type: Number, required: true },
    floorAttackTrip: { type: Number, required: true },
    edgeAttack: { type: Number, required: true },
    neutralSpecial: { type: Number, required: true },
    sideSpecial: { type: Number, required: true },
    upSpecial: { type: Number, required: true },
    downSpecial: { type: Number, required: true },
    finalSmash: { type: Number, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default class CharactersService {
  get repository() {
    return mongoose.model('character', _schema)
  }
}