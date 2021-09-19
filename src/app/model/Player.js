const mongoose = require("mongoose");
const Character = require("./Character");

const PlayerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    characters: [
      Character.CharacterSchema
    ],
    userId: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Player", PlayerSchema);