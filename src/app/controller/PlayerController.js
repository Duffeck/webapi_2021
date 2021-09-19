const Player = require("../model/Player");

class PlayerController {
  async index(req, res) {
    const data = await Player.find({});

    return res.json(data);
  }
  async update(req, res) {
    const data = await Player.updateOne(req.body);

    return res.json(data);
  }
}

module.exports = new PlayerController();