import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();

import GameModel from '../models/game_model';

router.put('/:id', (req, res) => {
  let gameId = new mongoose.Types.ObjectId(req.params.id);
  
  console.log(req.body.semiFinals);

  GameModel.update({_id: gameId}, { $set: { "semiFinals": req.body.semiFinals } }, (err, doc) => {
    if (doc) {
      res.status(200).json({ ok: 'doc' });
    } else {
      res.status(404).json({ errors: { global: 'Nothing to update' } })
    }
  })
});

export default router;
