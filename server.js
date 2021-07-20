const express = require('express'); 
const app = express();
const port = 8000;

require('./server/config/mongoose.config');

app.use(express.json(), express.urlencoded({extended:true}))

const AllJokeRoutes = require("./server/routes/joke.route");
AllJokeRoutes(app);

app.listen(port, () => console.log('Server.js up and running on port 8000'))