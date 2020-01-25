module.exports = function(sequelize, DataTypes) {
    const seller = sequelize.define("seller", {
      name: DataTypes.STRING
    });
  
    seller.associate = function(models) {

      seller.hasMany(models.Post, {
        onDelete: "cascade"
      });
    };
  
    return seller;
  };