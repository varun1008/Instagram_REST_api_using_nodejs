require("dotenv").config()

const mongoose = require("mongoose")
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser: true , useUnifiedTopology: true , useFindAndModify:false})        
const db = mongoose.connection;
db.on('error',(error) => {console.error(err)});
db.once('open', () =>{ console.log("connected to database")});
mongoose.Promise = Promise;

const story = require("./story")
module.exports.story = story;
