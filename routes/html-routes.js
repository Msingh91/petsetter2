// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // cms route loads cms.html
  app.get("/owner", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/owner.html"));
  });

  // blog route loads blog.html
  app.get("/setter", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/setter.html"));
  });

  // authors route loads author-manager.html
  app.get("/map", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/map.html"));
  });

  app.get("/completion", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/completion.html"));
  });

   app.get("/signin", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signin.html"));
  });

   app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });


};
