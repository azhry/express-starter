'use strict';
// sequelize model:create --name donasi --attributes id_yayasan:integer,amount:decimal,phone_number:string,category:enum
module.exports = (sequelize, DataTypes) => {
  const donasi = sequelize.define('donasi', {
    id_yayasan: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL,
    phone_number: DataTypes.STRING,
    category: {
      type: DataTypes.ENUM,
      values: ['spin', 'other']
    }
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'donasi'
  });
  donasi.associate = function(models) {
    // associations can be defined here
  };
  return donasi;
};