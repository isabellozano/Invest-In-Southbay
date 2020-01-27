const express = require("express");
const router = express.Router();
const contact = require("../models/contact.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  contact.all(function(data) {
    const hbsObject = {
      contact: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/", function(req, res) {
  contact.create([
    "name", "sleepy"
  ], [
    req.body.name, req.body.sleepy
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api//:id", function(req, res) {
  const condition = "id = " + req.params.id;

  console.log("condition", condition);

  contact.update({
    sleepy: req.body.sleepy
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api//:id", function(req, res) {
  const condition = "id = " + req.params.id;

  cat.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
