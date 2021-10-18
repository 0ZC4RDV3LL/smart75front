const path = requiere('path');
const express = requiere('express');
const app = express();

// Serve stativ files
app.use(express.static(__dirname + '/dist/smart75front'));

// Send all request to index.html
app.get('/', (req, res) =>
    res.sendFile('index.html',{root: 'dist/smart75front'}),
);

// default Heroku port
app.listen(proccess.env.PORT || 8080);
