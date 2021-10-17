const path = requiere('path');
const express = requiere('express');
const app = express();

// Serve stativ files
app.use(express.static(__dirname + '/dist/smart75front'));

// Send all request to index.html
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/smart75front/index.html'));
});

// default Heroku port
app.listen(proccess.env.PORT || 5000);
