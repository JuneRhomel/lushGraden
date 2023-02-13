const express = require("express")

const router = express.Router()

// getting  all
router.get("/", (req,res) => {
    res.send("hello Word")
})
// getting  one
router.get("/:id", (req,res) => {
    res.send(req.params.id)
})
// create one
router.post("/",(req,res) =>{

})
// update one
router.patch("/",(req,res) =>{

})
// delete one 
router.delete("/:id",(req,res) =>{

})
module.exports = router