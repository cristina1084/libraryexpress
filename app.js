
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
var mongo = require('mongoose');
var url = "mongodb+srv://cristina1084:Cristina1084@cluster0-qjdmb.mongodb.net/library?retryWrites=true&w=majority";
mongo.connect(url, {useNewUrlParser:true}, (err)=>{
    if (err) throw err;
    else console.log("Database connected");
})
//app.use(bodyparser.urlencoded({extended:true}));

app.use(exp.static(path.join(__dirname+"/public")));    //sending static files

app.get("/",(req,res)=>{
    res.render(               //rendering
        "login",
        {
            pageTitle:"Library",
            nav:[
                {link:"/signup", title:"Sign Up"},
                {link:"/login", title:"Login"}
            ]
        }
    ); 
})

app.get("/index",(req,res)=>{
    res.render(               //rendering
        "index",
        {
            pageTitle:"Library",
            nav:[
                {link:"/books", title:"Books"}, 
                {link:"/authors", title:"Authors"},
                {link:"/books/add", title:"Add Books"},
                {link:"/books/update", title:"Edit/Delete Books"},
                {link:"/logout", title:"Logout"}
            ]
        }
    ); 
})

app.get("/logout",(req,res)=>{
    res.redirect("/");
})


app.use("/books", bookrouter);

app.use("/authors",authorrouter);

app.use("/signup", signuprouter);

app.use("/login", loginrouter);


app.listen(process.env.PORT || 8080,()=>{
    console.log("Listening");
})
