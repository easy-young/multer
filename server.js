const express = require('express');
const nunjucks = require('nunjucks');
const multer = require('multer');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const upload = multer({
    storage:multer.diskStorage({
        destination:(req, file, done)=>{
            done(null, 'uploads/');
        },
        filename:(req, file, done)=>{
            const ext = path.extname(file.originalname);
            const filename = path.basename(file.originalname, ext) + '_' + Date.now() + ext;
            done(null, filename);
        }
    }),
    limits:{fileSize: 5*1024*1024} // 5MB
});

app.set('view engine', 'html');
nunjucks.configure('views', {
    express:app,
    watch:true
});

app.get('/single', (req, res)=>{
    res.render('single');
});

app.get('/axios', (req, res)=>{
    res.render('axios');
});

app.get('/array', (req, res)=>{
    res.render('array');
});

app.get('/uploads', (req, res)=>{
    res.render('uploads');
});

app.post('/upload', upload.single('upload'), (req, res)=>{
    console.log(req.file);
    console.log(req.body);
    res.send('upload');
});

app.post('/upload2', upload.array('upload'), (req, res)=>{
    console.log(req.files);
    console.log(req.body);
    res.send('upload');
});

app.post('/upload3', upload.fields([{name:'upload1'},{name:'upload2'},{name:'upload3'}]), (req, res)=>{
    res.send('upload');
});

app.listen(4000, ()=>{
    console.log('server start 4000');
});