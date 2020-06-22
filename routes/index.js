const express = require("express")
const router  = express.Router();
const db      = require("../models/db")   

const functions = require("../functions/functions")


// view all stories
router.get("/", functions.getstory);


// Add a new story
router.post("/", functions.poststory);


// Add a new comment to the story
router.post("/:id/comment", functions.postcomment)


// View the story individually
router.get("/:id", functions.getindividualstory)


// Update the story
router.put("/:id", functions.updatestory )


// update comment
router.put("/:id/comment/:cid", functions.updatecommentfn)


// Delete story
router.delete("/:id", functions.deletestory)


// Delete Comment
router.delete("/:id/comment/:cid", functions.deletecommentfn)



module.exports = router