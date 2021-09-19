require("dotenv-safe").config();
const jwt = require('jsonwebtoken');

const User = require("../model/User");
const Player = require("../model/Player");

class UserController {
    async create(req, res) {
        const dataUser = await User.create(req.body);
        const player = {
            name: req.body.name,
            userId: dataUser.id
        }
        const dataPlayer = await Player.create(player);

        return res.json(dataUser);
    }

    async login(req, res) {
        const user = await User.findOne({ username: req.body.username, password: req.body.password });

        if (user) {
            const id = user.id; 
            const token = jwt.sign({ id }, process.env.SECRET, {
                expiresIn: 300 // expires in 5min
            });
            return res.json({ auth: true, token: token });
        }
        res.status(500).json({ message: 'Login inválido!' });
    }

    async logout(req, res) {
        res.json({ auth: false, token: null });
    }

    verifyJWT(req, res, next) {
        const token = req.headers['x-access-token'];
        if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

        jwt.verify(token, process.env.SECRET, async function (err, decoded) {
            if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
            const player = await Player.findOne({ userId: decoded.id });
            if (player) {
                req.playerId = player.id;
                next();
            }
        });
    }
}

module.exports = new UserController();