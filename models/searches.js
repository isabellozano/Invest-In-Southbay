const sequelize = require("../config/sequelize.js");

const search = {
  all: function(cb) {
    sequelize.all("searches", function(res) {
      cb(res);
    });
  },

  create: function(cols, vals, cb) {
    sequelize.create("searches", cols, vals, function(res) {
      cb(res);
    });
  },

  update: function(objColVals, condition, cb) {
    sequelize.update("searches", objColVals, condition, function(res) {
      cb(res);
    });
  },
  
  delete: function(condition, cb) {
    sequelize.delete("searches", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = search;