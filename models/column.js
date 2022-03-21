module.exports = (sequelize, DataTypes) => {
  const Column = sequelize.define("Column", {
    title: DataTypes.STRING,
    status: DataTypes.STRING,
  });
  Column.associate = function (models) {
    Column.hasMany(models.Card, { as: "cards", foreignKey: "column_id" });
  };
  return Column;
};
