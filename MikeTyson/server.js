//su dung thu vien http cua NodeJS
var http= require('http')

//tao mot server
var server = http.createServer(function(req,res){
    // set response header
    res.writeHead(200, { 'Content-Type': 'text/html' }); //hiểu phần h1 href các thứ ...

    if(req.url =='/'){
        res.write("<h1>Home page</h1>")
        res.write("<img src ='https://cdn.discordapp.com/attachments/943685902536937498/1034395735711547412/unknown.png'>")    
        res.write("<br><a href='/student'>Student page</a>")
    }else if(req.url=='/student'){
        res.write("Student")
    }else if (req.url == '/data') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ message: "Hello World"}));  
    }
    else{
        res.write("page not found!")
    }
    res.end()
})

//start server o mot port
const PORT = 5000
server.listen(PORT)
console.log("Server is runing!")


//req la dữ liệu gửi đến, res là gửi về