var exp = require('express');
const router = exp.Router();

router.get("/",(req,res)=>{
    res.render(
        "login",
        {
            pageTitle:"Library",
            nav:[
                {link:"/books", title:"Books"}, 
                {link:"/authors", title:"Authors"},
                {link:"/signup", title:"Sign Up"},
                {link:"/login", title:"Login"},
                {link:"/books/add", title:"Add Books"}
            ]
        })
})

router.post("/",(req,res)=>{
    res.render(
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
        })
})

module.exports = router;