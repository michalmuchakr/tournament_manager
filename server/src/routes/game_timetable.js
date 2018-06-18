import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();

import GameModel from '../models/game_model';

function ObcjedIdCreator(id) {
  return new mongoose.Types.ObjectId(id);
}

router.put('/:id', (req, res) => {
  let gameId = new mongoose.Types.ObjectId(req.params.id);

  GameModel.update({_id: gameId}, { $set: { "timetable": req.body.timetable, "results": req.body.teams } }, (err, doc) => {
    if (doc) {
      res.status(200).json({ doc });
    } else {
      res.status(404).json({ errors: { global: 'Nothing to update'} })
    }
  })
});

export default router;
