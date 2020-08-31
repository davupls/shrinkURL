const express =  require("express");
const { request, response } = require("express");

const app = express();

app.get("/", (request, response) => {
    
    fetch("https://rel.ink/api/links/Nn8y9p/")
        

    response.send("hello")
})


app.listen(3000)