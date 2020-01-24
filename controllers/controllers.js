const express = require("express");
const router = express.Router();

const buyers = require("../models/buyers.js");
const index = require("../models/index.js");
const property = require("../models/property.js");
const sellers = require("../models/sellers.js");

router.get("/", function(req, res) {
  buyers.all(function(data) {
    const handlebars = {
      buyers: data
    };
    console.log(handlebars);
    res.render("index", handlebars);
  });
});

router.post("/api/", function(req, res) {
  buyers.create(["name", "sleepy"], [req.body.name, req.body.sleepy], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api//:id", function(req, res) {
  const condition = "id = " + req.params.id;

  console.log("condition", condition);

  .update(
    {
      : req.body.
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

module.exports = router;