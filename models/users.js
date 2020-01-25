const sequelize = require("../config/sequelize.js");

const user = {
  all: function(cb) {
    sequelize.all("users", function(res) {
      cb(res);
    });
  },

  create: function(cols, vals, cb) {
    sequelize.create("users", cols, vals, function(res) {
      cb(res);
    });
  },

  update: function(objColVals, condition, cb) {
    sequelize.update("users", objColVals, condition, function(res) {
      cb(res);
    });
  },
  
  delete: function(condition, cb) {
    sequelize.delete("users", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = user;