const express = require('express')
const format = require('date-format');
const app = express()
const PORT = 4000 || process.env.PORT

app.get('/', (req, res) => {
   // res.send('<h1>Hello harshada!</h1>')//just sending a response in form of statement
    res.status(201).send("everything is oka")
  })

 

  app.get("/api/v1/instagram",(req,res)=>{
    const instaSocial={
        username:"harshadabhandrae2215",
        followers:78,
        follows:88,
        date:format.asString('dd[MM}-hh.mm.ss',new Date()),
    }

    res.status(200).json({instaSocial})
   
  })
  app.get("/api/v1/facebook",(req,res)=>{
    const instaSocial={
        username:"harshad2215",
        followers:7,
        follows:889,
        date:format.asString('dd[MM}-hh.mm.ss',new Date()),
    }

    res.status(200).json({instaSocial})
   
  })
  app.get("/api/v1/linkedin",(req,res)=>{
    const instaSocial={
        username:"harndrae2215",
        followers:7844,
        follows:883,
        date:format.asString('dd[MM}-hh.mm.ss',new Date()),
    }

    res.status(200).json({instaSocial})
   
  })

  app.get("/api/v1/:token",(req,res)=>{
    console.log(req.params.token)
    res.status(200).json({params:req.params.token})
  })
  
app.listen(PORT,()=>{
    console.log(`Server is running at $(PORT)`);
});


