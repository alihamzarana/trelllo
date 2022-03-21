module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define("Card", {
    title: DataTypes.STRING,
    status: DataTypes.STRING,
    description: DataTypes.STRING,
    ordering: DataTypes.INTEGER,
  });
  Card.associate = function (models) {
    Card.belongsTo(models.Column, { foreignKey: "column_id" });
  };

  return Card;
};
