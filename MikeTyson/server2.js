var express = require('express')
var app = express()

app.set('view engine','hbs')
app.use(express.urlencoded({extended:true}))

app.get('/',function (req,res){
    res.render('home')
})

app.get('/student',function(req,res){
    res.render('student')
})

app.post('/register',function(req,res){
    let name = req.body.txtName
    let country = req.body.country
    res.render('confirm',{'name':name, 'country':country})

    var fs = require('fs');

    let name_country = name + " ; " + country;
    fs.writeFile('text.txt', name_country, function (err) {
        if (err) 
        console.log(err);
        else
        console.log('Write operation complete.');
    });
    //c2:
    const content = name + ";" + country
    fs.writeFileSync("data.txt",content)
    res.render('confirm',{'name': name,'country':country})
})

app.get('/readFile',function(req,res){
    var fs = require('fs');
    const content = fs.readFileSync("data.txt","utf-8")
    let a = content.split(";")
    res.render("readFile",{'name':a[0],'country':a[1]})
})

const PORT = 5000
app.listen(PORT)
console.log("server is running!")