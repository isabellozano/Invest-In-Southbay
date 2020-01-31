const express = require("express");
const router = express.Router();
const contact = require("../models/contacts.js");
const contact = require("../models/index.js");

router.get("/api/", function(req, res) {
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
    "", ""
  ], [
    req.body.name, req.body.
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api//:id", function(req, res) {
  const condition = "id = " + req.params.id;

  console.log("condition", condition);

  contact.update(req.body. condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api//:id", function(req, res) {
  const condition = "id = " + req.params.id;

  .delete(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
