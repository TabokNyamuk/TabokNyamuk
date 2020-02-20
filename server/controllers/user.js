const { User } = require('../models');

class UserController {
  static create(req, res, next) {
    let user = {
      name: req.body.name,
      score: req.body.score
    };
    User.create(user)
      .then(result => {
        res.status(201).json(result);
      })
      .catch(err => {
        next(err);
      });
  }

  static findAll(req, res, next) {
    User.findAll()
      .then(users => {
        res.status(200).json(users);
      })
      .catch(err => {
        next(err);
      });
  }
}

module.exports = UserController;
