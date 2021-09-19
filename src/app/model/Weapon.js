const mongoose = require("mongoose");

const WeaponSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true
    },
    attackBonus: {
      type: Number,
      required: false
    },
    damageDice: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Weapon = module.exports = mongoose.model("Weapon", WeaponSchema);
Weapon.WeaponSchema = WeaponSchema;