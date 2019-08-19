var books_arr= [
{
    "bookTitle":"Recursion",
    "author":"Blake Crouch",
    "genre":"Thriller",
    "description":"That’s what New York City cop Barry Sutton is learning as he investigates the devastating phenomenon the media has dubbed False Memory Syndrome—a mysterious affliction that drives its victims mad with memories of a life they never lived.",
    "price":150,
    "urlToImage":"https://images-na.ssl-images-amazon.com/images/I/81E0o11MkdL.jpg"
},
{
    "bookTitle":"The Last House Guest",
    "author":"Megan Miranda",
    "genre":"Thriller",
    "description":"Littleport, Maine is like two separate towns: a vacation paradise for wealthy holidaymakers and a simple harbour community for the residents who serve them. Friendships between locals and visitors are unheard of - but that's just what happened with Avery Greer and Sadie Loman.",
    "price":200,
    "urlToImage":"https://images-eu.ssl-images-amazon.com/images/I/51oUPwdYMSL.jpg"
},
{
    "bookTitle":"The Darwin Affair",
    "author":"Tim Mason",
    "genre":"Thriller",
    "description":"London, June 1860: When an assassination attempt is made on Queen Victoria, and a petty thief is gruesomely murdered moments later—and only a block away—Chief Detective Inspector Charles Field quickly surmises that these crimes are connected to an even more sinister plot. Was Victoria really the assassin’s target? Are those closest to the Crown hiding something? And who is the shadowy figure witnesses describe as having lifeless, coal-black eyes?",
    "price":140,
    "urlToImage":"https://images-na.ssl-images-amazon.com/images/I/91mn-fan6-L.jpg"
},
{
    "bookTitle":"Girl in the Rearview Mirror",
    "author":"Kelsey Rae Dimberg",
    "genre":"Mystery",
    "description":"The young nanny for a prominent political family gets drawn into a web of deadly lies—including her own—in this stunning debut thriller with the menacing twists of Megan Abbott and the exquisite suspense of Laura Lippman.",
    "price":110,
    "urlToImage":"https://images-na.ssl-images-amazon.com/images/I/81NQbUYPMoL.jpg"
},
{
    "bookTitle":"Magic for Liars",
    "author":"Sarah Gailey ",
    "genre":"Mystery",
    "description":"Ivy Gamble has never wanted to be magic. She is perfectly happy with her life—she has an almost-sustainable career as a private investigator, and an empty apartment, and a slight drinking problem. It's a great life and she doesn't wish she was like her estranged sister, the magically gifted professor Tabitha.",
    "price":120,
    "urlToImage":"https://images-eu.ssl-images-amazon.com/images/I/51ooe1pV25L.jpg"
},
{
    "bookTitle":"One Night at the Lake",
    "author":"Bethany Chase",
    "genre":"Mystery",
    "description":"A tragedy on a hot summer night at a lake house forever alters the lives of two best friends—and the man they both love. But the truth isn’t as simple as it appears in this intricate novel of love, friendship, betrayal, and forgiveness in the tradition of Miranda Beverly-Whittemore’s Bittersweet.",
    "price":135,
    "urlToImage":"https://images-eu.ssl-images-amazon.com/images/I/41PVmfIoqpL.jpg"
},
{
    "bookTitle":"Wanderers",
    "author":"Chuck Wendig",
    "genre":"Science Fiction",
    "description":"A decadent rock star. A deeply religious radio host. A disgraced scientist. And a teenage girl who may be the world's last hope. In the tradition of The Stand and Station Eleven comes a gripping saga that weaves an epic tapestry of humanity into an astonishing tale of survival.",
    "price":354,
    "urlToImage":"https://m.media-amazon.com/images/I/81Jnvi76gOL._AC_UL436_.jpg"
},
{
    "bookTitle":"Time After Time",
    "author":" Lisa Grunwald ",
    "genre":"Science Fiction",
    "description":"A magical love story, inspired by the legend of a woman who vanished from Grand Central Terminal, sweeps readers from the 1920s to World War II and beyond, in the spirit of The Time Traveler’s Wife and The Curious Case of Benjamin Button.",
    "price":325,
    "urlToImage":"https://m.media-amazon.com/images/I/91Bay10Q6iL._AC_UL436_.jpg"
},
{
    "bookTitle":"The Girl in Red",
    "author":" Christina Henry",
    "genre":"Science Fiction",
    "description":"When a disease destroys most of the U.S. Population red and her brother Adam decide to try and reach their paternal grandmother, who lives over 200 miles away. Adam wants to join a quarantine camp, thinking it's the only way to survive in this new world, but red isn't letting herself get shut away. Red is about to find out that the woods are deep and dark and there are far worse things than wolves out in the world.",
    "price":235,
    "urlToImage":"https://images-na.ssl-images-amazon.com/images/I/51DQ1-LIMSL._SX326_BO1,204,203,200_.jpg"
},
{
    "bookTitle":"Leaving the Witness: Exiting a Religion and Finding a Life",
    "author":"Amber Scorah",
    "genre":"Non-Fiction",
    "description":"A riveting memoir of losing faith and finding freedom while a covert missionary in one of the world's most restrictive countries.",
    "price":440,
    "urlToImage":"https://m.media-amazon.com/images/I/61FCYPxeC4L._AC_UL436_.jpg"
},
{
    "bookTitle":"One Giant Leap: The Impossible Mission That Flew Us to the Moon",
    "author":"Charles Fishman",
    "genre":"Non-Fiction",
    "description":"The remarkable story of the trailblazers and the ordinary Americans on the front lines of the epic mission to reach the moon.",
    "price":500,
    "urlToImage":"https://m.media-amazon.com/images/I/7110rLwXFoL._AC_UL436_.jpg"
},
{
    "bookTitle":"Turn This World Inside Out: The Emergence of Nurturance Culture",
    "author":"Nora Samaran",
    "genre":"Non-Fiction",
    "description":"As Nora Samaran writes, “violence is nurturance turned backwards.” In its place, she proposes “nurturance culture” as the opposite of rape culture, suggesting that models of care and accountability—different from “call-outs” rooted in the politics of guilt—can move toward dismantling systems of dominance and oppression.",
    "price":450,
    "urlToImage":"https://m.media-amazon.com/images/I/81sWMDcnY7L._AC_UL436_.jpg"
}]
    
var exp = require('express');
const router = exp.Router();    

router.get("/",(req,res)=>{
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
            booksarr:books_arr
        }
    ); 
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
            ],
            booksarr:books_arr
        }
    ); 
})

router.get("/:id",(req,res)=>{
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
            book:books_arr[req.params.id]
        }
    );
})


module.exports=router;