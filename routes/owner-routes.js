var db = require("../models");

module.exports = function(app) {
  app.get("/api/owners", function(req, res) {
    // 1. Add a join to include all of each Author's Posts
    db.owners.findAll({}).then(function(dbSetter) {
      res.json(dbSetter);
    });
  });



  app.post("/api/owners", function(req, res) {

    console.log("Chirp Data:");
    console.log(req.body);

    owners.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    address:req.body.address,
    service:req.body.service,
    type:req.body.type,
    size: req.body.size,
    distance: req.body.distance,
    date_created:req.body.date_created
    }).then(function(results) {
      // `results` here would be the newly created chirp
      res.end();
    });

  });
};
