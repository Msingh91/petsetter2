module.exports = function(sequelize,DataTypes){

// Creates a "Chirp" model that matches up with DB
var setter = sequelize.define("setter", {
  first_name: {
    type: DataTypes.STRING
  },
  last_name: {
    type: DataTypes.STRING
  },  
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  address: {
    type: DataTypes.STRING
  },
   experience: {
    type: DataTypes.INTEGER
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
   date_created: {
    type: DataTypes.INTEGER
  }

})

return setter;
}
