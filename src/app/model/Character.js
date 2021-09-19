const mongoose = require("mongoose");
const Weapon = require("./Weapon");

const CharacterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    class: {
      type: String,
      required: true
    },
    weapons: [
      Weapon.WeaponSchema
    ]
  },
  {
    timestamps: true
  }
);


const Character = module.exports = mongoose.model("Character", CharacterSchema);
Character.CharacterSchema = CharacterSchema;