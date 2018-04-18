import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PlayerSchema = new mongoose.Schema({
  name: String,
  email: String,
  last_name: {
    type: String,
    default: ''
  },
  created: {
    type: Date,
    default: Date.now
  },
  deleted: {
    type: Boolean,
    default: false
  },
  descript: {
    type: String,
    default: ''
  },
  position: {
    type: String,
    default: 'whatever'
  }
});

export default mongoose.model('players', PlayerSchema);
