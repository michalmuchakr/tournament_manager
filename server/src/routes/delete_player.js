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
function ObcjedIdCreator(id) {
  return new mongoose.Types.ObjectId(id);
}

router.post('/', (req, res) => {
  PlayerModel.update({_id: ObcjedIdCreator(req.body.id)}, { $set: { "deleted": true } }, (err, doc) => {
    if (doc) {
      res.status(200).json({ doc });
    } else {
      res.status(404).json({ errors: { global: 'Nothing to delete'} })
    }
  });
});

export default router;
