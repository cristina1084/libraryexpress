var exp = require('express');
const router = exp.Router();
var user = require('../model/usersmodel');

router.get("/",(req,res)=>{
    res.render(
        "signup",
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