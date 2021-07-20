const Joke = require("../models/joke.model");

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json(newJoke))
        .catch(err => res.json({message: 'Something errored in create Joke', error: err}))
}

module.exports.findAllJoke = (req, res) => {
    Joke.find()
        .then(allJokes => res.json(allJokes))
        .catch(err => res.json({message: 'Something errored in getting all Jokes', error: err}))
}

module.exports.findByIdJoke = (req, res) => {
    Joke.find({_id: req.params._id})
        .then(byIDJokes => res.json(byIDJokes))
        .catch(err => res.json({message: 'Something errored in getting Joke by id', error: err}))
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params._id}, req.body, {new: true})
        .then(updatedJoke => res.json(updatedJoke))
        .catch(err => res.json({message: 'Something errored in updating Joke by id', error: err}))
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params._id})
        .then(deletedJoke => res.json(deletedJoke))
        .catch(err => res.json({message: 'Something errored in deleting Joke by id', error: err}))
}