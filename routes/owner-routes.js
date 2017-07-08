var db = require("../models");

module.exports = function(app) {
  app.get("/api/owners", function(req, res) {
    // 1. Add a join to include all of each Author's Posts
    db.owner.findAll({}).then(function(dbOwner) {
      res.json(dbOwner);
    });
  });



  app.post("/api/owners", function(req, res) {

    console.log("Owner Data:");
    console.log(req.body);

    db.owner.create({
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
