'use strict';
// sequelize model:create --name agama --attributes name:string,description:text,priority:integer
module.exports = (sequelize, DataTypes) => {
  const agama = sequelize.define('agama', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    priority: DataTypes.INTEGER
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'agama'
  });
  agama.associate = function(models) {
    // associations can be defined here
    agama.hasMany(models.yayasan, {
      foreignKey: 'id_agama',
      as: 'yayasan'
    });
  };
  return agama;
};