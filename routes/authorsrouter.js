var authors_arr= [
{
    "author":"Blake Crouch",
    "urlToImage":"https://images-na.ssl-images-amazon.com/images/I/81E0o11MkdL.jpg"
},
{
    "author":"Megan Miranda",
    "urlToImage":"https://images-eu.ssl-images-amazon.com/images/I/51oUPwdYMSL.jpg"
},
{
    "author":"Tim Mason",
    "urlToImage":"https://images-na.ssl-images-amazon.com/images/I/91mn-fan6-L.jpg"
},
{
    "author":"Kelsey Rae Dimberg",
    "urlToImage":"https://images-na.ssl-images-amazon.com/images/I/81NQbUYPMoL.jpg"
},
{
    "author":"Sarah Gailey ",
    "urlToImage":"https://images-eu.ssl-images-amazon.com/images/I/51ooe1pV25L.jpg"
},
{
    "author":"Bethany Chase",
    "urlToImage":"https://images-eu.ssl-images-amazon.com/images/I/41PVmfIoqpL.jpg"
},
{
    "author":"Chuck Wendig",
    "urlToImage":"https://m.media-amazon.com/images/I/81Jnvi76gOL._AC_UL436_.jpg"
},
{
    "author":" Lisa Grunwald ",
    "urlToImage":"https://m.media-amazon.com/images/I/91Bay10Q6iL._AC_UL436_.jpg"
},
{
    "author":" Christina Henry",
    "urlToImage":"https://images-na.ssl-images-amazon.com/images/I/51DQ1-LIMSL._SX326_BO1,204,203,200_.jpg"
},
{
    "author":"Amber Scorah",
    "urlToImage":"https://m.media-amazon.com/images/I/61FCYPxeC4L._AC_UL436_.jpg"
},
{
    "author":"Charles Fishman",
    "urlToImage":"https://m.media-amazon.com/images/I/7110rLwXFoL._AC_UL436_.jpg"
},
{
    "author":"Nora Samaran",
    "urlToImage":"https://m.media-amazon.com/images/I/81sWMDcnY7L._AC_UL436_.jpg"
}]

var exp = require('express');
const router = exp.Router();    

router.get("/",(req,res)=>{
    res.render(
        "authors",
        {
            pageTitle:"Library",
            nav:[
                {link:"/books", title:"Books"}, 
                {link:"/authors", title:"Authors"}
            ],
            authorsarr:authors_arr
        }
    ); 
})

router.get("/:id",(req,res)=>{
    res.render(
        "authordetail",
        {
            pageTitle:"Library",
            nav:[
                {link:"/books", title:"Books"}, 
                {link:"/authors", title:"Authors"}
            ],
            author:authors_arr[req.params.id]
        }
    );
})


module.exports=router;