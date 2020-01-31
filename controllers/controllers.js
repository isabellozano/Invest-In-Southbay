const express = require("express");
const router = express.Router();
const contact = require("../models/contacts.js");
const index = require("../models/index.js");
const apiRoutes = require("../controllers/api-routes.js");

router.get("/api-routes", function(req, res) {
  sellers.all(function(data) {
    const apiRoutes = {
      contact: data
    };
    console.log();
    res.render("index");
  });
});

router.post("/api-routes", function(req, res) {
  contact.create([
    "first_name", "last_name", "email"
  ], [
    req.body.name, req.body
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api-routes/:id", function(req, res) {
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

router.delete("/api-routes/:id", function(req, res) {
  const condition = "id = " + req.params.id;

  contact.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;

const unirest = require("unirest");
const req = unirest("POST", "https://zillowdimashirokovv1.p.rapidapi.com/GetChart.htm");

req.headers({
	"x-rapidapi-host": "ZillowdimashirokovV1.p.rapidapi.com",
	"x-rapidapi-key": "1cfe119f49msh628d89b9b9a0291p140adcjsne3653461e506",
	"content-type": "application/x-www-form-urlencoded"
});

req.form({
	"chartDuration": [
		"1year",
		"5years",
		"10years"
	],
	"unit-type": "dollar",
	"zws-id": "<required>"
});

req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});