const express=require("express");
const path=require("path");
const app=express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const internal = require("stream");

const port=8000;

//Mongoose specific configuration
mongoose.connect('mongodb://localhost:27017/danceContact', {useNewUrlParser: true, useUnifiedTopology: true});

//mongodb Schema
const contactSchema = new mongoose.Schema({
    name: String,
    fname:String,
    address:String,
    phone:String,
    email:String,
    decs:String
  });

//db model
const Contact = mongoose.model('Contact', contactSchema);

//Express specific Configuration
app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended:true }));


//Pug specific configuration
app.set("view engine","pug"); //set template engine
app.set("views",path.join(__dirname,"views")); //set engine directory

//End Points
app.get('/', (req, res)=>{ 
    const params = { }
    res.status(200).render('index.pug', params);
})
app.get('/contact', (req, res)=>{ 
    const params = { }
    res.status(200).render('contact.pug', params);
})
//Post to db
app.post('/contact', (req, res)=>{ 
    var myData=new Contact(req.body);
    myData.save().then(()=>{
        res.status(200).render('contact.pug');
    }).catch(()=>{
        res.status(400).send("This item is not save");
    })
})

app.get('/about', (req, res)=>{ 
    const params = { }
    res.status(200).render('about.pug', params);
})


//start server to listen port
app.listen(port,()=>{
    console.log(`Done at ${port}`);
});