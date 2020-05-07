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

    walkSpeed: { type: Number, required: true },
    runSpeed: { type: Number, required: true },
    dashSpeed: { type: Number, required: true },
    airSpeed: { type: Number, required: true },
    fallingSpeed: { type: Number, required: true },
    weight: { type: Number, required: true },

    forwardRollLag: { type: Number, required: true },
    backRollLag: { type: Number, required: true },
    spotDodgeStart: { type: Number, required: true },
    spotDodgeLag: { type: Number, required: true },
    airDodgeLag: { type: Number, required: true },

    neutral: { type: Number, required: true },
    neutralStartup: { type: Number, required: false },
    neutralBaseKnockback: { type: Number, required: false },

    upTilt: { type: Number, required: true },
    upTiltStartup: { type: Number, required: false },
    upTiltLag: { type: Number, required: false },
    upTiltBaseKnockback: { type: Number, required: false },

    downTilt: { type: Number, required: true },
    downTiltStartup: { type: Number, required: false },
    downTiltLag: { type: Number, required: false },
    downTiltBaseKnockback: { type: Number, required: false },


    forwardTilt: { type: Number, required: true },
    forwardTiltStartup: { type: Number, required: false },
    forwardTiltLag: { type: Number, required: false },
    forwardTiltBaseKnockback: { type: Number, required: false },

    dashAttack: { type: Number, required: true },

    upSmash: { type: Number, required: true },
    downSmash: { type: Number, required: true },
    forwardSmash: { type: Number, required: true },

    uair: { type: Number, required: true },
    uairLandingLag: { type: Number, required: false },
    uairAutoCancel: { type: Number, required: false },

    nair: { type: Number, required: true },
    nairLandingLag: { type: Number, required: false },
    nairAutoCancel: { type: Number, required: false },

    fair: { type: Number, required: true },
    fairLandingLag: { type: Number, required: false },
    fairAutoCancel: { type: Number, required: false },

    dair: { type: Number, required: true },
    dairLandingLag: { type: Number, required: false },
    dairAutoCancel: { type: Number, required: false },

    bair: { type: Number, required: true },
    bairLandingLag: { type: Number, required: false },
    bairAutoCancel: { type: Number, required: false },

    zair: { type: Number, required: false },
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

    neutralSpecial: { type: Number, required: true },
    neutralSpecialStartup: { type: Number, required: true },
    neutralSpecialBaseKnockback: { type: Number, required: false },
    neutralSpecialLag: { type: Number, required: true },

    sideSpecial: { type: Number, required: true },
    sideSpecialStartup: { type: Number, required: true },
    sideSpecialBaseKnockback: { type: Number, required: false },
    sideSpecialLag: { type: Number, required: true },

    upSpecial: { type: Number, required: true },
    upSpecialStartup: { type: Number, required: true },
    upSpecialBaseKnockback: { type: Number, required: false },
    upSpecialLag: { type: Number, required: true },

    downSpecial: { type: Number, required: true },
    downSpecialStartup: { type: Number, required: true },
    downSpecialBaseKnockback: { type: Number, required: false },
    downSpecialLag: { type: Number, required: true },

    finalSmash: { type: Number, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default class CharactersService {
  get repository() {
    return mongoose.model('character', _schema)
  }
}