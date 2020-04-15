//THIS FILE STAYS BASICALLY THE SAME
import mongoose from 'mongoose'
require('dotenv').config();

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connection.on('error', err => {
  console.error('[DATABASE ERROR]:', err)
})

export default class DbConfig {
  static async connect() {
    try {
      let status = await mongoose.connect("mongodb+srv://peytonas:63A466ee@@peytonas-el9km.mongodb.net/smash-stats?retryWrites=true&w=majority") //TODO Make sure you set this in .env
      console.log("CONNECTED")
      return status
    } catch (e) {
      console.error(e)
    }
  }
}