const express = require("express");
const router = express.Router();

const buyers = require("../models/buyers.js");
const index = require("../models/index.js");
const property = require("../models/property.js");
const sellers = require("../models/sellers.js");

router.get("/", function(req, res) {
  buyers.all(function(data) {
    const hbsObject = {
      buyers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/", function(req, res) {
  buyers.create(["name", "sleepy"], [req.body.name, req.body.sleepy], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/cats/:id", function(req, res) {
  const condition = "id = " + req.params.id;

  console.log("condition", condition);

  cat.update(
    {
      sleepy: req.body.sleepy
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