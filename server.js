const express = require('express');
const path = require('path');
const multer = require('multer');
const ffmpeg = require('fluent-ffmpeg');
// const {creat}

// const upload = multer({
//     storage: multer.memoryStorage(),
//     limits: { fileSize: 100 * 1024 * 1024 }
// });

storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname+'/public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now()+file.originalname)
    }
});

upload = multer({
    storage: storage,
    limits: { fileSize: 100 * 1024 * 1024 }
})

const app = express();
// serve up production assets
app.use(express.static('build'));
// let the react app to handle any unknown routes 
// serve up the index.html if express does'nt recognize the route
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.post('/api/upload', upload.single('data'), async (req, res) => {
    console.log("hi")
    res.sendStatus(200);
})

// if not in production use the port 5000
const PORT = process.env.PORT || 5000;
console.log('server started on port:',PORT);
app.listen(PORT);