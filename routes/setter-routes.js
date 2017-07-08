var db = require("../models");

module.exports = function(app) {
  app.get("/api/setters", function(req, res) {
    // 1. Add a join to include all of each Author's Posts
    db.setter.findAll({}).then(function(dbSetter) {
      res.json(dbSetter);
    });
  });



  app.post("/api/setters", function(req, res) {

    console.log("Chirp Data:");
    console.log(req.body);

    setters.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    address:req.body.address,
    experience:req.body.experience,
    service:req.body.service,
    type:req.body.type,
    size:req.body.size,
    created_at: req.body.created_at
    }).then(function(results) {
      // `results` here would be the newly created chirp
      res.end();
    });

  });
};
