const buyers = require("../models/contacts.js");
const index = require("../models/index.js");
const property = require("../models/search_properties.js");
const sellers = require("../models/sellers.js");
const users = require("../models/users.js");

module.exports = function(app) {

  app.get("localhost:PORT/api/sellers", function(req, res) {
    res.json();
  });

  $.ajax({
    url: "https://cloudcma.com/api_widget/8eb1aae6aa73dda503933685b665e8d0/show?post_url=cloudcma.com&source_url=ua",
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });

    res.json({ ok: true });
}

  $.ajax({
    url: "https://zillowdimashirokovv1.p.rapidapi.com/GetChart.htm",
    method: "GET"
  }).then(function(response) {
    console.log(response);
});