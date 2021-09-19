const Weapon = require("../model/Weapon");

class WeaponController {
  async store(req, res) {
    const data = await Weapon.create(req.body);

    return res.json(data);
  }

  async index(req, res) {
    const data = await Weapon.find({});

    return res.json(data);
  }
  async update(req, res) {
    const data = await Weapon.updateOne(req.body);

    return res.json(data);
  }
}

module.exports = new WeaponController();