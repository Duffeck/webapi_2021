const express = require("express");
const routes = express.Router();
const WeaponController = require("./app/controller/WeaponController");
const PlayerController = require("./app/controller/PlayerController");
const CharacterController = require("./app/controller/CharacterController");
const UserController = require("./app/controller/UserController");

/** Weapon */
routes.get("/weapon", WeaponController.index);

routes.post("/weapon", WeaponController.store);

routes.patch("/weapon", WeaponController.update);

/** Player */
routes.get("/player", PlayerController.index);

routes.patch("/player", PlayerController.update);

/** Character */
routes.get("/character", UserController.verifyJWT, CharacterController.index);

routes.post("/character", UserController.verifyJWT, CharacterController.store);

routes.patch("/character", UserController.verifyJWT, CharacterController.update);

routes.post("/character/:characterId/weapon", UserController.verifyJWT, CharacterController.insertWeapon);

/** User */
routes.post('/login', UserController.login)

routes.post('/logout', UserController.logout)

routes.post('/signup', UserController.create)


module.exports = routes;