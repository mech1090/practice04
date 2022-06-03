const express = require('express')
const cors = require('cors')
const config = require('config')
const { default: mongoose } = require('mongoose')

require('./db')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    res.send('OOK')
})

app.get('*',(req,res)=>{
    res.send('BAD_RESOURCE')
})

port = config.get('port') || 8080

mongoose.connection.once('open',()=>{
    app.listen(port,()=>{
        console.log(`Server running on port ${port}`)
    })

    console.log('DB CONNECTED')
})

