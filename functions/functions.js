const db = require("../models/db")
const expressEjsLayouts = require("express-ejs-layouts")

exports.getstory = (req,res) => {
    db.story.find()
    .then( (story) =>{
        res.json(story)
    })
    .catch((err) =>{
        res.send(err)
    })
}   

exports.poststory = (req,res) =>{
    db.story.create(req.body)
    .then( (newstory) =>{
        res.status(201).json(newstory)
    })
    .catch( (err) =>{
        res.send(err)
    })
}

exports.postcomment = (req,res) =>{
    const createcomment = {
        $push : {
            comments:req.body.comments
        }
    }

    db.story.findOneAndUpdate({_id:req.params.id},createcomment,{new:true})
    .then((story)=>{
        res.json(story)
    })
    .catch( (err) =>{
        res.send(err)
    })
}

exports.getindividualstory = (req,res) => {
    db.story.findById(req.params.id)
    .then( (story) =>{
        res.json(story);
    })
    .catch( (err) =>{
        res.send(err)
    })
}

exports.updatestory = (req,res) =>{
   
    db.story.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
    .then((story)=>{
        res.json(story)
    })
    .catch( (err) =>{
        res.send(err)
    })
}

exports.updatecommentfn = (req,res) =>{
    const updatecomment =   {"$set":{"comments.$[commentFilter].name" : req.body.comments.name,
                                     "comments.$[commentFilter].comment":req.body.comments.comment}};

    db.story.findOneAndUpdate({ "_id":req.params.id },updatecomment,{"arrayFilters":[{"commentFilter._id":req.params.cid}] , new : true} )
    .then((story)=>{
        res.json(story)
    })
    .catch( (err) =>{
        res.send(err)
    })
}

exports.deletestory = (req,res) =>{
    db.story.remove({_id:req.params.id})
    .then((story)=>{
        res.json("Deleted")
    })
    .catch( (err) =>{
        res.send(err)
    })
}

exports.deletecommentfn = (req,res) =>{
    const deletecomment = { $pull : { comments : { _id : req.params.cid } } }
     db.story.findOneAndUpdate({_id:req.params.id},deletecomment  ) 
     .then((story)=>{
         res.json("Deleted the comment")
     })
     .catch( (err) =>{
         res.send(err)
     })
 }


module.exports = exports;

