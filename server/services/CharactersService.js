import mongoose from "mongoose";
const Schema = mongoose.Schema;

const _schema = new Schema(
  {
    name: { type: String, required: false },
    series: { type: String, required: false },
    introduced: { type: String, required: false },
    characterNumber: { type: Number, unique: false, required: false },

    iconUrl: { type: String, required: false },
    imgUrl: { type: String, required: false },
    imgUrl2: { type: String, required: false },
    imgUrl3: { type: String, required: false },
    imgUrl4: { type: String, required: false },
    imgUrl5: { type: String, required: false },
    imgUrl6: { type: String, required: false },
    imgUrl7: { type: String, required: false },
    imgUrl8: { type: String, required: false },

    weight: { type: Number, required: false },

    neutral: { type: Number, required: false },
    neutralStartup: { type: Number, required: false },
    neutralLag: { type: Number, required: false },

    neutralSpecial: { type: Number, required: false },
    neutralSpecialStartup: { type: Number, required: false },
    neutralSpecialLag: { type: Number, required: false },

    sideSpecial: { type: Number, required: false },
    sideSpecialStartup: { type: Number, required: false },
    sideSpecialLag: { type: Number, required: false },

    upSpecial: { type: Number, required: false },
    upSpecialStartup: { type: Number, required: false },
    upSpecialLag: { type: Number, required: false },

    downSpecial: { type: Number, required: false },
    downSpecialStartup: { type: Number, required: false },
    downSpecialLag: { type: Number, required: false },

    superSpecial1: { type: Number, required: false },
    superSpecial1Startup: { type: Number, required: false },
    superSpecial1Lag: { type: Number, required: false },

    superSpecial2: { type: Number, required: false },
    superSpecial2Startup: { type: Number, required: false },
    superSpecial2Lag: { type: Number, required: false },

    upTilt: { type: Number, required: false },
    upTiltStartup: { type: Number, required: false },
    upTiltLag: { type: Number, required: false },

    downTilt: { type: Number, required: false },
    downTiltStartup: { type: Number, required: false },
    downTiltLag: { type: Number, required: false },

    forwardTilt: { type: Number, required: false },
    forwardTiltStartup: { type: Number, required: false },
    forwardTiltLag: { type: Number, required: false },

    dashAttack: { type: Number, required: false },
    dashAttackStartup: { type: Number, required: false },
    dashAttackLag: { type: Number, required: false },

    upSmash: { type: Number, required: false },
    upSmashStartup: { type: Number, required: false },
    upSmashLag: { type: Number, required: false },

    downSmash: { type: Number, required: false },
    downSmashStartup: { type: Number, required: false },
    downSmashLag: { type: Number, required: false },

    forwardSmash: { type: Number, required: false },
    forwardSmashStartup: { type: Number, required: false },
    forwardSmashLag: { type: Number, required: false },

    nair: { type: Number, required: false },
    nairStartup: { type: Number, required: false },
    nairLag: { type: Number, required: false },
    nairLandingLag: { type: Number, required: false },
    nairAutoCancel: { type: Number, required: false },

    uair: { type: Number, required: false },
    uairStartup: { type: Number, required: false },
    uairLag: { type: Number, required: false },
    uairLandingLag: { type: Number, required: false },
    uairAutoCancel: { type: Number, required: false },

    dair: { type: Number, required: false },
    dairStartup: { type: Number, required: false },
    dairLag: { type: Number, required: false },
    dairLandingLag: { type: Number, required: false },
    dairAutoCancel: { type: Number, required: false },

    fair: { type: Number, required: false },
    fairStartup: { type: Number, required: false },
    fairLag: { type: Number, required: false },
    fairLandingLag: { type: Number, required: false },
    fairAutoCancel: { type: Number, required: false },

    bair: { type: Number, required: false },
    bairStartup: { type: Number, required: false },
    bairLag: { type: Number, required: false },
    bairLandingLag: { type: Number, required: false },
    bairAutoCancel: { type: Number, required: false },

    zair: { type: Number, required: false },
    zairStartup: { type: Number, required: false },
    zairLag: { type: Number, required: false },
    zairLandingLag: { type: Number, required: false },
    zairAutoCancel: { type: Number, required: false },

    grabStartup: { type: Number, required: false },
    grabLag: { type: Number, required: false },

    dashGrabStartup: { type: Number, required: false },
    dashGrabLag: { type: Number, required: false },

    pivotGrabStartup: { type: Number, required: false },
    pivotGrabLag: { type: Number, required: false },

    pummel: { type: Number, required: false },
    pummelStartup: { type: Number, required: false },
    pummelLag: { type: Number, required: false },

    forwardThrow: { type: Number, required: false },
    forwardThrowStartup: { type: Number, required: false },
    forwardThrowLag: { type: Number, required: false },

    backThrow: { type: Number, required: false },
    backThrowStartup: { type: Number, required: false },
    backThrowLag: { type: Number, required: false },

    upThrow: { type: Number, required: false },
    upThrowStartup: { type: Number, required: false },
    upThrowLag: { type: Number, required: false },

    downThrow: { type: Number, required: false },
    downThrowStartup: { type: Number, required: false },
    downThrowLag: { type: Number, required: false },

    floorAttackFront: { type: Number, required: false },
    floorAttackBack: { type: Number, required: false },
    floorAttackTrip: { type: Number, required: false },
    edgeAttack: { type: Number, required: false },

    finalSmash: { type: Number, required: false },

    walkSpeed: { type: Number, required: false },
    runSpeed: { type: Number, required: false },
    dashSpeed: { type: Number, required: false },
    airSpeed: { type: Number, required: false },
    fallingSpeed: { type: Number, required: false },

    forwardRollLag: { type: Number, required: false },
    backRollLag: { type: Number, required: false },
    spotDodgeStart: { type: Number, required: false },
    spotDodgeLag: { type: Number, required: false },
    airDodgeLag: { type: Number, required: false }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default class CharactersService {
  get repository() {
    return mongoose.model('character', _schema)
  }
}