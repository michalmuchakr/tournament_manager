import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();

const Schema = mongoose.Schema;

import PlayerModel from '../models/player_model';

const validation = (data) => {
  const id = data.id,
        isValid = mongoose.Types.ObjectId.isValid(id);
  return isValid;
}

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
          gender: req.body.gender,
          _id: req.body._id
        });

  PlayerModel.update({_id: player._id}, player, {upsert: true}, (resolve, reject) => {
    res.status(200).json({ mgs: 'ok' })
  });
});

export default router;
