const exp = require('express');
const app = exp();
/* app.set("view engine","ejs");  
app.set("views","./src/views");   */
const path = require('path');

app.use(exp.static(path.join(__dirname+"/public")));    //sending static files

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/src/views/index.html");
})

app.listen(8080,()=>{
    console.log("Listening");
})
