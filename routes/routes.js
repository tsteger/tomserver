var fs = require('fs');
var appRouter = function(app) {
    
  app.get("/", function(req, res) {
    res.status(200).send({ message: "Welcome to Todo Api" });
  });
  app.post("/", function(req, res) {

   fs.writeFile("data.json", JSON.stringify(req.body), 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log("JSON file has been saved.");
});
    console.log(JSON.stringify(req.body));
    res.status(200).send({ message: "Welcome to Todo Api" });
  });

  app.get("/todos", function(req, res,) {
    let rawdata = fs.readFileSync('data.json');
    let data = JSON.parse(rawdata);
    console.log(data);
    res.status(200).send(data);
  });
};

module.exports = appRouter;
