import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();

import GameModel from '../models/game_model';

function ObcjedIdCreator(id) {
  return new mongoose.Types.ObjectId(id);
}

router.put('/:id', (req, res) => {
  let gameId = ObcjedIdCreator(req.params.id),
      resultId = ObcjedIdCreator(req.body.matchId),
      resultToSet = req.body.results,
      timeTableResult = req.body.timeTableResult;
  
  GameModel.update({_id: gameId, "timetable._id": resultId}, { $set: { 'timetable.$.result': timeTableResult } },(err, doc) => {
    if (doc) {
      res.status(200).json({ doc });
    } else {
      res.status(404).json({ errors: { global: 'Match not found!'} })
    }
  });
});

export default router;
