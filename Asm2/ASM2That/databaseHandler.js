
const { ObjectId } = require('bson')
var mongoClient = require('mongodb').MongoClient
var url = 'mongodb+srv://TonyDo611:chopbeo@cluster0.nhz8wbb.mongodb.net/?retryWrites=true&w=majority'

async function getDB() {
    let client = await mongoClient.connect(url)
    let db = client.db("GCH1003")
    return db
}

async function insertNewProduct(newProduct) {
    let db = await getDB()
    let id = await db.collection("products").insertOne(newProduct)
    return id 
}

async function getAllProducts() {
    let db = await getDB()
    let results = await db.collection("products").find().toArray()
    return results
}

async function deleteProductById(id) {
    let db = await getDB()
    await db.collection("products").deleteOne({ _id: ObjectId(id) })
}

async function updateProduct(id, name, price, picUrl) {
    let db = await getDB()
    await db.collection("products").updateOne({ _id: ObjectId(id) },
        { $set: { "name": name, "price": price, "picture": picUrl } })
}

async function findProductById(id) {
    let db = await getDB()
    const productToEdit = await db.collection('products').findOne({ _id: ObjectId(id) })
    return productToEdit
}

async function findProductByName(nameSearch){
    let db = await getDB()
    const result = await db.collection("products").find({name: new RegExp(nameSearch, 'i')}).toArray() //i dung de tim kiem ko can chinh xac
    return result;
}

module.exports = {insertNewProduct, getAllProducts, deleteProductById, updateProduct, findProductById, findProductByName}