import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();

import GameModel from '../models/game_model';

const validation = (data) => {
  const id = data.id,
        isValid = mongoose.Types.ObjectId.isValid(id);
  return isValid;
}

router.get('/:id', (req, res) => {
  const isValid = validation(req.params);
  if (isValid) {
    let newId = new mongoose.Types.ObjectId(req.params.id);

    GameModel.find({_id: newId}, (err, singleGame) => {
      if (singleGame) {
        res.status(200).json({ singleGame });
      } else {
        res.status(404).json({ errors: { global: 'Nothing has been found'} })
      }
    });
  } else {
    res.status(422).json({ errors: { global: 'Wrong format of ID has been sent!'} })
  }
});

export default router;
