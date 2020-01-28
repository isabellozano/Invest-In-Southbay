const sequelize = require("../config/sequelize.js");

"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

if (config.use_env_variable) {
  const Sequelize = new Sequelize(process.env[config.use_env_const]);
} else {
  const Sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
  })
  .forEach(function(file) {
    var model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

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