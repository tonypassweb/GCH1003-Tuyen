var expesss = require('express')
const {insertNewProduct, getAllProducts, deleteProductById, updateProduct, findProductById, findProductByName} = require('./databaseHandler')
var app = expesss()


app.set('view engine','hbs')
app.use(expesss.urlencoded({extended:true}))
app.use(expesss.static('public'))

app.get('/',async (req,res)=>{
    let results = await getAllProducts()
    res.render('home',{'results':results})
})

app.get('/delete',async (req,res)=>{
    const id = req.query.id
    await deleteProductById(id)
    res.redirect('/all')
})

app.get('/new',(req,res)=>{
    res.render('newProduct')
})

app.post('/new',async (req,res)=>{
    const name = req.body.txtName
    const price = req.body.txtPrice
    const picUrl = req.body.txtPic
    const newProduct = {
        name :name,
        price: Number.parseFloat(price),
        picture: picUrl
    }
    await insertNewProduct(newProduct)
    res.redirect('/')

})

app.post('/edit',async(req,res)=>{
    const id = req.body.id
    const name = req.body.txtName
    const price = req.body.txtPrice
    const picUrl = req.body.txtPic
    await updateProduct(id, name, price, picUrl)
    res.redirect('/')
})


app.get('/edit',async(req,res)=>{
    const id = req.query.id
    const productToEdit = await findProductById(id)
    res.render("edit",{product:productToEdit})
})

app.post('/search',async(req,res)=>{
    const searchName = req.body.txtName
    const searchResult = await findProductByName(searchName) //await la đợi câu lệnh này thực hiện xong r mới chạy tiếp 
    res.render('allProducts',{results:searchResult})
})

const PORT = process.env.PORT || 5000
app.listen(PORT)
console.log("Server is running!")