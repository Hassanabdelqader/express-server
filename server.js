const express = require('express')
require("dotenv").config();
const app = express()

function name(params) {
    console.log('hasan')
}

app.get('/', (req,res,next)=>{
    res.status(200).send('Hello World !')
})
app.post('/person', (req,res,next)=>{
    
    let name = req.query.name;
    let age = Number(req.query.age);
    let gender = req.query.gender;
    age += 5;
    
    res.status(201).send(""+age)
    
})
 function start(port) {
    
            
        let PORT = process.env.PORT || port 
        app.listen(PORT , ()=>{
            console.log(`listening ... @${PORT}`)
        })

}

module.exports ={
    app,
    start
}