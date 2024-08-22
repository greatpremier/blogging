const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express();
const PORT = 5000
var keep;
var uri = 'mongodb://localhost:27017/examplify'

mongoose.connect(uri)
const postSchema = new mongoose.Schema({
    title: String,
    content: String
})
const Post = mongoose.model('Post', postSchema)

app.use(cors())
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.json({"message": "welcome to server premier", keep})
})
app.post('/', (req, res) => {
    console.log(req.body)
    keep = req.body
})

app.get('/test', (req, res) => {
    res.send("welcoming you to server!")
})

app.route('/posts')
   .get(async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
   })  
   .post(async (req, res) => {
    const {title, content} = req.body;
    const newPost = new Post({ title, content });
    await newPost.save();
    console.log(newPost)
    res.json(newPost)
   })

app.listen(PORT, () => {
    console.log(`connected to port: ${PORT}`)
})
