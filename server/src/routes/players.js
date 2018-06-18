import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();

const Schema = mongoose.Schema;

import PlayerModel from '../models/player_model';

router.get('/', (req, res) => {
  PlayerModel.find({}, null, {sort: {created: -1}}, (err, players) => {
    res.json({ players });
  });
});

router.post('/', (req, res) => {
  const player = new PlayerModel ({
          name: req.body.name,
          last_name: req.body.last_name,
          email: req.body.email,
          descript: req.body.descript,
          position: req.body.position,
          gender: req.body.gender
        }),
        savePromise = new Promise((resolve, reject) => {
          player.save()
          resolve('Success!');
        });

  savePromise.then((value) => {
    res.status(200).json({ mgs: value })
  })
  .catch((reason) => {
    // validation 422
    // brak dost 401
      res.status(422).json(reason)
    });
});

export default router;
