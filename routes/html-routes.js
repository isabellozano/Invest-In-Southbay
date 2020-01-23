const path = require("path");

module.exports = function(app) {

  app.get("/buyers", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/buyers.html"));
  });

  app.get("/sellers", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/sellers.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../investInSouthBay/index.html"));
  });
};