const JokeController = require("../controllers/joke.controller")

module.exports = app => {
    app.post("/api/jokes/create", JokeController.createJoke);
    app.get("/api/jokes", JokeController.findAllJoke)
    app.get("/api/jokes/:_id", JokeController.findByIdJoke)
    app.put("/api/jokes/update/:_id", JokeController.updateJoke)
    app.delete("/api/jokes/delete/:_id", JokeController.deleteJoke)
}