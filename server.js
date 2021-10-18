//Install express server
const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use('/', serveStatic(path.join(__dirname, '/dist')));

app.get(/.*/, (req, res) =>
    res.sendFile(path.join(__dirname, '/dist/index.html')),
);

const port = process.env.PORT || 8080;

// Start the app by listening on the default Heroku port
app.listen(port);
console.log(`app is listening on port ${port}`);