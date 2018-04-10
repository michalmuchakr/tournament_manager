import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();

const Schema = mongoose.Schema;

import GameModel from '../models/game_model';

router.post('/', (req, res) => {
  const game = new GameModel ({
    name: req.body.name,
    description: req.body.description,
    tournamentData: req.body.tournamentData,
    players: req.body.players,
    teams: req.body.teams
  })

  const savePromise = new Promise((resolve, reject) => {
    game.save();
    resolve('Success!');
  });

  savePromise.then((value) => {
    res.status(200).json({ mgs: 'ok' })
  });
});

router.get('/', (req, res) => {
  GameModel.find({}, {name: 1, description: 1, tournamentData: 1}, {sort: {created: -1}}, (err, games) => {
    res.json({ games });
  });
});

export default router;
