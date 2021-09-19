const Character = require("../model/Character");
const Player = require("../model/Player");

class CharacterController {
  async store(req, res) {
    const data = await Player.findById(req.playerId);
    if (data) {
      const characters = data.characters;
      characters.push(req.body);
      const updatedPlayer = await Player.findByIdAndUpdate(req.playerId, { characters: characters });
      return res.json(updatedPlayer);
    }
  }

  async index(req, res) {
    const data = await Character.find({});

    return res.json(data);
  }

  async findByPlayer(req, res) {
    const data = await Character.find({ playerId: req.playerId });

    return res.json(data);
  }

  async update(req, res) {
    const data = await Character.updateOne(req.body);

    return res.json(data);
  }

  async insertWeapon(req, res) {
    const data = await Player.findById(req.playerId);

    if (data) {
      const characterId = req.params.characterId;
      const characters = data.characters;
      const character = characters.find(character => character.id === characterId);
      character.weapons.push(req.body);
      const updatedPlayer = await Player.findByIdAndUpdate(req.playerId, { characters: characters });
      return res.json(updatedPlayer);
    }
  }
}

module.exports = new CharacterController();