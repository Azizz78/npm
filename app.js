const http = require('http');
const server = http.createServer((req,res)=>{
  console.log(req)
  res.setHeader("Content-Type","text/html")
  const url=req.url
  if(url==="/"){
    res.write(`<h1>i learned about installing npm and nodemon</h1>`)
  }

})


let Port=6003;
server.listen(Port,()=>{
 console.log(` sever running on http://localhost:${Port}`)
})

