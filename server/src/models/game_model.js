import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const GameSchema = new mongoose.Schema({
  name: String,
  created: {
              type: Date,
              default: Date.now
            },
  description: String,
  tournamentData: Date,
  players: Array,
  teams: Array,
  tournamentStarted: {
                type: Boolean,
                default: false
              },
  timetable: [
              {
                teams: Array,
                result: Array,
                groupIndex: Number,
              }
            ],
  results: {
              type: Array,
              groupIndex: Number,
              result: {
                type: Object,
                id: Number,
                goals: {
                  type: Array,
                  default: [0,0]
                },
                points: {
                  type: Number,
                  default: 0
                },
              }
            },
  settings: {
              type: Array,
              default: [{
                gameType: 'liga',
                doubleMatch: true,
                direct_match: false,
                scored_goals: true,
                end_leauge: 'end',
                final_doubleMatch: true
              }]
            }
});

export default mongoose.model('games', GameSchema);
