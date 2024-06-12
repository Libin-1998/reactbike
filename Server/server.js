var express=require('express')
var mongoose=require('mongoose')
const cors=require('cors')
const userRoutes = require('./routes/userRoutes')
const shopRoutes = require('./routes/shopRoutes')
const pardsRoutes = require('./routes/pardsRoutes')
const loginRoutes = require('./routes/loginRoutes')
const cartRoutes = require('./routes/cartRoutes')
const eventRoutes = require('./routes/eventRoutes')
const registerRoutes = require('./routes/registerRoutes')
const volunteerRoutes = require('./routes/volunteerRoutes')

var app=express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// connecting to DB
mongoose.connect('mongodb+srv://libinninteen98:EhF3Fs510HyhC9cd@cluster0.4e1hgmr.mongodb.net/bikedatabase?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('connected successfully');
})
.catch(()=>{
    console.log('connection error');
})

app.use('/api/users',userRoutes)
app.use('/api/shops',shopRoutes)
app.use('/api/spare',pardsRoutes)
app.use('/api/logs',loginRoutes)
app.use('/api/carts',cartRoutes)
app.use('/api/bike',eventRoutes)
app.use('/api/reg',registerRoutes)
app.use('/api/volregister',volunteerRoutes)



app.get('/',(req,res)=>{
    res.send('Home')
})


app.listen(8000,()=>{
    console.log('Running on 8000');
})