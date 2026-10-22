const express =require ('express')
const bodyParser =require ('body-parser')
const cors =require ('cors')
const mongoose = require('mongoose');

const server =express()

server.use(express.urlencoded({extended:true}))
server.use(express.json())

server.use(bodyParser.json())
server.use(cors())

server.get('/',(request,response)=>{
    response.send('server is working fine !!')
})


//admin


//Website


//Application

server.listen(8000,()=>{
    mongoose.connect('mongodb+srv://rajveergehlot592_db_user:BUkNGMkmbAlltQLz@cluster0.r735jai.mongodb.net')
  .then(() => console.log('Connected!'));
    
})
