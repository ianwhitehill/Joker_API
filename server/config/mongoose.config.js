const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/jokes_api", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Found mongoose'))
    .catch(err => console.log("ERROR when trying to connect to mongoose", err))
