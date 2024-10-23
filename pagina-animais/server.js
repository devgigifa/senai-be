// import express
const express = require('express')
const app = express()

// import path
const path = require('path')

// port that would be use
const port = 3000

app.use(
    express.static(path.join(__dirname, 'public'))
)

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views', 'bufalo_page.html'))
})

app.listen(port, ()=>{
    console.log(`Servidor rodando no endereço: localhost:${port}`)
})