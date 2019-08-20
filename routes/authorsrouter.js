var exp = require('express');
const router = exp.Router();    

var authors = require('../model/authorsmodel');

router.get("/",(req,res)=>{
    authors.find({},(err,result)=>{
        if (err) throw err;
        else
        res.render(
            "authors",
            {
                pageTitle:"Library",
                nav:[
                    {link:"/books", title:"Books"}, 
                    {link:"/authors", title:"Authors"},
                    {link:"/books/add", title:"Add Books"},
                    {link:"/books/update", title:"Edit/Delete Books"},                        
                    {link:"/logout", title:"Logout"}
                ],
                authorsarr:result
            }
        );
    }) 
})

router.get("/:id",(req,res)=>{
    authors.find({},(err,result)=>{
        if (err) throw err;
        else
        res.render(
            "authordetail",
            {
                pageTitle:"Library",
                nav:[
                    {link:"/books", title:"Books"}, 
                    {link:"/authors", title:"Authors"},
                    {link:"/books/add", title:"Add Books"},
                    {link:"/books/update", title:"Edit/Delete Books"},                        
                    {link:"/logout", title:"Logout"}
                ],
                author:result[req.params.id]
            }
        );
    })
})


module.exports=router;