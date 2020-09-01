// const express =  require("express");
// const { request, response } = require("express");
// const fetch = require("node-fetch")

// const app = express();

// app.get("/", (request, response) => {
    
//     let object = {
//         "url": "https://www.youtube.com/watch?v=SjmXERieW9s&list=RDCLAK5uy_lBNUteBRencHzKelu5iDHwLF6mYqjL-JU&start_radio=1"
//     }
//     let url = "https://rel.ink/"

//     setTimeout(goGet, 1000)
    
//     function goGet(){
//         fetch("https://rel.ink/api/links/", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//         },
//             body: JSON.stringify(object)
//         })
//             .then(response => response.json())
//             .then(data => console.log(data.hashid))
//             .catch(error => console.log("Something went wrong " + error))
        
//             function post(){
//                 response.send( url + object)
//             }
            
//             setTimeout(post, 5000)
//         }
    
    
    
     
// })


// app.listen(3000)