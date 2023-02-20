let express = require('express');
let nunjucks = require('nunjucks');

let app = express();

nunjucks.configure('views',{
    autoescape: true,
    express: app
})

app.use(express.json())

app.get('/', async(req,res,next)=> {
    let data = {
        message: 'Hello world',
        layout: 'layout.njk',
        title: 'Nunjucks example'
    }
    res.render('index.njk', data)
})

app.listen(8000, ()=>{
    console.log('Listening on port 8000')
})


// Middleware
// 404 page - place at end of routing 
app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html', {root: __dirname})
})