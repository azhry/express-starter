'use strict';
// sequelize model:create --name yayasan --attributes name:string,description:text,address:text,status:enum,id_agama:integer,spin_phone_number:string,qris_image_url:text,priority:integer
module.exports = (sequelize, DataTypes) => {
  const yayasan = sequelize.define('yayasan', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    address: DataTypes.TEXT,
    status: {
      type: DataTypes.ENUM,
      values: ['active', 'nonactive']
    },
    id_agama: DataTypes.INTEGER,
    spin_phone_number: DataTypes.STRING,
    qris_image_url: DataTypes.TEXT,
    priority: DataTypes.INTEGER
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'yayasan'
  });
  yayasan.associate = function(models) {
    // associations can be defined here
    yayasan.hasMany(models.donasi, {
      foreignKey: 'id_yayasan',
      as: 'donasi'
    });
  };
  return yayasan;
};