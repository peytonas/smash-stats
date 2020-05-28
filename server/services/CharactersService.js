import mongoose from "mongoose";
const Schema = mongoose.Schema;

const _schema = new Schema(
  {
    name: { type: String, required: true },
    series: { type: String, required: true },
    introduced: { type: String, required: true },
    characterNumber: { type: Number, unique: true, required: true },

    iconUrl: { type: String, required: true },
    imgUrl: { type: String, required: true },
    imgUrl2: { type: String, required: true },
    imgUrl3: { type: String, required: true },
    imgUrl4: { type: String, required: true },
    imgUrl5: { type: String, required: true },
    imgUrl6: { type: String, required: true },
    imgUrl7: { type: String, required: true },
    imgUrl8: { type: String, required: true },

    weight: { type: Number, required: true },

    neutral: { type: Number, required: true },
    neutralStartup: { type: Number, required: false },
    neutralLag: { type: Number, required: false },

    neutralSpecial: { type: Number, required: true },
    neutralSpecialStartup: { type: Number, required: true },
    neutralSpecialLag: { type: Number, required: true },

    sideSpecial: { type: Number, required: true },
    sideSpecialStartup: { type: Number, required: true },
    sideSpecialLag: { type: Number, required: true },

    upSpecial: { type: Number, required: true },
    upSpecialStartup: { type: Number, required: true },
    upSpecialLag: { type: Number, required: true },

    downSpecial: { type: Number, required: true },
    downSpecialStartup: { type: Number, required: true },
    downSpecialLag: { type: Number, required: true },

    upTilt: { type: Number, required: true },
    upTiltStartup: { type: Number, required: false },
    upTiltLag: { type: Number, required: false },

    downTilt: { type: Number, required: true },
    downTiltStartup: { type: Number, required: false },
    downTiltLag: { type: Number, required: false },

    forwardTilt: { type: Number, required: true },
    forwardTiltStartup: { type: Number, required: false },
    forwardTiltLag: { type: Number, required: false },

    dashAttack: { type: Number, required: true },
    dashAttackStartup: { type: Number, required: true },
    dashAttackLag: { type: Number, required: true },

    upSmash: { type: Number, required: true },
    upSmashStartup: { type: Number, required: true },
    upSmashLag: { type: Number, required: true },

    downSmash: { type: Number, required: true },
    downSmashStartup: { type: Number, required: true },
    downSmashLag: { type: Number, required: true },

    forwardSmash: { type: Number, required: true },
    forwardSmashStartup: { type: Number, required: true },
    forwardSmashLag: { type: Number, required: true },

    nair: { type: Number, required: true },
    nairStartup: { type: Number, required: true },
    nairLandingLag: { type: Number, required: false },
    nairAutoCancel: { type: Number, required: false },

    uair: { type: Number, required: true },
    uairStartup: { type: Number, required: true },
    uairLandingLag: { type: Number, required: false },
    uairAutoCancel: { type: Number, required: false },

    dair: { type: Number, required: true },
    dairStartup: { type: Number, required: true },
    dairLandingLag: { type: Number, required: false },
    dairAutoCancel: { type: Number, required: false },

    fair: { type: Number, required: true },
    fairStartup: { type: Number, required: true },
    fairLandingLag: { type: Number, required: false },
    fairAutoCancel: { type: Number, required: false },

    bair: { type: Number, required: true },
    bairStartup: { type: Number, required: true },
    bairLandingLag: { type: Number, required: false },
    bairAutoCancel: { type: Number, required: false },

    zair: { type: Number, required: false },
    zairStartup: { type: Number, required: true },
    zairLandingLag: { type: Number, required: false },
    zairAutoCancel: { type: Number, required: false },

    pummel: { type: Number, required: true },
    pummelStartup: { type: Number, required: true },

    forwardThrow: { type: Number, required: true },
    forwardThrowStartup: { type: Number, required: false },
    forwardThrowLag: { type: Number, required: false },

    backThrow: { type: Number, required: true },
    backThrowStartup: { type: Number, required: false },
    backThrowLag: { type: Number, required: false },

    upThrow: { type: Number, required: true },
    upThrowStartup: { type: Number, required: false },
    upThrowLag: { type: Number, required: false },

    downThrow: { type: Number, required: true },
    downThrowStartup: { type: Number, required: false },
    downThrowLag: { type: Number, required: false },

    floorAttackFront: { type: Number, required: true },
    floorAttackBack: { type: Number, required: true },
    floorAttackTrip: { type: Number, required: true },
    edgeAttack: { type: Number, required: true },

    finalSmash: { type: Number, required: true },

    walkSpeed: { type: Number, required: true },
    runSpeed: { type: Number, required: true },
    dashSpeed: { type: Number, required: true },
    airSpeed: { type: Number, required: true },
    fallingSpeed: { type: Number, required: true },

    forwardRollLag: { type: Number, required: true },
    backRollLag: { type: Number, required: true },
    spotDodgeStart: { type: Number, required: true },
    spotDodgeLag: { type: Number, required: true },
    airDodgeLag: { type: Number, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default class CharactersService {
  get repository() {
    return mongoose.model('character', _schema)
  }
}