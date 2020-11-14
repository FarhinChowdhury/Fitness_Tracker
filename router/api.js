const workout = require("../models/workouts.js");

module.exports = function(app){
    app.get("/api/workouts", async function(req, res){
        const result = await workout.find({})
        res.send(result)
    })

    app.post("/api/workouts", async function(req, res){
        //console.log(data)
        const result = await workout.create({})
        
        res.send(result)
    })

    app.put('/api/workouts/:id', async function(req, res) {

        console.log(`[put api]:`,req.params.id, req.body)

        // Getting workout and adding exercise data to it
        const result = await workout.findOneAndUpdate({_id: req.params.id}, { $push: {exercises: req.body} }, { new: true})
        console.log(`[app.put]:`,result)

        res.send(result)
    })
    //view the combined weight of multiple exercises on the stats page
    app.get("/api/workouts/range", async function(req, res){
        const response= await workout.find({})
        res.send(response)
    })
    
}