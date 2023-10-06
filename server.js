const express = require('express');
const path = require('path');

const app = express();
// serve up production assets
app.use(express.static('client/build'));
// let the react app to handle any unknown routes 
// serve up the index.html if express does'nt recognize the route
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
// if not in production use the port 5000
const PORT = process.env.PORT || 5000;
console.log('server started on port:',PORT);
app.listen(PORT);