import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import ObjectId from 'mongodb';

import players from './routes/players';
import updatePlayers from './routes/update_player';
import deletePlayer from './routes/delete_player';

import games from './routes/games';
import singleGame from './routes/single_game';
import singleResult from './routes/single_result';
import gamePlayers from './routes/game_players';
import gameTeams from './routes/game_teams';
import gameTimetable from './routes/game_timetable';
import gameSettings from './routes/game_settings';
import matchToResutls from './routes/match_to_result';
import matchToTimetable from './routes/match_to_timatable';
import tournamentStarted from './routes/tournament_started';
import groupmatchtotimetable from './routes/game_group_timetable';
import semi_finals from './routes/semi_finals';
import save_final from './routes/save_final';
import save_final_result from './routes/save_final_result';
import save_tournament_winners from './routes/save_tournament_winners';

import set_result_semi_finals from './routes/set_result_semi_finals';
 
import gameGroupTimetable from './routes/game_group_timetable';

import usersRoutes from './routes/users';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

console.log('connecting');

mongoose.connect('mongodb://localhost/fs-dev1', {
  keepAlive: 1,
  useNewUrlParser: true,
  useCreateIndex: true
});

const app = express();
const db = mongoose.connection;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(allowCrossDomain);
app.use(bodyParser.json());

app.use('/api/players', players);
app.use('/api/updateplayers', updatePlayers);
app.use('/api/deleteplayer', deletePlayer);

app.use('/api/games', games);
app.use('/api/singlegame', singleGame);

app.use('/api/singleresult', singleResult);
app.use('/api/gameplayers', gamePlayers);
app.use('/api/gameteams', gameTeams);

app.use('/api/gametimetable', gameTimetable);
app.use('/api/gamegrouptimetable', gameGroupTimetable);
app.use('/api/gamesettings', gameSettings);

app.use('/api/matchtotimetable', matchToTimetable);
app.use('/api/matchtoresult', matchToResutls);

app.use('/api/groupmatchtotimetable', groupmatchtotimetable);

app.use('/api/tournamentstarted', tournamentStarted);

app.use('/api/semi_finals', semi_finals);
app.use('/api/set_result_semi_finals', set_result_semi_finals);
app.use('/api/save_final_result', save_final_result);
app.use('/api/save_final', save_final);
app.use('/api/save_tournament_winners', save_tournament_winners);

app.use('/api/users', usersRoutes);

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  app.listen(9000, () => console.log('Express listen at port:' + process.env.EXPRESS_PORT));
});
