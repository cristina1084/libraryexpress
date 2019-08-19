var exp = require('express');
const router = exp.Router();    

var books = require('../model/booksmodel');

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
                        {link:"/books/add", title:"Add Books"}
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
                {link:"/books/add", title:"Add Books"}
            ]
        }
    ); 
})

router.get("/:id",(req,res)=>{
    books.find({},(err,result)=>{
        if (err) throw err;
        else
            res.render(
                "readmore",
                {
                    pageTitle:"Library",
                    nav:[
                        {link:"/books", title:"Books"}, 
                        {link:"/authors", title:"Authors"},
                        {link:"/signup", title:"Sign Up"},
                        {link:"/login", title:"Login"},
                        {link:"/books/add", title:"Add Books"}
                    ],
                    book:result[req.params.id]
                }
            );
    })
})


module.exports=router;