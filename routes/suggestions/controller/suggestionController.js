const { isAsyncFunction } = require("util/types")
const Suggestion = require("../model/Suggestion")

async function getAllSuggestions(req,res,next){
    try {
        let allSuggestions = await Suggestion.find({})
        res.json({message:"Found All Suggestions", allSuggestions})
    } catch (error) {
        res.json({message:"failed", error:error.message})
    }
}
async function getSingleSuggestion(req,res,next){
    try {
        let singleSuggestion = await Suggestion.find({_id:req.params.id})
        res.json({message:"found suggestion",singleSuggestion})
    } catch (error) {
        res.json({message:"failed",error:error.message})
    }
}
async function createSuggestion(req,res,next){
    try {
        let newSuggestion = new Suggestion({
            title:req.body.title,
            author:req.body.author,
            suggestion:req.body.suggestion,
            likes:req.body.likes
        })
        await newSuggestion.save()
        res.json({message:"creasted new suggestion",newSuggestion})
    } catch (error) {
        res.json({message:"failed",error:error.message})
    }
}
async function updateSuggestion(req,res,next){
    try {
        let updatedSuggestion = Suggestion.findByIdAndUpdate({_id:req.params.id},req.body.title,req.body.suggestion,{new:true})
        res.json({message:"successfully updated",updatedSuggestion})
    } catch (error) {
        res.json({message:"failed",error:error.message})
    }
}
async function deleteSuggestion(req,res,next){
    try {
        let deletedSuggestion = Suggestion.findByIdAndDelete(req.params.id)
        res.json({message:"deleted suggestion",deletedSuggestion})
    } catch (error) {
        res.json({message:"failed",error:error.message})
    }
}
async function getSuggestionsByAuthor(req,res,next){
    try {
        const {author} = req.query
        let suggestion =await Suggestion.find({author})
        res.json({message:"found",suggestion})
    } catch (error) {
        res.json({message:"failed",error:error.message})
    }
}


module.exports = {
    getAllSuggestions,
    getSingleSuggestion,
    createSuggestion,
    updateSuggestion,
    deleteSuggestion,
    getSuggestionsByAuthor
}