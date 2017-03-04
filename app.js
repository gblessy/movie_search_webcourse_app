var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("search");
})

app.get("/results", function(req, res){
    var query=req.query.search;  
    var url = 'https://www.omdbapi.com/?s=' + query;
    request(url, function(error, responce, body){
        if(!error&&responce.statusCode == 200 ){
            var data = JSON.parse(body);
            // res.send(parsedBody["Search"][0]["Title"]);
            res.render("results", {data: data});
        }
   
    })
})


//Start the server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Movie app has started!");
});