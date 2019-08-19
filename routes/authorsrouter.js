var authors_arr= [
{
    "author":"Blake Crouch",
    "urlToImage":"https://pbs.twimg.com/profile_images/768801098366726148/mWVdLQjZ.jpg"
},
{
    "author":"Megan Miranda",
    "urlToImage":"https://pbs.twimg.com/profile_images/539094546412351488/2lkOevAs.jpeg"
},
{
    "author":"Tim Mason",
    "urlToImage":"https://d17lzgq6gc2tox.cloudfront.net/contributor/head_shot/square/8617137.jpg?1549598457"
},
{
    "author":"Kelsey Rae Dimberg",
    "urlToImage":"https://www.gannett-cdn.com/presto/2019/06/10/PMJS/72c16bcd-0db2-4018-8534-95000f0fe515-Kelsey_Rae_Dimberg_Author_Photo.jpg?width=540&height=&fit=bounds&auto=webp"
},
{
    "author":"Sarah Gailey ",
    "urlToImage":"https://justloveromance.files.wordpress.com/2017/06/sarah-gailey.jpg?w=676"
},
{
    "author":"Bethany Chase",
    "urlToImage":"https://images.gr-assets.com/authors/1422235385p8/8384288.jpg"
},
{
    "author":"Chuck Wendig",
    "urlToImage":"https://upload.wikimedia.org/wikipedia/commons/c/cd/Chuck_Wendig_by_Gage_Skidmore.jpg"
},
{
    "author":" Lisa Grunwald ",
    "urlToImage":"https://images.gr-assets.com/authors/1549080254p8/192970.jpg"
},
{
    "author":" Christina Henry",
    "urlToImage":"http://ecx.images-amazon.com/images/I/61SOO-q2MnL._UX250_.jpg"
},
{
    "author":"Amber Scorah",
    "urlToImage":"https://peopledotcom.files.wordpress.com/2019/06/amber-alternate-headshot-credit-lee-towndrow.jpg?w=1800&h=2700"
},
{
    "author":"Charles Fishman",
    "urlToImage":"https://d28hgpri8am2if.cloudfront.net/author_images/8674/charles-fishman-49243647.jpg"
},
{
    "author":"Nora Samaran",
    "urlToImage":"https://0.gravatar.com/avatar/08c46f78b2ca2cb40af63f28174a70aa?s=225&d=identicon&r=G"
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
                {link:"/authors", title:"Authors"},
                {link:"/signup", title:"Sign Up"},
                {link:"/login", title:"Login"},
                {link:"/books/add", title:"Add Books"}
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
                {link:"/authors", title:"Authors"},
                {link:"/signup", title:"Sign Up"},
                {link:"/login", title:"Login"},
                {link:"/books/add", title:"Add Books"}
            ],
            author:authors_arr[req.params.id]
        }
    );
})


module.exports=router;