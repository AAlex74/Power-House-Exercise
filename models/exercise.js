/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('exercise', {
    exerciseId: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    exerciseName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    exerciseDuration: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    exerciseType: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'exercise'
  });
};
