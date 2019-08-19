
const exp = require('express');
const app = exp();
app.set("view engine","ejs");  
app.set("views","./src/views");  
const path = require('path');
//var bodyparser = require('body-parser');
var bookrouter = require('./routes/booksrouter');
var authorrouter = require('./routes/authorsrouter');
var signuprouter = require('./routes/signup')
var loginrouter = require('./routes/login')

//app.use(bodyparser.urlencoded({extended:true}));

app.use(exp.static(path.join(__dirname+"/public")));    //sending static files

app.get("/",(req,res)=>{
    res.render(               //rendering
        "index",
        {
            pageTitle:"Library",
            nav:[
                {link:"/books", title:"Books"}, 
                {link:"/authors", title:"Authors"},
                {link:"/signup", title:"Sign Up"},
                {link:"/login", title:"Login"},
                {link:"/books/add", title:"Add Books"}
            ]
        }
    ); 
})

app.use("/books", bookrouter);

app.use("/authors",authorrouter);

app.use("/signup", signuprouter);

app.use("/login", loginrouter);


app.listen(8080,()=>{
    console.log("Listening");
})
