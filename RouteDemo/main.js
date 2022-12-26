var express = require('express')
var app = express()

app.set('view engine','hbs')
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));

var customerService = require('./customerService')
app.use("/customer",customerService) //vs nhung thg có địa chỉ bắt đầu = customer thì sẽ đi qua customer service trc 

app.get('/',(req,res)=>{
    res.render('home')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log("Server is running at: ", PORT)
})