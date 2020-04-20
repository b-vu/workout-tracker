const db = require("../models");
const path = require("path");

module.exports = function(app) {
    //api routes

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(dbResult => {
            res.json(dbResult);
        }).catch(err => {
            res.json(err);
        });
    });

    app.put("/api/workouts/:id", (req, res) => {
        console.log(req.params.id);
        console.log(req.body);

        db.Workout.updateOne({_id: req.params.id}, {$push: {"exercises": req.body}}).then(dbResult => {
            res.json(dbResult);
        }).catch(err => {
            res.json(err);
        });
    });

    //html routes

    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
};