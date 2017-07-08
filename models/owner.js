module.exports = function(sequelize,DataTypes){

// Creates a "Chirp" model that matches up with DB
var owner = sequelize.define("owner", {
  first_name: {
    type: DataTypes.STRING
  },
  last_name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  address: {
    type: DataTypes.STRING
  },
   service: {
    type: DataTypes.STRING
  },
   type: {
    type: DataTypes.STRING
  },
   size: {
    type: DataTypes.STRING
  },
   distance: {
    type: DataTypes.INTEGER
  },
   date_created: {
    type: DataTypes.DATE
  }
}) 

return owner;
}

