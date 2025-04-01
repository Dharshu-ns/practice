const express = require('express');
const app = express();

const port = "3000"

app.use((req,res)=>{
    res.send("Hello");
})

app.listen(port, ()=>{
console.log(`server is running on the port ${port}`)
})
app.use((err, req, res, next)=>{
    console.log(err.stack);
    res.send(500).json({message:"Error!"})
})