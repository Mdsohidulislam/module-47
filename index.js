const express =require('express');
const app =express();

app.get('/',(req,res)=>{res.send('<h1>Hello world</h1>')})



app.listen(3000,()=>{console.log('port is running on 3000');})