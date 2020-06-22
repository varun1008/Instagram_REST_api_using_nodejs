const mongoose = require("mongoose")

const storySchema = new mongoose.Schema({
    username : String,
    image1 : String,
    image2 : String,
    caption : String,
    comments:[{
        name : String,
        comment:String,
        created : {
            type : Date,
            created : Date.now() 
        }
    }]
    
    
})


const story = new mongoose.model("story", storySchema)

module.exports = story;