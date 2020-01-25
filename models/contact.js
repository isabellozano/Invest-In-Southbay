const sequelize = require("../config/sequelize.js");

const contact = {
  all: function(cb) {
    sequelize.all("contact info", function(res) {
      cb(res);
    });
  },

  create: function(cols, vals, cb) {
    sequelize.create("contact info", cols, vals, function(res) {
      cb(res);
    });
  },

  update: function(objColVals, condition, cb) {
    sequelize.update("contact info", objColVals, condition, function(res) {
      cb(res);
    });
  },
  
  delete: function(condition, cb) {
    sequelize.delete("contact info", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = contact;