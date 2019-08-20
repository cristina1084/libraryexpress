var exp = require('express');
const router = exp.Router();    
var bodyparser = require('body-parser');
var books = require('../model/booksmodel');
router.use(bodyparser.urlencoded({extended:true}));

router.get("/",(req,res)=>{
    books.find({},(err,result)=>{
        if (err) throw err;
        else
            res.render(
                "books",
                {
                    pageTitle:"Library",
                    nav:[
                        {link:"/books", title:"Books"}, 
                        {link:"/authors", title:"Authors"},
                        {link:"/signup", title:"Sign Up"},
                        {link:"/login", title:"Login"},
                        {link:"/books/add", title:"Add Books"},
                        {link:"/books/update", title:"Edit/Delete Books"}
                    ],
                    booksarr:result
                }
            );
    }) 
})

router.get("/add",(req,res)=>{
    res.render(
        "addbook",
        {
            pageTitle:"Library",
            nav:[
                {link:"/books", title:"Books"}, 
                {link:"/authors", title:"Authors"},
                {link:"/signup", title:"Sign Up"},
                {link:"/login", title:"Login"},
                {link:"/books/add", title:"Add Books"},
                {link:"/books/update", title:"Edit/Delete Books"}
            ]
        }
    ); 
})

router.post("/add",(req,res)=>{
    var b1 = new books();
    b1.bookTitle = req.body.title;
    b1.author = req.body.author;
    b1.genre = req.body.genre;
    b1.description = req.body.description;
    b1.price = req.body.price;
    b1.urlToImage = req.body.burl;
    b1.save((err)=>{
        if (err) throw err;
        else{
            console.log("Book added");
            res.redirect("/books")
        }
    })
})

router.get("/update",(req,res)=>{
    books.find({},(err,result)=>{
        if (err) throw err;
        else
            res.render(
                "updatebook",
                {
                    pageTitle:"Library",
                    nav:[
                        {link:"/books", title:"Books"}, 
                        {link:"/authors", title:"Authors"},
                        {link:"/signup", title:"Sign Up"},
                        {link:"/login", title:"Login"},
                        {link:"/books/add", title:"Add Books"},
                        {link:"/books/update", title:"Edit/Delete Books"}
                    ],
                    booksarr:result
                }
            );
    }) 
})

router.get("/update/:bid",(req,res)=>{
    books.find({bookTitle:req.params.bid},(err,result)=>{
        if (err) throw err;
        else res.render(
            "editbook",
            {
                pageTitle:"Library",
                nav:[
                    {link:"/books", title:"Books"}, 
                    {link:"/authors", title:"Authors"},
                    {link:"/signup", title:"Sign Up"},
                    {link:"/login", title:"Login"},
                    {link:"/books/add", title:"Add Books"},
                    {link:"/books/update", title:"Edit/Delete Books"}
                ],
                book: result
            });
    })
})

router.post("/edit",(req,res)=>{
    books.updateOne({bookTitle:req.body.title} ,{$set:{
        bookTitle:req.body.title,
        author : req.body.author,
        genre : req.body.genre,
        description : req.body.description,
        price : req.body.price,
        urlToImage : req.body.url
    }}, (err,result)=>{
        if (err) throw err;
        else{
            books.find({},(err,result)=>{
                if (err) throw err;
                else
                    res.redirect("/books/update")
            })
        }
    }) 
})

router.get("/delete/:bid",(req,res)=>{
    books.deleteOne({bookTitle:req.params.bid},(err,result)=>{
        if (err) throw err;
        else
        {
            books.find({},(err,result)=>{
                if(err) throw err;
                else
                    res.redirect("/books/update")
            })
        }
    })
})

router.get("/:id",(req,res)=>{
    console.log(req.params.id);
    
    books.find({bookTitle:req.params.id},(err,result)=>{
        if (err) throw err;
        else{
            console.log(result);
            res.render(
                "readmore",
                {
                    pageTitle:"Library",
                    nav:[
                        {link:"/books", title:"Books"}, 
                        {link:"/authors", title:"Authors"},
                        {link:"/signup", title:"Sign Up"},
                        {link:"/login", title:"Login"},
                        {link:"/books/add", title:"Add Books"},

                    ],
                    book:result
                }
            );
        }
    })
})


module.exports=router;