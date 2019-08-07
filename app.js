
const exp = require('express');
const app = exp();
app.set("view engine","ejs");  
app.set("views","./src/views");  
const path = require('path');
//var bodyparser = require('body-parser');
var bookrouter = require('./routes/booksrouter');
var authorrouter = require('./routes/authorsrouter');

//app.use(bodyparser.urlencoded({extended:true}));

app.use(exp.static(path.join(__dirname+"/public")));    //sending static files

app.get("/",(req,res)=>{
    res.render(               //rendering
        "index",
        {
            pageTitle:"Library",
            nav:[
                {link:"/books", title:"Books"}, 
                {link:"/authors", title:"Authors"}
            ]
        }
    ); 
})

app.use("/books", bookrouter);

app.use("/authors",authorrouter);

app.listen(8080,()=>{
    console.log("Listening");
})
