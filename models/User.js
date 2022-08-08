// Makes the searchTeam Model available for other files (will also create a table)

module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    wins: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null
    },
    losses: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null
    }
  });
  return user;
};
// module.exports = function(sequelize, DataTypes) {
//   var User = sequelize.define("user", {
//     userName: DataTypes.STRING,
//     wins: DataTypes.INTEGER,
//     losses: DataTypes.INTEGER
//   });
//   return User;
// };
